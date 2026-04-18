/**
 * Converts all JPEG/PNG in /public to WebP.
 * Run once: node scripts/convert-to-webp.mjs
 * Original files are kept; WebP versions are added alongside.
 */
import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

const files = readdirSync(publicDir).filter((f) =>
  EXTENSIONS.has(extname(f).toLowerCase())
)

for (const file of files) {
  const input = join(publicDir, file)
  const output = join(publicDir, basename(file, extname(file)) + '.webp')

  // Skip if WebP already exists and is newer
  try {
    const inputMtime = statSync(input).mtimeMs
    const outputMtime = statSync(output).mtimeMs
    if (outputMtime >= inputMtime) {
      console.log(`⏭  Skip (up to date): ${file}`)
      continue
    }
  } catch {
    // output doesn't exist yet — proceed
  }

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output)

  const { size: inSize } = statSync(input)
  const { size: outSize } = statSync(output)
  const saving = (((inSize - outSize) / inSize) * 100).toFixed(0)
  console.log(`✓  ${file} → .webp  (${saving}% smaller)`)
}

console.log(`\nDone. Add "webp" variants to your components via <picture> or CSS image-set().`)

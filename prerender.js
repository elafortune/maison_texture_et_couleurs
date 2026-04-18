/**
 * Post-build prerender script.
 * Usage: run automatically via `npm run build`
 * Generates static HTML for /, /prestations, /soins
 * Inlines critical CSS via beasties (faster FCP)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Beasties from 'beasties'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const beasties = new Beasties({
  path: toAbsolute('dist'),
  publicPath: '/',
  pruneSource: false,
  logLevel: 'silent',
})

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/_ssr/entry-server.js')

const routes = ['/', '/prestations', '/soins']

for (const url of routes) {
  const { html: appHtml, helmet } = render(url)

  const headTags = [
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ].filter(Boolean).join('\n    ')

  const pageTitle = helmet?.title?.toString() ?? ''

  let pageHtml = template
    .replace(/<title>[^<]*<\/title>/, pageTitle)
    .replace('<!--app-html-->', appHtml)
    .replace('<!--app-head-->', headTags)

  // Inline critical CSS for faster FCP
  pageHtml = await beasties.process(pageHtml)

  const filePath = url === '/'
    ? toAbsolute('dist/index.html')
    : toAbsolute(`dist${url}/index.html`)

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, pageHtml)
  console.log(`✓  Pre-rendered: ${url}`)
}

fs.rmSync(toAbsolute('dist/_ssr'), { recursive: true, force: true })
console.log('✓  SSR bundle cleaned')

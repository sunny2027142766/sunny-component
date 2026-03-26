import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

Object.defineProperty(process.versions, 'node', {
  value: '18.9.0',
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const command = process.argv[2]
const { build, createServer, serve } = await import('vitepress')

if (command === 'build') {
  await build(root, {
    onAfterConfigResolve(siteConfig) {
      siteConfig.site.title = 'Grid Edit UI'
      siteConfig.site.description = 'Vue 3 Monorepo component documentation powered by VitePress.'
    },
  })
} else if (command === 'dev') {
  const server = await createServer(root, {
    host: '127.0.0.1',
    port: 4174,
  })

  await server.listen()
  server.printUrls()
} else if (command === 'preview') {
  await serve({
    root,
    host: '127.0.0.1',
    port: 4175,
  })
} else {
  throw new Error(`Unknown command: ${command}`)
}

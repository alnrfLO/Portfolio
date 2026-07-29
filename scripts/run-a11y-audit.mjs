import { existsSync, readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { spawn } from 'node:child_process'

const ROUTES = ['/', '/accessibilite', '/mentions-legales']

const AXE_ARGS = [
  ...ROUTES.map((route) => `http://localhost:4173${route}`),
  '--exit',
  '--tags', 'wcag2a,wcag2aa,wcag21a,wcag21aa',
]

function loadBrowserDriverManagerEnv() {
  const envPath = join(homedir(), '.browser-driver-manager', '.env')
  if (!existsSync(envPath)) return

  const content = readFileSync(envPath, 'utf-8')
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^([A-Z_]+)="?(.*?)"?$/)
    if (match) {
      const [, key, value] = match
      if (!process.env[key]) process.env[key] = value
    }
  }
}

loadBrowserDriverManagerEnv()

const child = spawn('npx', ['axe', ...AXE_ARGS], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
})

child.on('exit', (code) => process.exit(code ?? 1))

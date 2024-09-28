import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx}', './pages/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system'
})

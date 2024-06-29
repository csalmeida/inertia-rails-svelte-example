import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    svelte(),
    RubyPlugin(),
  ],
})

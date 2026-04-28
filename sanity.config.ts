import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'gammastrat',
  title: 'GammaStrat CMS',
  projectId: 'fa41e7wa',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
})

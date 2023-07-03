import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {schemaTypes} from './schemas'
//import author from './sanity/schemas/author'
import schemas from './sanity/schemas'

 const config = defineConfig({


  projectId: '10uu4iux',
  dataset: 'production',

  name: 'default',
  title: 'sanityOpenvoice',
  apiVersion:'2023-07-04',
  basePath:"/admin",

  plugins: [deskTool(), visionTool()],
  schema:{types:schemas}


})
export default config
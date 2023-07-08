import {defineField, defineType} from 'sanity'

 const comment ={
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description:'comment will show after approved'
    }),
    defineField({
      name: 'email',
      type: 'string',
     
    }),
    defineField({
      name: 'comment',
      type: 'text',
     
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to:{type: 'post'},
    }),
  ]

}
export default comment
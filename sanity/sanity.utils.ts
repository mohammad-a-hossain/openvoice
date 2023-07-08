import {createClient, groq }from 'next-sanity'


import { Posts } from '../types/type.ts'

import clientConfig from './config/client-config'




export async function getPosts():Promise<Posts[]>{

    return createClient(clientConfig).fetch(groq`*[_type=='post']{
      _id,
      title,
      "slug":slug.current,
      author -> {
        name,
         "image":image.asset->url,
       },
      
      "mainImage":mainImage.asset ->url,
     }`
    )
}





export async function getPost(slug:string):Promise<Posts>{

  return createClient(clientConfig).fetch(groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    "slug":slug.current,
    author -> {
      name,
       "image":image.asset->url,
     },
    
    description, 
    "mainImage":mainImage.asset ->url,
    body,
   }`,
   {slug:slug}
  )
}

/* 
//  "comment":*[_type == "comment" && post._ref == ^._id && approved ==true ],
*/

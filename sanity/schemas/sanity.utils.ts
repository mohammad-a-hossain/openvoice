import {createClient, groq }from 'next-sanity'

export async function getPosts(){
    const client= createClient({
        projectId: '10uu4iux',
        dataset: 'production',
        apiVersion:'2023-07-04',
        useCdn: true,

    })

    return client.fetch(`*[_type=='post']{
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

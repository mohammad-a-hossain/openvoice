import {createClient, groq }from 'next-sanity'

export async function getPosts(){
    const client= createClient({
        projectId: '10uu4iux',
        dataset: 'production',
        apiVersion:'2023-07-04',

    })

    return client.fetch(
    ` *[_type=='post']{
        _id,
          title,
          author -> {
            image,
            name
          },
          body,
          mainImage,
          slug
     }`
    )
}

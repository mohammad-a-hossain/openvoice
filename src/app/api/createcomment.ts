

// import type { NextApiRequest, NextApiResponse } from 'next';
// //import {createClient} from '@sanity/client' 
// import {createClient }from 'next-sanity'


// const client =createClient({
//     projectId: '10uu4iux',
//     dataset: 'production',
//     useCdn: true,
//     token:"skKdKroPqm2Q4zePmTlrTvCBFXHZVzXHnfI04FZgbg0EJPYGi0NgwHDh8Yacufj8J3SxKCzr9a4MITQyAmzyn0r6fAoRdkpS4X8pvFJRzrKBylAniM4iBYEPQiiDqjwdB2d6IaqoczC6rpvmc42VL6q4kCf2XUEKhtSSByE2SWWDThj4g4xo"
// })


// export default async function createcomment(req:NextApiRequest, res:NextApiResponse){
//     const {_id, name, email, comment} = JSON.parse(req.body)
//     try{
//         await client.create({
//             _type: "comment",
//             post:{
//                 _type:"reference",
//                 _ref:_id,
//             },
//             name,
//             email,
//             comment,
//         })

//     }catch(err){
//        return res.status(500).json({message:'cant nt submited'})

//     }
//     console.log('comment subemited')
//     res.status(200).json({message:'comment submitted'})
// }


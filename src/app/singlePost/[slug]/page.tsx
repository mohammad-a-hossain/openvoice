'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Footers from '@/components/footers'
import Headers from '@/components/Headers'
import { getPost } from '../../../../sanity/sanity.utils'
import PortableText from "react-portable-text"
import { useForm, SubmitHandler } from "react-hook-form"



type Props ={
  params:{posts:string};
}

type Inputs={
  _id:string;
  name:string;
  email:string;
  comment:string;
}


export default async function Posts( {params} :Props) {
  
  const [submitted, setSubmitted] = useState(false)
  
  

      const slug = params.slug;

      const posts = await getPost(slug);
     // console.log(posts)

     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();
     

      const onSubmit:SubmitHandler<Inputs> = (data) =>{
       fetch("/api/createcomment",{
        method:'POST',
        body: JSON.stringify(data),
       }).then(()=>{
        setSubmitted(true)
       }).catch((err) =>{
        setSubmitted(false)
       })
      }
     
  return (  
    <div>
      <Headers/>
 
        <img className='object-cover w-full h-42' src={posts.mainImage}   alt='image'/>
      
        <div className='max-w-3xl p-4 mx-auto bg-red-200'>
     
     
            <h1 className='font-medium text-[32px] text-primary border-b-[1px]'>{posts.title}</h1>
            <h2 className='font-medium text-[18px] text-gray-500 mb-2'>{posts.description}</h2>
            <div>
            <img className='object-cover w-12 h-12 rounded-full' src={posts.author.image} alt='author image' />
            <p>post by <span>{posts.author.name}</span> 
            =publish at {''} {posts.publishedAt}
             </p>
            </div>
            <article className='w-full p-5 mx-auto mb-10'>
              
            <div className='mt-10'>

            <PortableText 
             projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "10uu4iux"}
             dataset = {process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
             content= {posts.body}

             serializers={{
              h1: (props:any) =>(<h1 className='my-5 text-3xl font-bold ' {...props} />),
              h2: (props:any) =>(<h2 className='my-5 text-2xl font-bold ' {...props} />),
              h3: (props:any) =>(<h3 className='my-5 text-2xl font-bold ' {...props} />),
              li: ({children}:any) =>(<li className='ml-4 list-disc'> {children}</li>),
            
              link:({href, children}:any) => (
                <a href={href} className='text-slate-500 hover:underline'>
                  {children}
                    </a>
              )
             
            }}
            />
            
            </div>
            </article>
            <hr className='max-w-lg my-5 mx-auto border[1px]'/>
            <div>
              <p>enjoy the atricle !!</p>
              <h3>leave a comment bellow </h3>
              <hr className='py-3 mt-2'/>
              <input {...register("_id")}
              type="hidden"
              name="_id"
              value={posts._id}
  
              />
              <form onSubmit= {handleSubmit(onSubmit)}>
                <label className='flex flex-col'>
                  <span className='text-base font-semibold'>name</span>

                  <input
                  {...(register("name"),{required:true})}
                   type='text' placeholder='enter your comment' 
                   className='text-base placeholder:text-sm border-b-[1px] py-1 px-4 outline-none focus-within:shadow-xl'/>  
                </label>

                <label className='flex flex-col'>
                  <span className='text-base font-semibold'>email</span>
                  <input   {...(register("email"),{required:true})}
                   type='email' placeholder='enter your email' 
                   className='text-base placeholder:text-sm border-b-[1px] py-1 px-4 outline-none focus-within:shadow-xl'/>  
                </label>

                <label className='flex flex-col'>
                  <span className='font- rows={6}semibold text-base'>comment</span>
                  <textarea type='text'  placeholder='enter your comment'
                    className='text-base placeholder:text-sm border-b-[1px] 
                    py-1 px-4 outline-none focus-within:shadow-xl'  {...(register("comment"),{required:true})}/>  
               
                </label>
                <button className='w-full py-2 text-base text-white bg-gray-700 rounded-sm'
                 type='submit'>
                  submit
                  </button>

              </form>
            </div>

        </div>  


     
      <Footers />
      </div>
  )
}

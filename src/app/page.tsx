import Headers from '../Components/Headers'
import Banner from '../Components/Bannar'
import BannerBottom from '../Components/BannerBottom'
import Footers from '../Components/footers';
import Image from 'next/image'
import Link from 'next/link'

import { getPosts } from '../../sanity/sanity.utils';

//import { Post } from './../type.d';





export default async function Home() {
  const posts = await getPosts()
 // console.log(posts)
  return (
   <div>
    
   
    <Headers />
    <Banner />
    <div className="relative mx-auto max-w-7xl h-60 bg-slate-500">
      <BannerBottom />
    </div>
 
    <div className='grid grid-cols-3 px-4 py-20 max-w-7xl max-auto'>
      
    {
    posts.map((post:any) =>(
     
      <Link key={post._id} href={`/singlepost/${post.slug}`}>
      <div className='border-[1px] border-secondaryColor border-opacity-40 h-[450px] m-2 bg-slate-400' key={post._id}>
       
        
        <Image src={post.mainImage} width={380} height={380} alt='image'/>
        
        
          {post.title}- {post.author.name}
         
          <img  className='object-cover w-12 h-12 rounded-full' src={post.author.image} alt='author' />

          
        </div>

      </Link>
    ) )
    }
    </div>

    <Footers />
  
  </div>
  )
}



// export function getStaticPatchs(){

// }

// export function getStaticProps(){
//   return {
//     props:{
//       posts:[]
//     }
//   }

// }



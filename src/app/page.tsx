import Header from '../Components/Header'
import Banner from '../Components/Bannar'
import BannerBottom from '../Components/BannerBottom'
import Footer from '../Components/footer';

import { getPosts } from '../../sanity/schemas/sanity.utils';



export default async function Home() {
  const posts = await getPosts()
  return (
   <main>
    
   
    <Header />
    <Banner />
  
    <div className="relative mx-auto max-w-7xl h-60 bg-slate-500">
      <BannerBottom />
    </div>
 
    <div className="px-4 py-20 mx-auto max-w-7xl">
      
    {posts.length}
    </div>

    <Footer />
  
  </main>
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



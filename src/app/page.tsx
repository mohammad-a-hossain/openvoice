import Header from '../Components/Header'
import Banner from '../Components/Bannar'
import BannerBottom from '../Components/BannerBottom'
import Footer from '../Components/footer';

export default function Home() {
  return (
   <main>
   
    <Header />
    <Banner />
  
    <div className="relative mx-auto max-w-7xl h-60 bg-slate-500">
      <BannerBottom />
    </div>
 
    <div className="px-4 py-20 mx-auto max-w-7xl">Posts will go here</div>
    <Footer />
  
  </main>
  )
}



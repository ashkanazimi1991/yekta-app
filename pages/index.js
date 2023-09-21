
import Head from 'next/head';
import Hero from '@/components/Hero';
import Botox from '@/components/Botox';
import Thinness from '../components/Thinness';
import HeroAbout from '@/components/HeroAbout';
import FixedVideo from '@/components/FixedVideo';
import Faq from '@/components/Faq';

export default function Home() {
  return (

<div className='bg-[#00000065]' >
    <Head>
        <title>Yekta Beauty Clinic </title>
        <meta name="description" content="کلینیک زیبایی یکتا" />
        <meta name="theme-color" content="#22577E"/>
        <link rel="icon" href="/images/yekta_logo.png" />
        <link rel='manifest' href='/manifest.json' />  
     </Head>


     <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-full h-screen "  >
             <source   src="/video/bg.mp4"   type="video/mp4"  />
             <meta name="apple-mobile-web-app-capable" content="yes">

             </meta>
                Your browser does not support the video tag.
            </video>   
<div className='flex flex-col'>

    <Hero/>
    <HeroAbout/>
    <Botox/>
    <FixedVideo/>
    <Thinness/>
    <Faq/>
</div>



   


    </div>
    

    
  )
}

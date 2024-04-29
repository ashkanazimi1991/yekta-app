import Head from 'next/head';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery/Gallery';
// import DownloadPWA from '../components/DownloadPWA';

const Botox = dynamic(() => import('../components/Botox'))
const CollapsibleListB = dynamic(() => import('../components/CollapsibleListB'))
const CollapsibleListT = dynamic(() => import('../components/CollapsibleListT'))
const CollapsibleListL = dynamic(() => import('../components/CollapsibleListL'))
const CollapsibleListFiler = dynamic(() => import('../components/CollapsibleListFiler'))
const CollapsibleListFacial = dynamic(() => import('../components/CollapsibleListFacial'))
const CollapsibleListLifting = dynamic(() => import('../components/CollapsibleListLifting'))


const Fecial = dynamic(() => import('../components/Fecial'))

const Thinness = dynamic(() => import('../components/Thinness'))
const HeroAbout = dynamic(() => import('../components/HeroAbout'))
// const FixedVideo = dynamic(() => import('../components/FixedVideo'))
const Laser = dynamic(() => import('../components/Laser'))
const Faq = dynamic(() => import('../components/Faq'))
const Filer = dynamic(() => import('../components/Filer'))
const Lifting = dynamic(() => import('../components/Lifting'))
const Tato = dynamic(() => import('../components/Tato'))
const Co2 = dynamic(() => import('../components/Co2'))
const CollapsibleListCo2 = dynamic(() => import('../components/CollapsibleListCo2'))






// import GridGallery from '@/components/grid-gallery';






export default function Home() {

  return (

<div className='' >
    <Head>
        <title>Yekta Beauty Clinic </title>
        <meta name="description" content="کلینیک زیبایی یکتا" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/yekta_logo.png" />
        <link rel='manifest' href='/manifest.json' />  
     </Head>


     {/* <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-full h-screen "  >
             <source   src="/video/bg.mp4"   type="video/mp4"  />
             <meta name="apple-mobile-web-app-capable" content="yes">

             </meta>
                Your browser does not support the video tag.
            </video>    */}
<div>

    <Hero/>
    <HeroAbout/>
    <Botox/>
    <CollapsibleListB />
    {/* <FixedVideo/> */}
    <Thinness/>
    <CollapsibleListT />
    <Laser/>
    <CollapsibleListL />
    <Filer/>
    <CollapsibleListFiler/>
    <Fecial/>
    <CollapsibleListFacial/>
    <Lifting/>
    <CollapsibleListLifting/>
    <Tato/>
    <Co2/>
    <CollapsibleListCo2/>
    <Gallery/>
    <Faq/>
  
</div>



   


    </div>
    

    
  )
}

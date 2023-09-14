import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (

<div >
<Head>
        <title>Yekta Beauty Clinic </title>
        <meta name="description" content="کلینیک زیبایی یکتا" />
        <meta name="theme-color" content="#22577E"/>
        <link rel="icon" href="/images/yekta_logo.png" />
        <link rel='manifest' href='/manifest.json' />  
      </Head>
{/* <div className='fixed top-0 -z-10'>
         <video   autoPlay loop muted  className="fixed -z-10 object-cover object-right-1/2 w-full h-screen "  >
             <source   src="/video/bg.mp4"   type="video/mp4"  />
             <meta name="apple-mobile-web-app-capable" content="yes">

             </meta>
                Your browser does not support the video tag.
            </video>        
          </div> */}
<div className='min-h-screen bg-rose-200 flex flex-col justify-center items-center'>
    <Image className='w-20 object-contain ' width='100' height='100'  alt='کلینیک زیبایی'
                  src='/images/yekta_logo.png'/>
     <h2 className='text-[#a82ca8]   leading-10 text-center text-2xl '>Yekta Beauty Clinic <br></br>Application<br></br> COMING SOON!!</h2>
    </div>
    
</div>
    
  )
}

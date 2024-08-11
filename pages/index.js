import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ToolsSlider from "@/components/ToolsSlider";
import Gallery from "@/components/Gallery/Gallery";
// import FixedVideo from "@/components/FixedVideo";
// import DownloadPWA from '../components/DownloadPWA';

const Botox = dynamic(() => import("../components/Botox"));
const CollapsibleListB = dynamic(() =>
  import("../components/CollapsibleListB")
);
const CollapsibleListT = dynamic(() =>
  import("../components/CollapsibleListT")
);
const CollapsibleListL = dynamic(() =>
  import("../components/CollapsibleListL")
);
const CollapsibleListFiler = dynamic(() =>
  import("../components/CollapsibleListFiler")
);
const CollapsibleListFacial = dynamic(() =>
  import("../components/CollapsibleListFacial")
);
const CollapsibleListLifting = dynamic(() =>
  import("../components/CollapsibleListLifting")
);

const Fecial = dynamic(() => import("../components/Fecial"));

const Thinness = dynamic(() => import("../components/Thinness"));
const HeroAbout = dynamic(() => import("../components/HeroAbout"));
// const FixedVideo = dynamic(() => import('../components/FixedVideo'))
const Laser = dynamic(() => import("../components/Laser"));
const Faq = dynamic(() => import("../components/Faq"));
const Filer = dynamic(() => import("../components/Filer"));
const Lifting = dynamic(() => import("../components/Lifting"));
const Tato = dynamic(() => import("../components/Tato"));
const Co2 = dynamic(() => import("../components/Co2"));
const CollapsibleListCo2 = dynamic(() =>
  import("../components/CollapsibleListCo2")
);

// import GridGallery from '@/components/grid-gallery';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dr Shaghaghi Clinic </title>
        <meta name="description" content="کلینیک زیبایی دکتر شقاقی" />
        <meta name="theme-color" content="#142028" />
        <link rel="icon" href="/images/yekta_logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* <video
        autoPlay
        loop
        muted
        className="fixed -z-10 object-cover  w-full h-screen "
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        Your browser does not support the video tag.
      </video> */}
      <div>
        {/* <FixedVideo /> */}
        <HeroAbout />
        <Hero />
        <ToolsSlider
        // img1="/images/t1005.jpg"
        // img2="/images/t1001.jpg"
        // img3="/images/thindevice.webp"
        // img4="/images/t1004.jpg"
        // img5="/images/t1003.jpg"
        // title1=" ثبت سفارش  "
        // title2="----- "
        // des1="دستگاه هایفو چهار بعدی جوانسازی و لیفتینگ پوست "
        // des2="2دستگاه نمونه "
        />
        <Botox />
        <CollapsibleListB />
        {/* <FixedVideo/> */}
        <Thinness />
        <CollapsibleListT />
        <Laser />
        <CollapsibleListL />
        <Filer />
        <CollapsibleListFiler />
        <Fecial />
        <CollapsibleListFacial />
        <Lifting />
        <CollapsibleListLifting />
        <Tato />
        <Co2 />
        <CollapsibleListCo2 />
        {/* <Gallery /> */}
        <Faq />
      </div>
    </div>
  );
}

import React ,{useState}from 'react';


import Acordian from '../CollapsibleListB'
const CollapseB = () => {
    const [open, setOpen ] = useState(false);
    const toggle = ( id) => {
      if(open === id) {
        return setOpen(null)
      }
      setOpen(id)
    }
    
    const acodionData =[
      {
        id:'1',
        img: '/images/botax.jpg',
        title:"پلتفرم های کارآفرینی",
        desc:"اگر ایده ای در ذهن دارید که می خواهید به دنیا ارائه دهید، به ما بپیوندید. هر ایده استارتاپی برای مدیریت کسب و کار یا خدمات خود به پلتفرم خاص خود نیاز دارد. ما بر اساس نیازهای دقیق شما با فریمورک ها و زبان های برنامه نویسی برتر دنیا پلتفرم شما را طراحی و اجرا میکنیم",
        alt:"online ceo",
        btnLable:"اطلاعات بیشتر",
        btnlink:"/galleryP"
      },
      {
        id:'2',
        img: '/images/botax.jpg',
        title:"پلتفرم ها فروشگاهی ",
        desc:"فروشگاه‌های آنلاین با مقیاس بالا که برای هزاران یا میلیون‌ها کاربر توسعه داده می شوند، با ویژگی های از قبیل رابط کاربری و تجربه کاری بی‌نقص با ارائه های روز دنیا مانند مشاهده سه بعدی محصولات, واقعیت افزوده و داشبورد های تحلیلی توسط زبان‌های برنامه‌نویسی  برتر دنیا پایتون و جاوا اسکریپت ، با این هدف که مدیران عامل بتوانند پلتفرم‌های سریع و ایمن با ویژگی‌های خاص خود را داشته باشند. و پلتفرم برای همیشه امکان توسعه داشته باشد "  ,
        alt:"online ceo",     
        btnLable:"اطلاعات بیشتر",
        btnlink:"/shopP"
      },


  
    ]
  
  return (
    <div>
   
                      
                                
                    
    </div>
  )
}

export default CollapseB
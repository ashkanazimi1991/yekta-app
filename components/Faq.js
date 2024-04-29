import React from 'react'
import Link from 'next/link'
import SliderP from './SliderP'
// import ToolsSlider from './ToolsSlider'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,Box,
  AccordionIcon, ChakraProvider, extendTheme, 
} from '@chakra-ui/react'


const fonts = {
    body:'IRANSansWeb',
    

}
const theme= extendTheme({fonts})



const Faq = () => {
  return (
    <ChakraProvider theme={theme}>
    <div className='flex flex-col justify-center items-center py-14 bg-[#fdfdfdd5]'>

   
   
    <div className=' px-[15%] md:px-[2%] space-x-4 md:space-x-0 md:space-y-4 flex md:flex-col w-full '>

      <div className=' w-1/2 md:w-full   '>
        <p className='text-gray-600 text-center w-full border-b-2 py-4 pt-4'> نظرات مراجعه کنندگان </p>
         <SliderP/>
      </div>

      <div className=' w-1/2  md:w-full'>
      <div>
      <p className='text-md text-gray-700 py-4 text-center'>
       سوالات متداول 
      </p>
      </div>

      <Accordion dir='rtl' allowToggle >
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            واقعا دستگاه لاغری جواب میده؟                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        بله خصوصا برای چاقی موضعی مثل پهلو ٫غبغب ٫زیر شکم
یک بار کرایو انجام بدم جواب میده؟کرایو ماهی یک جلسه انجام میشه که طی هفته دو جلسه کویتیشن حتما ۳الی ۴جلسه لاغری رو احساس میکنید                        </AccordionPanel>
                    </AccordionItem>

     
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            هایفو‌برای چه کسانی مناسب میباشد؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        برای تمام افراد از ۲۵تا ۶۵سالگی هم به عنوان جوانسازی و هم لیفت انجام میشه                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            هایفو چند وقت یک‌بار انجام میشه؟                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4}  fontSize='sm'>
                        سالی یک بار       
                       </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
برای  رفع موهای زائد چند جلسه باید لیزر کرد                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4}  fontSize='sm'>
                        از جلسه اول نتیجه کار رو میبینید حد اکثر ۳الی۸جلسه    
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            بازه زمانی نتیجه دهی دستگاه co2 چقدر است؟
                                                                                    </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        با توجه به عمق اسکار بعد از بررسی‌های لازم تعداد جلسات لیزر فرکشنال co2 تعیین می‌شود که حداکثر برای دریافت نتایج مطلوب نیاز به ۳ تا ۴ جلسه می‌باشد                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            ماندگاری دستگاه CO2  تا چندوقت می باشد؟                                                                                    </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                            مراقبت‌های بیمار بعد از لیزر از پوست خود
                          سلامت عمومی بدن
                          استعمال دخانیات,
                          کاهش یا افزایش قابل توجه وزن,
                          عدم استفاده از کرم ضد آفتاب یا کلاه در مقابل نور خورشید بستگی دارد بنابراین اگر می‌خواهید لیزر فرکشنال CO2   برای پوست شما نتایج ماندگار داشته باشد بهتر است توصیه های متخصص را در خصوص نحوه مراقبت از پوست خود بعد از لیزر به دقت رعایت نمایید اما بطور کلی برای پروسه های اسکار بعد جراحی  مادام العمر ولی برای جای جوش یا جوانسازی و بردن چین و چروک صورت سالی یک بار یا حتی دو سال یک بار                                       </AccordionPanel>
                     </AccordionItem>

                     
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            تفاوت فیشال  و پاکسازی چیست ؟           
                             </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        فیشال در بازه زمانی ۱ تا۲ ساعت انجام میشود ولی پاکسازی جزئی از فیشال است و مدت زمان کمتری طول می کشد
                        </AccordionPanel>
                                  
                     
                     </AccordionItem>


                     <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            آیا فیشال فقط برای صورت انجام می شود ؟                             </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        خیر ، برای نواحی مثل زیر بغل ، زانو ، دست ها ، کشاله ران نیز انجام می شود         
                        </AccordionPanel>
                                  
                     
                     </AccordionItem>

                     
                     <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            آیا فیشال فقط توسط پزشک انجام می شود ؟                             </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.600' pb={4} fontSize='sm'>
                        خیر ،  فیشال توسط اسکین کر در کلینیک و تحت نظر پزشک انجام می شود و پزشک در پروسه درمان دخیل می باشد        
                        </AccordionPanel>
                                  
                     
                     </AccordionItem>
      </Accordion>

      </div>
      
      
      
      
      

      
      </div>
  
    </div>
      </ChakraProvider>
    
  )
}

export default Faq
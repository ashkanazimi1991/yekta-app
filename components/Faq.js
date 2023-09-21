import React from 'react'
import Link from 'next/link'
import SliderP from './SliderP'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,Box,
  AccordionIcon, ChakraProvider, extendTheme, 
} from '@chakra-ui/react'


const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})



const Faq = () => {
  return (
    <ChakraProvider theme={theme}>
    <div className=' flex-col py-14 bg-[#000000c2]'>

   
   
   
   
   
    <div className=' px-[15%] md:px-[2%] space-x-4 md:space-x-0 md:space-y-4 flex md:flex-col w-full '>

      <div className=' w-1/2 md:w-full   '>
        <p className='text-gray-100 text-center w-full border-b-2 py-4 pt-4'> نظرات مراجعه کنندگان </p>
         <SliderP/>
      </div>

      <div className=' w-1/2  md:w-full'>
      <div>
      <p className='text-md text-gray-300 py-4 text-center'>
       سوالات متداول و نظرات کاربران
      </p>
      </div>

      <Accordion dir='rtl' allowToggle >
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            .....................؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
...................................................................................................................................................
                        </AccordionPanel>
                    </AccordionItem>

     
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            .....................؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
...................................................................................................................................................
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            .....................؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
...................................................................................................................................................
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            .....................؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
...................................................................................................................................................
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            .....................؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
...................................................................................................................................................
                        </AccordionPanel>
                    </AccordionItem>

      </Accordion>

      </div>
      
      
      
      
      

      
      </div>
      <div>
      <Link href='https://boghrat.com/clinics/yekta-aesthetic-group/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%DB%8C%DA%A9%D8%AA%D8%A7' className=' flex justify-center pt-8'>
                    <p className='text-white flex justify-center border-gray px-4 bg-[#E08798] py-2 border-2 text-md rounded-2xl shadow-2xl '>دریافت نوبت</p>
      </Link>
      </div>
    </div>
      </ChakraProvider>
    
  )
}

export default Faq
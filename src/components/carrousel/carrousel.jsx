import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { FcAndroidOs } from 'react-icons/fc';
import { GrAppleAppStore } from 'react-icons/gr';

import './carrousel.css'
import { FaAndroid } from 'react-icons/fa';
import { createStyles } from '@mantine/core';

// const useStyles = createStyles((_theme, _params, getRef) => ({
//   controls: {
//     ref: getRef('controls'),
//     transition: 'opacity 150ms ease',
//     opacity: 0,
//   }
// }));

// function Caroussel() {
//   const { classes } = useStyles();
//   const autoplay = useRef(Autoplay({ delay: 2000 }));
//   return (
//     <Carousel
//      classNames={classes}
//       className='carrousel'
//       sx={{ maxWidth: 480}}
//       loop={true}
//       plugins={[autoplay.current]}
//       height={300}
    
//       styles={{
//         controls: {
//           ref: getRef('controls'),
//           transition: 'opacity 150ms ease',
//           opacity: 0,
//         },
//       }}
//     >
//       <Carousel.Slide className='carousel-slide'><>
//         <h1 className='p-carousel-title'>CREATION SITE WEB</h1>
//         <p className='p-carousel'>BackOffice | E-commerce  | site Vitrine</p>
//       </></Carousel.Slide>
//       <Carousel.Slide className='carousel-slide' >
//         <h1 className='p-carousel-title'>APPLICATION MOBILE</h1>
//         <p>
//           <GrAppleAppStore className='icon-ca' style={{paddingTop:'5rem'}} color='#87CEEB' size={130} /> 
//          {/* <FcAndroidOs style={{paddingTop:'5rem'}} className='icon-ca'  size={130} /> */}
//          <FaAndroid className='icon-ca' style={{paddingTop:'5rem'}} color='#00FF00' size={130} />
//          </p>
//       </Carousel.Slide >
//     </Carousel>
//   );
// }

// export default Caroussel


const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
}));

function Caroussel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { classes } = useStyles();
  return (
    <Carousel className='carrousel'
    sx={{ maxWidth: 480}}
    loop={true}
    plugins={[autoplay.current]}
    height={300} 
    mx="auto" 
    classNames={classes}>
           <Carousel.Slide className='carousel-slide'><>
        <h1 className='p-carousel-title'>CREATION SITE WEB</h1>
        <p className='p-carousel'>BackOffice | E-commerce  | site Vitrine</p>
       </></Carousel.Slide>
       <Carousel.Slide className='carousel-slide' >
         <h1 className='p-carousel-title'>APPLICATION MOBILE</h1>
         <p>
         <GrAppleAppStore className='icon-ca' style={{paddingTop:'5rem'}} color='#87CEEB' size={130} /> 
        {/* <FcAndroidOs style={{paddingTop:'5rem'}} className='icon-ca'  size={130} /> */}
          <FaAndroid className='icon-ca' style={{paddingTop:'5rem'}} color='#00FF00' size={130} />
          </p>
      </Carousel.Slide >
      {/* ...other slides */}
    </Carousel>
  );
}
export default Caroussel
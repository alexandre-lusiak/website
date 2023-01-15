import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { FcAndroidOs } from 'react-icons/fc';
import { GrAppleAppStore } from 'react-icons/gr';
import PROJECT from '../../assets/projetflipper.jpg'
import CardProject from '../card/Card';

const projects = [
    { title:'gang of pizza' , techno:['symfony' , 'react-native'] , id:'1' ,details:['BackOffice','Application mobile'],attribut:'Entreprise de vente de pizza automatisé', img:{PROJECT}}, 
    { title:'Forman' , techno:['symfony' , 'react'] , id:'2' ,details:['BackOffice','Site E-commerce Formation'] , attribut:' Entreprise de Formation Immobilier',img:{PROJECT}}, 
    { title:'Pizza city' , techno:['symfony' ,'react'] , id:'3' ,details:['BackOffice','Application mobile'], attribut:'Entreprise vente de pizza',img:{PROJECT}}, 
    { title:'Service et Transport' , techno:['symfony'] , id:'4' ,details:['BackOffice'], attribut:"Entreprise de Transport de particulier et d'entreprise",img:{PROJECT}}, 
    { title:"Climpropre" , techno:['symfony','react'] , id:'5' ,details:["BackOffice","Application mobile"], attribut:"Entreprise de dépannage de climatisation",img:{PROJECT}}, 

  ]


function CarousselProject() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <Carousel
       
            className="carrousel-p"
            mx="auto"
            height={500}
            plugins={[autoplay.current]}
            dragFree
            slideSize="33.333333%"
            slideGap="xs"
            loop
            align="start"
            slidesToScroll={3}
            

        >
            
                {projects?.map((project) => 
                   <Carousel.Slide> <div className='project-container2'><CardProject data={project} /></div> </Carousel.Slide>
              
                )}
           
        </Carousel>
    );
}

export default CarousselProject
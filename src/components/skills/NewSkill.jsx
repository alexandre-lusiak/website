import React from 'react'
import Box from './Box'
import image1 from '../../images/s1.png'
import image2 from '../../images/s2.png'
const NewSkill = () => {
  return (
    <div id="services">
      <div className='s-heading'>
      <h1 >COMPETENCES ET SERVICES</h1>
      <p >Ici , retrouvez mes différent compétences afin de trouver le services dont vous avez besoin ! dont le monde a beoins!</p>

      </div>
      <div className='b-container'>
        <Box img={image1} alte="image2" button="Création d'interface d'administration" text="Outils de gestions de votre entreprise" />
        <Box img={image2} alte="image1" button="Gestion de projet"  text="E-commerce , Site Vitrine" />
        <Box img={image2} alte="image1" button="Integration web" text="Design respectant les standats web" />
        <Box img={image2} alte="image2" button="Creation et utlisation d'API REST" text="Creation et utlisation d'API REST" />
        <Box img={image2} alte="image1" button="Creation d'apllication mobile"  text="Solution sur mesure avec ou sans site existant" />
        <Box img={image2} alte="image2" button="Responsive design:" text="Compatible tous support , tablette & mobile" />
      </div>
    </div>
  )
}

export default NewSkill
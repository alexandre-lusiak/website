import React, { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsFillGearFill,BsFillTabletFill } from 'react-icons/bs';
import { GiPencilBrush } from 'react-icons/gi';
import { BiMobile,BiDesktop} from 'react-icons/bi';
import { AiFillApi } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';
import './skill.css'
import { Button, Modal } from '@mantine/core';
import Knowledge from '../knowlegde/Knowledge';

const Skills = () => {

    const [opened, setOpened] = useState(false);

    return (
            <>
            <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Services et compétences  </h3>
            <Button style={{width:'10%', height:'80px',margin:'auto',backgroundColor:'orangered'}} onClick={() => setOpened(true)}><GrTechnology size={50} /></Button>
            <div className='skills-container'>
                <div>
                    <div className='skill-item'>
                    <BsFillGearFill size={35} color={'gold'}/>
                        <div className='title-skill'>Création d'interface d'administration :</div>
                        <div>Outils spécifiques au bon fonctionnement de votre entreprise</div>
                    </div>

                    <div className='skill-item'>
                    <FaRegLightbulb size={35} color={'gold'}/>
                        <div className='title-skill'>Gestion de projet:</div>
                        <div>E-commerce , Site Vitrine</div>
                    </div>
                    <div className='skill-item'>
                    <GiPencilBrush  size={35} color={'gold'}/>
                        <div className='title-skill'>Integration web: </div>
                        <div>Design respectant les standats web</div>
                    </div>
                </div>
               
                <div >
                    <div className='skill-item'>
                    <AiFillApi size={35} color={'gold'}/>
                        <div className='title-skill'>Creation et utlisation d'API REST:</div>
                    </div>
                    <div className='skill-item'>
                    <BiMobile size={35} color={'gold'}/>
                        <div className='title-skill'>Creation d'apllication mobile:</div>
                        <div>Création de solution sur mesure avec ou sans site existant</div>
                    </div>
                    <div className='skill-item'>
                    <BsFillTabletFill size={35} color={'gold'}/>
                    <BiDesktop size={35} color={'gold'}/>
                    <BiMobile size={35} color={'gold'}/>
                        <div className='title-skill'>Responsive design:</div>
                        <div>Compatible tous support , tablette & mobile</div>
                    </div>
                </div>
            </div>
            </div>
            <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Mes Techs!"
        size={'xxl'}
      >
        <Knowledge/>
      </Modal>
            </>
       
    )
}

export default Skills
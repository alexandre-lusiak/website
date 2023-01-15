
import feat from '../../images/FEAT.png'
import React, { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsFillGearFill, BsFillTabletFill } from 'react-icons/bs';
import { GiPencilBrush } from 'react-icons/gi';
import { BiMobile, BiDesktop } from 'react-icons/bi';
import { AiFillApi } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';

import { Button, Modal } from '@mantine/core';
import Knowledge from '../knowlegde/Knowledge';
import { BackgroundImage } from '@mantine/core';
import './knowledge.css'
const NewKnowledge = () => {

    const [opened, setOpened] = useState(false);

    return (
        <>
         <div style={{color:'#0F0F0F'}} id="f-heading'" className='f-heading'>
    <h1 >COMPETENCES ET SERVICES</h1>
    <p >Ici , retrouvez mes différent compétences afin de trouver le services dont vous avez besoin ! dont le monde a beoins!</p>
   </div>
        <div id='features'>
            
            <div className='fetaure-model'>
                <div className='wrapper'>
                    {/* <Button className='modal' onClick={() => setOpened(true)}><GrTechnology size={30} /></Button> */}

                    <div className='skillOne'>


                        <div className='skill-item'>
                            <BsFillGearFill size={35} color={'gold'} />
                            <h1 className='title-skill'>Création d'interface d'administration :</h1>
                            <div className='title-skill-1'>Outils spécifiques au bon fonctionnement de votre entreprise</div>
                        </div>

                        <div className='skill-item'>
                            <FaRegLightbulb size={35} color={'gold'} />
                            <h1 className='title-skill'>Gestion de projet:</h1>
                            <div className='title-skill-1'>E-commerce , Site Vitrine</div>
                        </div>
                        <div className='skill-item'>
                            <GiPencilBrush size={35} color={'gold'} />
                            <h1 className='title-skill'>Integration web: </h1>
                            <div className='title-skill-1'>Design respectant les standats web</div>
                        </div>
                    </div>

                    <div className='skillTwo'>

                        <div className='skill-item'>
                            <AiFillApi size={35} color={'gold'} />
                            <h1 className='title-skill'>Creation et utlisation d'API REST:</h1>
                            <div className='title-skill-1' >Outils spécifiques au bon fonctionnement de votre entreprise</div>
                        </div>
                        <div className='skill-item'>
                            <BiMobile size={35} color={'gold'} />
                            <h1 className='title-skill'>Creation d'apllication mobile:</h1>
                            <div className='title-skill-1'>Création de solution sur mesure avec ou sans site existant</div>
                        </div>
                        <div className='skill-item'>
                            <div className='icon-skill'>
                                <BsFillTabletFill size={35} color={'gold'} />
                                <BiDesktop size={35} color={'gold'} />
                                <BiMobile size={35} color={'gold'} />
                            </div>
                            <h1 className='title-skill'>Responsive design:</h1>
                            <div className='title-skill-1'>Compatible tous support , tablette & mobile</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewKnowledge
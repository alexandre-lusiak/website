import { ActionIcon, Button, Checkbox, Input, Textarea } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import { AiFillClockCircle, AiFillMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MAP from '../../assets/Mapdd.PNG'
import './contact.css'
const Contact = () => {

const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [firstName, setFirstName] = useState('');
const [check, setCheck] = useState(false);
const [details, setDetails] = useState('');
const [phone, setPhone] = useState();

const handleSubmit =(e) => {
    console.log(details);
    e.preventDefault()
console.log(e.target[1]);
}
    return (
    <>
        <h1>CONTACTEZ-MOI</h1>
        <p >Une idée, un conseil pour un projet , solicitez moi !</p>
        <div className='contact-container'>
            <div className='info'>
                <div><FaMapMarkerAlt/><span>lille,5900</span> </div>
                <div><BsFillPhoneFill/><span>0652894598</span> </div>
                <AiFillMail /><span>alexandre.lusiak@gmail.com</span>
                <div><AiFillClockCircle/><span>9h30 17h30 </span></div>
            </div>
            <img src={MAP} alt="map"/>
            <form onSubmit={handleSubmit}>
                <label>Nom</label>
                <Input type={'text'} required  placeholder='Nom' label='Nom' value={name} onChange={(e)=> setName(e.target.value)} />
                <label>Prénom</label>
                <Input type={'text'}  required  placeholder='Prénom' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                <label>Email</label>
                <Input type={'email'}   required stplaceholder='Email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label>Tél.</label>
                <Input type={'number'}   required placeholder='Tel.'  value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <label>Details</label>
                <textarea  required style={{border:'2pxsolid black'}} placeholder='Veuillez Entrez votre demande tout en etant le plus précis possible :)' checked={details} onChange={(e)=> setDetails(e.target.value)} />
                <Checkbox  required label='vendre son ame ?' onCheck={(e) => console.log(e.checked)} />
                <Button color={'dark'} type='submmit'>Valider</Button>
            </form>
        </div>
    </>)
}

export default Contact
import { ActionIcon, Button, Checkbox, Input, Textarea, TextInput } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import { AiFillClockCircle, AiFillMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MAP from '../../assets/Mapdd.PNG'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNotifications } from '@mantine/notifications';

const Contact = () => {
  const notifications = useNotifications();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [check, setCheck] = useState(false);
  const [details, setDetails] = useState('');
  const [phone, setPhone] = useState();


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form', form);

    emailjs.sendForm('service_2tv5ncf', 'template_nk4hipt', form.current, 'gzKQJaHkugUBuY40s')
      .then((result) => {
        console.log(result.text);
        notifications.showNotification({
          title: "Message envoyé Mamen.",
          message: " votre message a bien été transmis! 🤥",
          color: "green",
        });

      }, (error) => {
        console.log('EERRRR', error.text);
        notifications.showNotification({
          title: "Une erreur est survenue.",
          message: "Attaque doliphant sorry ! 🤥",
          color: "red",
        });
      });
  };
  return (
    <>
    <div id="contact">
      <h1 className='title-contact'>CONTACTEZ-MOI</h1>
      <p className='p-contact'>Une idée, un conseil pour un projet , solicitez moi.</p>
      <p className='p-contact'>Nous trouverons la bonne solution</p>
      <div className='contact-container' >
        <div className='info'>
          <div><FaMapMarkerAlt /><span>lille,5900</span> </div>
          <div><BsFillPhoneFill /><span>0652894598</span> </div>
          <AiFillMail /><span>alexandre.lusiak@gmail.com</span>
          <div><AiFillClockCircle /><span>9h30 17h30 </span></div>
        </div>
        <img src={MAP} alt="map" className='map'/>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <TextInput
          size='xs'
          type={'text'}
          required
          placeholder='Nom'
          name='user_name'
          value={name}
          onChange={(e) => setName(e.target.value)} />
        

        <TextInput
           size='xs'
           type={'text'}
           required
           placeholder='Prénom'
           mt={10}
           name='user_firstName'
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)} />

          <TextInput
    mt={10}
            size="xs"
            type={'email'}
            required
            placeholder='Email'
            name='user_email'
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)} />
          <TextInput
     mt={10}
            size="xs"
            type={'number'}
            required
            placeholder='Tel.'
            name='user_phone'
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)} />
          <Textarea
        mt={10}
            size='md'
            required
            name='message'
            placeholder='Veuillez Entrez votre demande tout en etant le plus précis possible :)'
            checked={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <label>Je suis un robot ?</label>
          <Checkbox
            mt={10}
            name='check'
            required
            onCheck={(e) => console.log(e.checked)}
          />
          <Button className='c-btn' type='submmit'>Valider</Button>

        </form>

      </div>
      </div>
    </>)
}

export default Contact
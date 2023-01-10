import './App.css';
import Navigation from './components/navigation/Navigation';
import LOGONODEJS from './assets/logonodejs.png'
import MYSQL from './assets/mysqllogo.png'
import HTML from './assets/logohtml.png'
import SASS from './assets/logosass.png'
import SYMFONY from './assets/symfonylogo.png'
import REACT from './assets/logo192.png'
import TYPESCRIPT from './assets/typescriptlogo.png'
import PHP from './assets/logo-php.png'


import CSS from './assets/logonodejs.png'
import MONGODB from './assets/logonodejs.png'


function App() {
  return (
    <>
     <nav className='navigation-container'>
            <a className='item-navigation' href="#about" >Qui quis-je</a>
            <a className='item-navigation' href="#Techno" >Mes Technologies</a>
            <a className='item-navigation' href="#skills" >Mes Compétences</a>
            <a className='item-navigation' href="#project" >Mes projets</a>
            <a className='item-navigation' href="#contact" >Contact</a>
        </nav>
    <div className="container">

    <a className='item-navigation' href="#project" >Mes projets</a>

      <h1>Alexandre Lusiak</h1>
      <h2>Developpeur web full stack </h2>
      <a href="CV.pdf" download>Cliquez pour télécharger</a>
      <section id='about' className='ME'></section>
      <h3>Qui suis-je ? </h3>
      <p>Je m'apelle Alexandre lusiak , 30ans </p>
      <p>Anciennement dans l'industrie entant qu'automaticien ,j'ai dédicé de me réorienté durant la période de covid</p>
      <p>cela fait 3ans que je me suis lancé dans l'apprentissage d'abord en autotdidact puis , j'ai effectué une formation de 6 mois a la 3WAcademy pour valdier un diplome de developper web</p>
      <p>Mais n'étant pas satisfait des connaissance acquise j'ai donc décidé d'effectué une Année d'alternance pour me familiarisé avec le monde professionelle , toujours à la 3WAcademy, avec 3seamine en entreprise et une semaine en alternance pour une immerssions quasi-total au sein d'une entreprise. </p>
    
      <section id='skills' className='SKILL'>
      <h3>Mes Compétences </h3>
        <ul>
          <li>Creation d'API , bdd relationelle sql et bdd non-relationelle</li>
          <li>creation de back office</li>
          <li>creation d'application mobile</li>
          <li>Gestion de projet</li>
          <li>Communication avec le clients </li>
        </ul>
      </section>
    
     <section id='techo' className='TEC'>
      <h3>Mes techno </h3>
      <ul>
        <li><img src={SASS} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={HTML} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={REACT} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={TYPESCRIPT} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={PHP} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={SYMFONY} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={MYSQL} style={{widht:100,height:100}} alt="logo-tech"/></li>
        <li><img src={LOGONODEJS} style={{widht:100,height:100}} alt="logo-tech"/></li>

      </ul>

      </section>
      <section id='project' className='PROJECT'>
      <h3>Mes Projet réalisé</h3>
      <h2>Projet sur lesquels j'ai travaillé</h2>
      <ul>
        <li>Gang of pizza</li>
        <li>Climpropre</li>
        <li>pizza city </li>
        <li>forman</li>
        <li>service et transport</li>
        <li>objectif fibres</li>
      </ul>
      </section>
    </div>
    </>
  );
}

export default App;

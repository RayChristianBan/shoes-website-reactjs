import React, { Fragment } from 'react'
import Header from '../supplement/Header/Header';
import AboutUs from '../supplement/About-us/AboutUs';
import Display from '../supplement/Display-product/Display';
import Model from '../supplement/Model/Model';
import Logo from '../supplement/Logo/Logo';
import ChooseUs from '../supplement/Choose-us/Choose-us';
import Details from '../supplement/Details/Details';
import Commendation from '../supplement/Commendation/Commendation';
import Ending from '../supplement/Ending/Ending';
import Footer from '../supplement/Footer/Footer';


 const Home = () => {
  return (
    <Fragment>
        <Header/>
        <Model/>
        <AboutUs/>
        <Display/>
        <Logo/>
        <ChooseUs/> 
        <Details/>    
        <Commendation/>
        <Ending/>
        <Footer/>  
        
    </Fragment>
    
  );
};

export default Home;

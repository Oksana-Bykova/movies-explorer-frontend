import React from "react";

import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Techs from "./Techs/Techs";
import Promo from "./Promo/Promo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



function Main() {

    const isLoggedIn = false;
    return (
        <>
            <Header loggedIn = { isLoggedIn } ></Header>
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Footer></Footer> 
        </>
    );
};


export { Main };

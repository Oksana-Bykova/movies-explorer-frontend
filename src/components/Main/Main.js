import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject";
import NavTab from "./NavTab";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
import Techs from "./Techs";


function Main() {
    return (
        <>
            <Promo></Promo>
            <NavTab></NavTab>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </>
    )
}


export { Main };


/*Promo — компонент с вёрсткой баннера страницы «О проекте».
NavTab — компонент с навигацией по странице «О проекте».
AboutProject — компонент с описанием дипломного проекта.
Techs — компонент с использованными технологиями.
AboutMe — компонент с информацией о студенте.
Portfolio — компонент со ссылками на другие проекты.*/
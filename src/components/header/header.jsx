import React from "react";
import {
    Link
} from "react-router-dom";
import tiger from "../../assets/img/common/tiger.png";


function Header() {
    function menuOnClick() {
        document.querySelector(".header__burger").classList.toggle("open");
        document.querySelector(".header__nav").classList.toggle("open");
        document.querySelector(".header__bg").classList.toggle("open");
        document.querySelector(".main").classList.toggle("open");
    }

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <p>Типа<br/>Лого</p>
                    {/*<img src={tiger} className="header__logo-pic" alt="tiger icon" />*/}
                </div>
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">Home</Link>
                    <Link to="/test" className="header__nav-link">Test</Link>
                </nav>
                <button className="header__burger" onClick={()=>menuOnClick()}>
                    <div className="header__burger-bar _01"></div>
                    <div className="header__burger-bar _02"></div>
                    <div className="header__burger-bar _03"></div>
                </button>
                <div className="header__bg"></div>
                {/*<button className="header__menu" data-scroll="target">xxx</button>*/}
            </div>
        </header>
    );
}

export { Header };
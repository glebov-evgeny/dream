import React from "react";
import {useEffect} from "react";

import {
    Link
} from "react-router-dom";

function Header() {
    useEffect(
        () => {
            stickyHeader();
            scrollToElement();
        }, []
    );

    function scrollToElement() {
        document.querySelectorAll('[data-scroll]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                let href = this.getAttribute('data-scroll');
                const scrollTarget = document.getElementById(href);
                const topOffset = document.querySelector('.header').offsetHeight;
                // const topOffset = 0; // если не нужен отступ сверху
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    function stickyHeader() {
        const header = document.querySelector('.header');
        let scrollPrev = 0;

        document.addEventListener('scroll', function(e) {
            let scrolled = window.scrollY;
            if ( scrolled > 100 && scrolled > scrollPrev ) {
                header.classList.add('out');
            } else {
                header.classList.remove('out');
            }
            scrollPrev = scrolled;

        })
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__logo"></div>
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">Home</Link>
                    <Link to="/test" className="header__nav-link">Test</Link>
                </nav>
                <button className="header__menu" data-scroll="target">xxx</button>
            </div>
        </header>
    );
}

export { Header };
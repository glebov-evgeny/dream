import {useEffect} from "react";
import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";
import { Footer } from "./components/footer/footer";


function App() {
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
                const scrollTarget = document.getElementById(href),
                    topOffset = document.querySelector('.header').offsetHeight,
                    elementPosition = scrollTarget.getBoundingClientRect().top,
                    offsetPosition = elementPosition - topOffset;

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
            if ( scrolled > 50 && scrolled > scrollPrev ) {
                header.classList.add('out');
            } else {
                header.classList.remove('out');
            }
            scrollPrev = scrolled;
        })
    }

    return (
        <>
            <Header/>
            <Intro />
            <Footer />
        </>
    );
}

export default App;

import { useRef } from "react";

const ScrollContent = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div>

            <h2>Navigation</h2>

            <button onClick={() => scrollToSection(homeRef)}>
                Home
            </button>

            <button onClick={() => scrollToSection(aboutRef)}>
                About
            </button>

            <button onClick={() => scrollToSection(contactRef)}>
                Contact
            </button>

            <section ref={homeRef} style={{ height: "500px", padding: "20px" }}>
                <h1>Home Section</h1>
                <p>Welcome to Home Page</p>
            </section>

            <section ref={aboutRef} style={{ height: "500px", padding: "20px" }}>
                <h1>About Section</h1>
                <p>This is About Page</p>
            </section>

            <section ref={contactRef} style={{ height: "500px", padding: "20px" }}>
                <h1>Contact Section</h1>
                <p>This is Contact Page</p>
            </section>

            <button onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth"
            })}>
                Back to Top
            </button>

        </div>
    );
};

export default ScrollContent;

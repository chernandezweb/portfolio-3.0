import React, { Component } from 'react';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Canvas from './components/canvas/Canvas';
import logo from './black-bg.jpg';
// import logo from './logo.svg';
import axios from 'axios';
import './App.scss';
import {Container, Row, Col} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';
import { elastic as Menu } from 'react-burger-menu';
import detectBrowserLanguage from 'detect-browser-language';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            menuOpen: false,
            language: "fr"
        }
    }

    componentDidMount() {
        let apiUrl = "/api/projects";
        if(window.location.hostname === "localhost"){
            apiUrl = "http://localhost:5000/api/projects"
        }
        axios.get(apiUrl).then(results => {
            const { data } = results.data;
            this.setState({
                projects: data
            });
        }).catch(err => {
            console.log('Error fetching results ', err);
            throw new Error(err);
        });

        if(detectBrowserLanguage() !== "fr-FR" && detectBrowserLanguage() !== "fr-CA"){
            this.setState({language: "en"})
        }
    }

    scrollToSection(sectionRef){
        if(this.state.menuOpen === true){
            this.setState({menuOpen: false});
        }

        setTimeout(() => {
            scrollToComponent(sectionRef, { offset: 0, align: 'top', duration: 500});
        },500);

    };

    handleMenuStateChange (state) {
        this.setState({menuOpen: state.isOpen});
    }

    changeLanguage(){
        if(this.state.language === "fr"){
            this.setState({language: "en"})
        }
        if(this.state.language === "en"){
            this.setState({language: "fr"})
        }
        console.log(this.state.language)
    }


    render() {
        const projects  = this.state.projects;


        let skillSet = [
            {skill:"Html", iconClass: "fab fa-html5"},
            {skill:"Css", iconClass: "fab fa-css3-alt"},
            {skill:"Sass", iconClass: "fab fa-sass"},
            {skill:"Javascript", iconClass: "fab fa-js"},
            {skill:"React", iconClass: "fab fa-react"},
            {skill:"Angular", iconClass: "fab fa-angular"},
            {skill:"Ionic", iconClass: "fas fa-code"},
            {skill:"Node.js", iconClass: "fab fa-node"},
            {skill:"Unity", iconClass: "fas fa-code"},
            {skill:"Photoshop", iconClass: "fab fa-adobe"},
            {skill:"Illustrator", iconClass: "fab fa-adobe"}];

        console.log(projects);

        return (

            <div className="App" >
                <div id="outer-container">
                    <Menu
                        className="menu"
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleMenuStateChange(state)}
                        pageWrapId={ "page-wrap" }
                        outerContainerId={ "outer-container" }
                        customBurgerIcon={<i className="fas fa-bars open-menu"> </i> }
                        customCrossIcon={<i className="fas fa-times close-menu"> </i>}
                        width={ 250 }>
                        <ul className="menu-list">
                            {/*<li className="menu-item" onClick={this.scrollToSection(this.aboutSection)}>Home</li>*/}
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.aboutSection)}>{this.state.language === "fr" ? "À propos" : "About" }</li>
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.projectSection)}>{this.state.language === "fr" ? "Projets" : "Projects" }</li>
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.contactSection)}>Contact</li>
                            <hr/>
                            <li className="menu-item" onClick={() =>this.changeLanguage()}>{this.state.language === "fr" ? "en" : "fr" }</li>
                        </ul>
                    </Menu>

                    <main id="page-wrap">
                        <header className="App-header">
                            <Canvas />
                            <div className="layer-black">

                            </div>
                            <h1 className="d-none">Carlos Hernandez</h1>
                            <Tween
                                css={{ opacity: 0, color: '#000' }}
                                duration={5}>
                                    {(this.state.language === "en") ? (
                                        <p className="portfolio-title">Hello my name is <span>Carlos Hernandez</span> <br/> I'm a Front-End Developer</p>
                                    ) : (
                                        <p className="portfolio-title"><span className="fr-title-span">Carlos Hernandez</span> <br/>Développeur Front-End</p>
                                    )}
                            </Tween>
                            <i onClick={() => scrollToComponent(this.aboutSection, { offset: 0, align: 'top', duration: 1500})} className="fas fa-chevron-circle-down"> </i>
                        </header>
                        <section id="about" className="about-section pb-5 pt-5" ref={(section) => { this.aboutSection = section; }}>
                            <Container>
                                {(this.state.language === "en") ? (
                                    <h2>About</h2>
                                ) : (
                                    <h2>À propos</h2>
                                )}

                                <div className="about-text">
                                    {(this.state.language === "en") ? (
                                        <div>
                                            <p>I am a front-end developer always seeking challenges.</p>
                                            <p>I have a passion for creating dynamic, fast and responsive websites and applicaitons.</p>
                                            <p>I speak French, English, and Spanish</p>
                                            <br/>
                                            <p>If you want to see the code of my portfolio and other personal projects click on the icon below to go to my GitHub</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>Je suis un développeur Front-End qui est toujours à la recherche de nouveaux défis</p>
                                            <p>Je suis passioné sur la création  d'applications, de sites web et et de plateformes dynamique, rapide et responsive.</p>
                                            <p>Je parle et écris le Français, l'Anglais et l'Espagnol.</p>
                                            <br/>
                                            <p>Si vous êtes interressés à jeter un coup d'oeil au code de mon portfolio ou d'autre projets personnels, n'hésitez pas à cliquer sur l'icône ci-dessous pour accéder à mon GitHub.</p>
                                        </div>
                                    )}
                                    <a className="my-github" href="https://github.com/chernandezweb/portfolio-3.0" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"> </i>
                                    </a>
                                </div>
                                <hr/>
                                {(this.state.language === "en") ? (
                                    <h2>Skill set</h2>
                                ) : (
                                    <h2>Habiletés</h2>
                                )}
                                <div className="skill-set pt-1">
                                    <Row className="skill-row justify-content-center">
                                        {
                                            skillSet.map(skill => (
                                                <Col xs="6" md="4" lg="2" className="skill-col" key={skill.skill}>
                                                    <div className="skill">
                                                        <i className={skill.iconClass}> </i>
                                                        <p>{skill.skill}</p>
                                                    </div>
                                                </Col>

                                            ))
                                        }
                                    </Row>
                                </div>
                            </Container>
                        </section>
                        <section id="projects" className="project-section pb-5 pt-5" ref={(section) => { this.projectSection = section; }}>
                            <Container>
                                {(this.state.language === "en") ? (
                                    <h2>Projects</h2>
                                ) : (
                                    <h2>Projets</h2>
                                )}
                                {
                                    projects.map(singleProject => (
                                        <Project key={singleProject.id} data={singleProject} lang={this.state.language}/>
                                    ))
                                }
                            </Container>
                        </section>
                        <section id="contact" className="contact-section pb-5 pt-5" ref={(section) => { this.contactSection = section; }}>
                            <Container>
                                <h2>Contact</h2>
                                <Contact lang={this.state.language} />
                            </Container>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}
export default App;

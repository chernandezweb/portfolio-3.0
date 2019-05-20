import React, { Component } from 'react';
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
// import logo from './logo.svg';
import axios from 'axios';
import './App.scss';
import {Container, Row, Col} from 'react-bootstrap'
import scrollToComponent from 'react-scroll-to-component';
import { elastic as Menu } from 'react-burger-menu'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            menuOpen: false
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
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.aboutSection)}>About</li>
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.projectSection)}>Projects</li>
                            <li className="menu-item" onClick={() =>this.scrollToSection(this.contactSection)}>Contact</li>
                        </ul>
                    </Menu>

                    <main id="page-wrap">
                        <header className="App-header">
                            <h1 className="d-none">Carlos Hernandez</h1>
                            <p className="portfolio-title">Hello my name is Carlos Hernandez <br/> I'm a Front-End Developper</p>
                            <i onClick={() => scrollToComponent(this.aboutSection, { offset: 0, align: 'top', duration: 1500})} className="fas fa-chevron-circle-down"> </i>
                        </header>
                        <section id="about" className="about-section pb-5 pt-5" ref={(section) => { this.aboutSection = section; }}>
                            <Container>
                                <h2>About</h2>
                                <div className="about-text">
                                    <p>I am a front-end developer always seeking challenges.</p>
                                    <p>I have a passion for creating dynamic, fast and responsive websites and applicaitons.</p>
                                    <p>I speak French, English, and Spanish</p>
                                </div>
                                <hr/>
                                <h2>Skill set</h2>
                                <div className="skill-set pt-1">
                                    <Row className="skill-row justify-content-center">
                                        {
                                            skillSet.map(skill => (
                                                <Col xs="6" md="4" lg="2" className="skill-col">
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
                                <h2>Projects</h2>
                                {
                                    projects.map(singleProject => (
                                        <Project key={singleProject.id} data={singleProject}/>
                                    ))
                                }
                            </Container>
                        </section>
                        <section id="contact" className="contact-section pb-5 pt-5" ref={(section) => { this.contactSection = section; }}>
                            <Container>
                                <h2>Contact</h2>
                                <Contact />
                            </Container>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}
export default App;

import React, { Component } from 'react';
import Project from './components/Project'
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {Container} from 'react-bootstrap'
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

    scrollToProjects = () => {
        this.setState({menuOpen: false});
        setTimeout(() => {
            scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 500});
        },500);

    };

    handleMenuStateChange (state) {
        this.setState({menuOpen: state.isOpen});
    }


    render() {
        const projects  = this.state.projects;

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
                            <li className="menu-item" onClick={this.scrollToProjects}>Home</li>
                            <li className="menu-item" onClick={this.scrollToProjects}>About</li>
                            <li className="menu-item" onClick={this.scrollToProjects}>Projects</li>
                            <li className="menu-item" onClick={this.scrollToProjects}>Contact</li>
                        </ul>
                    </Menu>

                    <main id="page-wrap">
                        <header className="App-header">
                            <h1 className="d-none">Carlos Hernandez</h1>
                            <p className="portfolio-title">Hello my name is Carlos Hernandez <br/> I'm a Front-End Developper</p>
                            <i onClick={() => scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1500})} className="fas fa-chevron-circle-down"> </i>
                        </header>
                        <section id="projects" className="project-section" ref={(section) => { this.projectSection = section; }}>
                            <Container>
                                {
                                    projects.map(singleProject => (
                                        <Project key={singleProject.id} data={singleProject}/>
                                    ))
                                }
                            </Container>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}
export default App;

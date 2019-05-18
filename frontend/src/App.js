import React, { Component } from 'react';
import Project from './components/Project'
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {Container} from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
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
        })
    }

    render() {
        const projects  = this.state.projects;
        console.log(projects);
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Carlos Hernandez</h1>
                </header>
                <section>
                    <Container>
                        {
                            projects.map(singleProject => (
                                <Project key={singleProject.id} data={singleProject}/>
                            ))
                        }
                    </Container>
                </section>
            </div>
        );
    }
}
export default App;

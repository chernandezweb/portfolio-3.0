import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('/api/projects').then(results => {
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
                    {/*{*/}
                    {/*art_pieces.map(artPiece => (*/}
                    {/*<ArtPiece data={artPiece}/>*/}
                    {/*))*/}
                    {/*}*/}
                </header>
            </div>
        );
    }
}
export default App;

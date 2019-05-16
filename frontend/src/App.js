import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         art_pieces: []
    //     }
    // }

    componentDidMount() {
        // axios.get('http://localhost:4000/artPiece').then(results => {
        //     const { data } = results.data;
        //     this.setState({
        //         art_pieces: data
        //     })
        // }).catch(err => {
        //     console.log('Error fetching results ', err);
        //     throw new Error(err);
        // })
    }

    render() {
        // const { art_pieces } = this.state;
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

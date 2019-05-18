import React from 'react';
import './project.css';
import {Container, Row, Col} from 'react-bootstrap'

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            loading: false
        }
    }


    render() {
        // const {editing} = this.state;
        return (
            <div className="project-container">
                <Row>
                    <Col>
                        <div className="picture-container">
                            {this.props.data.image ? ( <img className="picture" src={this.props.data.image} alt=""/>) : <p>no image</p>}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <br></br>
                            {this.props.data.projectName ? (<p className="project-name">Artiste: {this.props.data.projectName}</p>) : null}
                            <br></br>
                            {this.props.data.description ? (<p className="project-description">Artiste: {this.props.data.description}</p>) : null}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Project;
import React from 'react';
import './project.css';
import {Row, Col} from 'react-bootstrap'

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
                    <Col className="project-infos-col">
                        <div className="project-infos">
                            <div className="name-cnt">
                                {this.props.data.projectName ? (<p className="project-name">{this.props.data.projectName}</p>) : null}
                            </div>
                            <div className="description-cnt">
                                {this.props.data.description ? (<p className="project-description">{this.props.data.description}</p>) : null}
                            </div>
                            <div className="technology-used">
                                <p><span>Technology used :</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Project;
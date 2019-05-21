import React from 'react';
import './project.scss';
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
                    <Col md="12" lg className="project-picture-col d-flex align-items-sm-center">
                        <a href={this.props.data.url} target="_blank" rel="noopener noreferrer">
                            <div className="picture-container">
                                {this.props.data.image ? ( <img className="picture" src={this.props.data.image} alt=""/>) : <p>no image</p>}
                            </div>
                        </a>
                    </Col>
                    <Col md="12" lg className="project-infos-col">
                        <div className="project-infos">
                            <div className="name-cnt">
                                {this.props.data.projectName ? (<p className="project-name">{this.props.data.projectName}</p>) : null}
                            </div>
                            <div className="description-cnt">
                                {this.props.data.description ? (<p className="project-description">{this.props.data.description}</p>) : null}
                            </div>
                            <div className="technology-used-cnt">
                                <p className="technology-used"><span>Technology used : </span>{this.props.data.technologyUsed ? this.props.data.technologyUsed : null}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Project;
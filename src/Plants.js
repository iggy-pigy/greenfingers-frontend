import React from "react";
import logo from "./cactus2.jpg";


class Plants extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-2">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-12 col-sm-3">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="col-12 col-sm-4">
                    <p>{this.props.description}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <p>{this.props.location}</p>
                </div>
                <div className="col-12 col-sm-1">
                    <button > Contact owner</button>
                </div>
            </div>
        );
    }
}

export default Plants;
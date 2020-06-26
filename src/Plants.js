import React from "react";

const styles = {
    fontSize: "20px",
    width: "200px",
    height: "230px"

}

class Plants extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-2">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-12 col-sm-3">
                    <img src={this.props.picture} style={styles} alt="plantPicture" />
                </div>
                <div className="col-12 col-sm-4">
                    <p style={styles}>{this.props.description} </p>
                </div>
                <div className="col-12 col-sm-2">
                    <p>{this.props.location}</p>
                </div>
                <div className="col-12 col-sm-1">
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Plants;
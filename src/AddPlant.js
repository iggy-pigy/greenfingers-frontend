import React from "react";
import "./AddPlant.css";


class AddPlants extends React.Component {
    state = {
        plantName: "",
        picture: "",
        description: "",
        location: "",
        email: ""
    };




    updatePlantName = event => {
        this.setState({
            plantName: event.target.value,
        });

    };
    updatePlantPicture = event => {
        this.setState({
            picture: event.target.value,
        });
    };

    updatePlantDescription = event => {
        this.setState({
            description: event.target.value,

        });
    };

    updatePlantLocation = event => {
        this.setState({
            location: event.target.value,
        });
    };

    updateEmail = event => {
        this.setState({
            email: event.target.value,
        });
    };

    addPlant = () => {
        this.props.addNewPlantFunc(this.state.plantName, this.state.picture, this.state.description, this.state.location, this.state.email);
    };

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="well well-sm">
                            <form onSubmit={this.addPlant} class="form-horizontal" method="post" >
                                <fieldset>
                                    <legend class="text-center header">Add Plant</legend>

                                    <div class="form-group">
                                        <span class="col-sm-1 col-sm-offset-2 text-right"><i class="fas fa-leaf bigicon"></i></span>
                                        <div class="col-sm-8">
                                            <input type="text" value={this.state.plantName} onChange={this.updatePlantName} id="plantName" class="form-control" placeholder="Plant name" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-sm-1 col-sm-offset-2 text-right"><i class="fa fa-camera bigicon"></i></span>
                                        <div class="col-sm-8">
                                            <input type="file" value={this.state.picture} onChange={this.updatePlantPicture} id="picture" class="form-control" placeholder="Upload plant picture" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-sm-1 col-sm-offset-2 text-right"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                        <div class="col-sm-8">
                                            <textarea type="text" id="description" value={this.state.description} onChange={this.updatePlantDescription} class="form-control" placeholder="Add plant description" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-sm-1 col-sm-offset-2 text-right"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-sm-8">
                                            <input type="text" value={this.state.location} onChange={this.updatePlantLocation} id="location" class="form-control" placeholder="Add location" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-sm-1 col-sm-offset-2 text-right"><i class="fa fa-envelope-o bigicon"></i></span>
                                        <div class="col-sm-8">
                                            <input type="text" value={this.state.email} onChange={this.updateEmail} id="email" class="form-control" placeholder="E-mail Address" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12 text-center">
                                            <button type="submit" class="button">SUBMIT</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddPlants;
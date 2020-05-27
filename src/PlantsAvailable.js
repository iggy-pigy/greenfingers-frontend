import React from 'react';
import axios from "axios";
import Plants from "./Plants";



class PlantsAvailable extends React.Component {
    state = {
        plants: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:3001/plants")
            .then(response => {
                const plantList = response.data;
                console.log(response.data);
                console.log(plantList);
                this.setState({
                    plants: plantList
                });
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.state.plants.map(plant => {
                        return <Plants name={plant.name} picture={plant.picture} description={plant.description} location={plant.location} key={plant.id} />
                    })}
                </div>
            </div>
        );
    }
}



export default PlantsAvailable;
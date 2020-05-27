import React from 'react';
import axios from "axios";
import Plants from "./Plants";


class PlantsAvailable extends React.Component {
    state = {
        plants: [

            /*{ id: 1, name: "cactus", description: "Desert plant that has thick, leafless stems covered in prickly spines or sharp spikes.", location: "Manchester" },
            { id: 2, name: " fiddle-leaf fig", description: "Has a tropical look with lyre-shaped leaves.", location: "Chorlton" },
            { id: 3, name: "Philodendron", description: "Not just a pretty face, though — he’s also super easy to care for, as long as you keep an eye on his light levels and the right amount of watering.", location: "Didsbury" }*/

        ]
    };

    componentDidMount() {
        axios
            .get("http://localhost:3001/plants")
            .then(response => {
                const plantList = response.data.plant;
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
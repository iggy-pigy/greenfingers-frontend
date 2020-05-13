import React from 'react';
import axios from "axios";
import Plants from "./Plants";
import AddPlant from "./AddPlant";


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
            .get("https")
            .then(response => {
                const plants = response.data.plant;
                console.log(response.data);
                console.log(plants);
                this.setState({
                    plants: plants
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    addNewPlant = plant => {
        const newPlant = {
            plant: plant,
        };
        //need to install add axios!!!
        axios
            .post(
                "http",
                newPlant
            )
            .then(response => {
                const newPlantList = response.data;
                const copyOfPlants = this.state.plants.slice();
                copyOfPlants.push(newPlantList);
                this.setState({
                    plants: copyOfPlants
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <AddPlant AddNewPlantFunc={this.addNewPlant} />
                    {this.state.plants.map(plant => {
                        return <Plants name={plant.name} description={plant.description} location={plant.location} key={plant.id} />
                    })}
                </div>
            </div>
        );
    }
}



export default PlantsAvailable;
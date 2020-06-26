import React from 'react';
import axios from "axios";
import Plants from "./Plants";



class PlantsAvailable extends React.Component {
    state = {
        plants: []
    };

    componentDidMount() {
        axios
            //.get("http://localhost:3001/plants")
            .get("https://shl5liyt6d.execute-api.eu-west-1.amazonaws.com/dev/plants")
            .then(response => {
                const plantList = response.data.plants;
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

    /*addNewPlant = plant => {
        const newPlant = {
          name: name,
          picture: picture,
          description: description,
          location: location,
          email: email
        };
        axios
          .post(
            "https://shl5liyt6d.execute-api.eu-west-1.amazonaws.com/dev/plants",
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
      };*/

    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.state.plants.map(plant => {
                        return <Plants name={plant.name} picture={plant.picture} description={plant.description} location={plant.location} email={plant.email} key={plant.id} />
                    })}
                </div>
            </div>
        );
    }
}



export default PlantsAvailable;
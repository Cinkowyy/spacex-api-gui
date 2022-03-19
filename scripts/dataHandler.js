import Rocket from "./data/rocket.js";
import Roadster from "./data/roadster.js";
import Starlink from "./data/starlink.js";

export default class DataHandler{

    static async fetchData(target) {
        let dataArray = [];
        try {
            let response = await fetch(`https://api.spacexdata.com/v4/${target}`);
            let jsonData = await response.json();
            switch(target) {
                case 'starlink': {
                    jsonData.forEach(el => {
                        dataArray.push(new Starlink(el.spaceTrack.OBJECT_ID, el.spaceTrack.OBJECT_NAME, el.spaceTrack.LAUNCH_DATE));
                    });
                    break;
                }

                case 'rockets': {
                    jsonData.forEach(el => {
                        dataArray.push(new Rocket(
                            el.name, el.active, el.first_flight, el.height.meters, el.mass.kg, el.diameter.meters, 
                            el.engines.thrust_vacuum.kN, el.engines.type, el.engines.thrust_to_weight,
                            el.description, el.cost_per_launch, el.flickr_images
                        ));
                    });
                    break;
                }

                case 'roadster': {
                    dataArray = new Roadster(
                        jsonData.launch_date_utc, jsonData.earth_distance_km, jsonData.mars_distance_km,
                        jsonData.details, jsonData.flickr_images
                    )
                    break;
                }

                default: {
                    break;
                }
            }
        } catch(e) {
            console.log("Fetching data failed");
        }

        return dataArray;
    }

}
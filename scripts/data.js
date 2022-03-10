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
                            el.engines.thrust_vacuum, el.engines.type, el.engines.thrust_to_weight,
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

class Starlink {
    constructor(starlinkId, ObjectName, launch) {
        this.id = starlinkId;
        this.name = ObjectName;
        this.launchDate = launch;
    }

    render() {
        let element = document.createElement('div');
        element.classList.add('row');

        element.innerHTML = `
            <p>${this.id}</p>
            <p>${this.name}</p>
            <p>${this.getFormattedDate(this.launchDate)}</p>
        `

        return element;
    }

    getFormattedDate(date) {

        const monthNames = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];

        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);

        return `${monthNames[parseInt(month)-1]} ${day}, ${year}`;
    }
}

class Rocket {
    constructor(rocketName, rocketStatus, launch, rocketHeight, rocketMass, rocketDiameter,engineThrustVacuum, engineType, engineThrustToWeight,rocketDescription,rocketLaunchCost,rocketImages) {
        this.name = rocketName;
        this.status = rocketStatus;
        this.firstLaunch = launch;
        this.height = rocketHeight;
        this.mass = rocketMass;
        this.diameter = rocketDiameter;
        this.engineInfo = {
            thrustVacuum: engineThrustVacuum,
            type: engineType,
            thrustToWeight: engineThrustToWeight
        }
        this.description = rocketDescription;
        this.launchCost = rocketLaunchCost;
        this.images = rocketImages;
    }
}

class Roadster {
    constructor(roadsterLaunchDate, roadsterEarthDistance, roadsterMarsDistance, roadsterDescription, roadsterImages) {
        this.launchDate = roadsterLaunchDate;
        this.earthDistance = roadsterEarthDistance;
        this.marsDistance = roadsterMarsDistance;
        this.description = roadsterDescription;
        this.images = roadsterImages;
    }
}
export default class Rocket {
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
export default class Rocket {
    constructor(rocketName, rocketStatus, launch, rocketHeight, rocketMass, rocketDiameter,engineThrustVacuum, engineType, engineThrustToWeight,rocketDescription,rocketLaunchCost,rocketImages) {
        this.name = rocketName;
        this.status = rocketStatus ? 'Active': 'Inactive';
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
        this.callbacks = [];
    }

    render() {

        if(this.callbacks.length >0) {
            this.callbacks.forEach(el => {
                el.eventEl.removeEventListener('click', el.eventFn);
            })
            this.callbacks = [];
        }

        let rowElement = this.getRowElement();
        const arrowBtn = rowElement.querySelector('.arrow-btn');
        const details = rowElement.querySelector('.details-wrapper');

        const openDetails = () => {
            if(details.classList.contains('open')) {
                details.classList.remove('open');
                arrowBtn.querySelector('img').src = "images/arow-down.svg";
            } else {
                details.classList.add('open');
                arrowBtn.querySelector('img').src = "images/arow-up.svg";
            }
        }

        arrowBtn.addEventListener('click', openDetails);

        this.callbacks.push({
            eventFn: openDetails,
            eventEl: arrowBtn
        })


        return rowElement;
    }

    getRowElement() {
        let element = document.createElement('div');
        element.classList.add('row-wrapper');

        element.innerHTML = `
        <div class="row">
            <p>${this.name}</p>
            <div class="diamentions desktop-only">
                <div>
                    <p>Height: ${this.height} m</p>
                    <p>Mass: ${this.mass} kg</p>
                </div>
                <p>Diameter: ${this.diameter} m</p>
            </div>
            <p>${this.firstLaunch}</p>
            <p class="status ${this.status.toLowerCase()}">${this.status}</p>
            <div class="arrow-btn">
                <img src="images/arow-down.svg">
            </div>
        </div>

        <div class="details-wrapper">
            <div class="engine-info">
                <h4>Engine info</h4>
                <p>Thrust vacuum: ${this.engineInfo.thrustVacuum} kN</p>
                <p>Type: ${this.engineInfo.type}</p>
                <p>Thrust to weight: ${this.engineInfo.thrustToWeight}</p>
            </div>
            <div class="diamentions-mobile">
                <h4>Diamentions</h4>
                <p>Height: ${this.height} m</p>
                <p>Diameter: ${this.diameter} m</p>
                <p>Mass: ${this.mass} kg</p>
            </div>
            <div class="images">
                <img src="${this.images[0]}" >
                <img src="${this.images[1]}" >
            </div>
            <div class="description-wrapper">
                <div class="description">
                    <h4>Description</h4>
                    <p>${this.description}</p>
                </div>
                <p>Launch cost: $${this.launchCost}</p>
            </div>
        </div>
        `

        return element;
    }
}
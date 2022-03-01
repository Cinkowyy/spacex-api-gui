export class StarlinksView {
    constructor(data) {
        this.starlinks = data;
    }
}

export class RocketsView {
    constructor(data) {
        this.rockets = data;
    }
}

export class RoadsterView {
    constructor(data) {
        this.roadster = data;
    }

}

export class MenuView {
    constructor(container) {
        this.container = container;
        this.callbacks = [];
    }

    //temporary content. This method will be changed
    initialize() {
        //starlinks, rockets, tesla
        const options = this.container.querySelectorAll(".option");

        options[0].addEventListener('click', () => {
            window.location.replace("starlinksView.html");
        })

        options[1].addEventListener('click', () => {
            window.location.replace("rocketsView.html");
        })

        options[2].addEventListener('click', () => {
            window.location.replace("roadsterView.html");
        })
        
        console.log("Initialized");
    }

    render() {
        this.container.classList.remove("view");
        this.container.innerHTML = `
        <div class="content-container menu">
            <div class="header">
                <p class="header-text">Welcome to spacex</p>
                <p class="brackets">( pick option to see more )</p>
            </div>

            <div class="options-container">
                <div class="option">
                    <img src="images\starlink-icon.png" alt="Starlink">
                    <div class="option-label">Starlinks</div>
                </div>

                <div class="option">
                    <img src="images\rocket-icon.png" alt="Rocket">
                    <div class="option-label">Rockets</div>
                </div>

                <div class="option">
                    <img src="images\roadster-icon.png" alt="Roadster">
                    <div class="option-label">Tesla car</div>
                </div>
            </div>
       </div>`
    }
}
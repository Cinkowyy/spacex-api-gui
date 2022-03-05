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
        this.callback = null;
    }

    render(menuView) {
        if(this.callback != null) {
            this.callback.eventEl.removeEventListener('click', this.callback.eventFn);
            this.callback = null;
        }

        let container = menuView.container;

        let contentContainer = this.getDivElement();
        const headerArrow = contentContainer.querySelector('.header img');

        const eventFunction = () => {
            menuView.render();
            menuView.initialize();
        }

        headerArrow.addEventListener('click', eventFunction);

        this.callback = {
            eventEl: headerArrow,
            eventFn: eventFunction
        }
       

        container.classList.add('view');
        container.innerHTML = '';
        container.appendChild(contentContainer);
    }

    getDivElement() {

        let date = new Date (this.roadster.launchDate);
        let dateString = this.roadster.launchDate.slice(0, 10);
        let timeString = `${date.getHours()}:${date.getMinutes()}`;

        let contentContainer = document.createElement('div');
        contentContainer.classList.add('content-container', 'roadster');
        contentContainer.innerHTML = `
            <div class="header">
                <img src="images/arrow-left-back.svg" alt="back">
                <p class="header-text">Tesla</p>
            </div>

            <div class="roadster-container">

                <div class="roadster-data">

                    <div class="mars distance">
                        <div class="icons">
                            <div class="planet">
                                <img src="./images/mars.png" alt="mars">
                                <p>Mars</p>
                            </div>
                            <div class="arrows-icon">
                                <img src="./images/distance-arrows-icon.svg" alt="distance">
                            </div>
                            <div class="roadster-front">
                                <img src="./images/roadster-front.png" alt="tesla">
                                <p>Tesla</p>
                            </div>
                        </div>
                        <div class="kilometers">${Math.floor(this.roadster.marsDistance)} km</div>
                    </div>

                    <div class="launch-info">
                        <div class="launch-icon">
                            <img src="./images/rocket-icon.png" alt="launch">
                        </div>

                        <div class="launch-details">
                            <div class="date">
                                <img src="./images/calendar-icon.svg" alt="date">
                                <p>${dateString}</p>
                            </div>
                            <div class="time">
                                <img src="./images/clock-icon.svg" alt="time">
                                <p>${timeString}</p>
                            </div>
                        </div>
                    </div>

                    <div class="earth distance">
                        <div class="icons">
                            <div class="planet">
                                <img src="./images/earth.png" alt="earth">
                                <p>Earth</p>
                            </div>
                            <div class="arrows-icon">
                                <img src="./images/distance-arrows-icon.svg" alt="distance">
                            </div>
                            <div class="roadster-front">
                                <img src="./images/roadster-front.png" alt="tesla">
                                <p>Tesla</p>
                            </div>
                        </div>
                        <div class="kilometers">${Math.floor(this.roadster.earthDistance)} km</div>
                    </div>

                </div>

                <div class="images">
                    <img src="${this.roadster.images[0]}" alt="pic-one">
                    <img src="${this.roadster.images[1]}" alt="pic-two">
                    <img src="${this.roadster.images[2]}" alt="pic-three">
                    <img src="${this.roadster.images[3]}" alt="-picfour">
                </div>

                <div class="description">
                    <p class="heading">description</p>
                    <div class="content">
                        <p>${this.roadster.description}</p>
                    </div>
                </div>
                
            </div>
        `;

        return contentContainer;
    }

}

export class MenuView {
    constructor(container, viewsArray) {
        this.container = container;
        this.views = viewsArray;
        this.callbacks = [];
    }


    initialize() {

        if(this.callbacks.length>0) {
            this.callbacks.forEach(el => {
                el.eventEl.removeEventListener('click', el.eventFn);
            })
            this.callbacks = [];
        }

        //starlinks, rockets, tesla
        const options = this.container.querySelectorAll(".option");

        for(let i=0; i< options.length; i++) {

            const eventFunction = () => {
                console.log(this.views[i]);
                //this.views[i].render(this);
            }

            options[i].addEventListener('click', eventFunction);

            this.callbacks.push({
                eventEl: options[i],
                eventFn: eventFunction
            })
        }

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
                    <img src="images/starlink-icon.png" alt="Starlink">
                    <div class="option-label">Starlinks</div>
                </div>

                <div class="option">
                    <img src="images/rocket-icon.png" alt="Rocket">
                    <div class="option-label">Rockets</div>
                </div>

                <div class="option">
                    <img src="images/roadster-icon.png" alt="Roadster">
                    <div class="option-label">Tesla car</div>
                </div>
            </div>
       </div>`
    }
}
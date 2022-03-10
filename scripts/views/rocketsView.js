import Pagination from "../pagination.js";

export default class RocketsView {
    constructor(data) {
        this.pagination = new Pagination(data);
        this.callback = null;
    }

    render(menuView) {
        if(this.callback != null) {
            this.callback.eventEl.removeEventListener('click', this.callback.eventFn);
            this.callback = null;
        }

        let container = menuView.container;
        const contentContainer = this.getContentContainer();
        const starlinksContainer = contentContainer.querySelector('.rockets-container')
        this.pagination.container = starlinksContainer;

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

    getContentContainer() {

        let contentContainer = document.createElement('div');
        contentContainer.classList.add("content-container", "rockets");
        let header = document.createElement('div');
        header.classList.add("header");
        header.innerHTML = `
            <img src="images/arrow-left-back.svg" alt="back">
            <p class="header-text">Rockets</p>
        `;

        contentContainer.appendChild(header);

        //needed for demo, it will be changed
        contentContainer.innerHTML += `
            <div class="rockets-container">
                <div class="row header-row">
                    <p>Rocket name</p>
                    <p class="desktop-only">Diamentions and weight</p>
                    <p>First launch</p>
                    <p>Status</p>
                    <p class="invisible">1111</p>
                </div>

                <div class="rockets-list-wrapper">

                    <div class="row-wrapper">
                        <div class="row">
                            <p>Falcon Heavy</p>
                            <div class="diamentions desktop-only">
                                <div>
                                    <p>Height: 70 m</p>
                                    <p>Diameter: 12.2 m</p>
                                </div>
                                <p>Mass: 1420788 kg</p>
                            </div>
                            <p>2018-02-06</p>
                            <p class="status active">Active</p>
                            <div class="arrow-down">
                                <img src="images/arow-down.svg">
                            </div>
                        </div>
                    </div>


                    <!--Main element-->
                    <div class="row-wrapper">
                        <div class="row">
                            <p>Falcon Heavy</p>
                            <div class="diamentions desktop-only">
                                <div>
                                    <p>Height: 70 m</p>
                                    <p>Mass: 1420788 kg</p>
                                </div>
                                <p>Diameter: 12.2 m</p>
                            </div>
                            <p>2018-02-06</p>
                            <p class="status active">Active</p>
                            <div class="arrow-down">
                                <img src="images/arow-down.svg">
                            </div>
                        </div>

                        <div class="details-wrapper open">
                            <div class="engine-info">
                                <h4>Engine info</h4>
                                <p>Thrust vacuum: 915 kN</p>
                                <p>Type: Merlin</p>
                                <p>Thrust to weight: 180.1</p>
                            </div>
                            <div class="diamentions-mobile">
                                <h4>Diamentions</h4>
                                <p>Height: 70 m</p>
                                <p>Diameter: 12.2 m</p>
                                <p>Mass: 1420788 kg</p>
                            </div>
                            <div class="images">
                                <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg">
                                <img src="https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg">
                                <img src="https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg">
                                <img src="https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg">
                            </div>
                            <div class="description-wrapper">
                                <div class="description">
                                    <h4>Description</h4>
                                    <p>With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                                </div>
                                <p>Launch cost: $90 000 000</p>
                            </div>
                        </div>
                    </div>

                    <div class="row-wrapper">
                        <div class="row">
                            <p>Falcon Heavy</p>
                            <div class="diamentions desktop-only">
                                <div>
                                    <p>Height: 70 m</p>
                                    <p>Diameter: 12.2 m</p>
                                </div>
                                <p>Mass: 1420788 kg</p>
                            </div>
                            <p>2018-02-06</p>
                            <p class="status active">Active</p>
                            <div class="arrow-down">
                                <img src="images/arow-down.svg">
                            </div>
                        </div>
                    </div>

                    <div class="row-wrapper">
                        <div class="row">
                            <p>Falcon Heavy</p>
                            <div class="diamentions desktop-only">
                                <div>
                                    <p>Height: 70 m</p>
                                    <p>Diameter: 12.2 m</p>
                                </div>
                                <p>Mass: 1420788 kg</p>
                            </div>
                            <p>2018-02-06</p>
                            <p class="status active">Active</p>
                            <div class="arrow-down">
                                <img src="images/arow-down.svg">
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;

        contentContainer.appendChild(this.pagination.getPagination());

        return contentContainer;
    }

}
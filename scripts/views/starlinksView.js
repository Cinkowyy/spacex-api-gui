export default class StarlinksView {
    constructor(data) {
        this.starlinks = data;
        this.callback = null;
    }

    render(menuView) {
        if(this.callback != null) {
            this.callback.eventEl.removeEventListener('click', this.callback.eventFn);
            this.callback = null;
        }

        let container = menuView.container;
        let contentContainer = this.getContentContainer();


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
        contentContainer.classList.add("content-container", "starlinks");
        let header = document.createElement('div');
        header.classList.add("header");
        header.innerHTML = `
            <img src="images/arrow-left-back.svg" alt="back">
            <p class="header-text">Starlinks</p>
        `;

        contentContainer.appendChild(header);

        //needed for demo, it will be changed
        contentContainer.innerHTML += `
            <div class="starlinks-container">
                <div class="row header-row">
                    <p>ID</p>
                    <p>Name</p>
                    <p>Launch date</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>September 16, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>February 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>November 03, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
                <div class="row">
                    <p>2020-038T</p>
                    <p>STARLINK-1506</p>
                    <p>June 13, 2020</p>
                </div>
            </div>

            <div class="pagination">
                <img src="images/arrow-left.svg" alt="prev">
                <div class="active"><span>1</span></div>
                <div><span>2</span></div>
                <div><span>3</span></div>
                <div class="dots"><span>...</span></div>
                <div><span>13</span></div>
                <img src="images/arow-right.svg" alt="next">
            </div>
        `;

        return contentContainer;
    }

}
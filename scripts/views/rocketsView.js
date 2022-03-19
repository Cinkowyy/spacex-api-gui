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
        const rocketsContainer = contentContainer.querySelector('.rockets-container')

        //sets header and container for pagination element
        this.pagination.container = rocketsContainer;
        this.pagination.header = this.getHeaderRow();

        //render first page
        this.pagination.currentPage = 1;
        this.pagination.renderPage();

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

        const rocketsContainer = document.createElement('div');
        rocketsContainer.classList.add('rockets-container');
        contentContainer.appendChild(rocketsContainer);

        contentContainer.appendChild(this.pagination.getPagination());

        return contentContainer;
    }

    //returns header row for data container;
    getHeaderRow() {
        let headerRow = document.createElement('div');
        headerRow.classList.add('row', 'header-row');

        headerRow.innerHTML = `
            <p>Rocket name</p>
            <p class="desktop-only">Diamentions and weight</p>
            <p>First launch</p>
            <p>Status</p>
            <p class="invisible">1111</p>
        `;

        return headerRow;
    }

}
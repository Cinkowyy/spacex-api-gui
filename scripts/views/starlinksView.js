import Pagination from "../pagination.js";

export default class StarlinksView {
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
        const starlinksContainer = contentContainer.querySelector('.starlinks-container')

        //sets header and container for pagination element
        this.pagination.container = starlinksContainer;
        this.pagination.header = this.getHeaderRow();

        this.pagination.renderPage(1);

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

    //returns container with header, data container and pagination container;
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


        const starlinksContainer = document.createElement('div');
        starlinksContainer.classList.add('starlinks-container');

        contentContainer.appendChild(starlinksContainer);

        contentContainer.appendChild(this.pagination.getPagination());

        return contentContainer;
    }

    //returns header row for data container;
    getHeaderRow() {
        let headerRow = document.createElement('div');
        headerRow.classList.add('row', 'header-row');

        headerRow.innerHTML = `
            <p>ID</p>
            <p>Name</p>
            <p>Launch date</p>
        `;

        return headerRow;
    }

}
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
        this.pagination.container = starlinksContainer;
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
               
            </div>
        `;

        contentContainer.appendChild(this.pagination.getPagination());

        return contentContainer;
    }

}
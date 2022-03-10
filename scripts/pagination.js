export default class Pagination {
    constructor(data) {
        this.data = data;
        this.currentPage = 1;
        this.container;
    }

    getPagination() {
        let paginationContainer = document.createElement("div");
        paginationContainer.classList.add('pagination');
        paginationContainer.innerHTML = `
            <img src="images/arrow-left.svg" alt="prev">
            <div class="active"><span>1</span></div>
            <div><span>2</span></div>
            <div><span>3</span></div>
            <div class="dots"><span>...</span></div>
            <div><span>13</span></div>
            <img src="images/arow-right.svg" alt="next"> 
        `;

        return paginationContainer;
    }
}
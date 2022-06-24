export default class Pagination {
  constructor(data) {
    this.data = this.getSlicedData(data);
    this.currentPage = 1;
    this.pages = this.data.length;
    this.headerElement;
    this.header;
    this.container;
  }

  renderPage() {
    const pageArray = this.data[this.currentPage - 1];

    this.container.innerHTML = "";
    this.container.appendChild(this.header);

    if (pageArray[0].engineInfo) {
      let rowWrapper = document.createElement("div");
      rowWrapper.classList.add("rockets-list-wrapper");
      pageArray.forEach((el) => {
        rowWrapper.appendChild(el.render());
      });

      this.container.appendChild(rowWrapper);
      return;
    }

    pageArray.forEach((el) => {
      this.container.appendChild(el.render());
    });

    this.rerenderPagination();
  }

  rerenderPagination() {
    let oldPagination = this.container.parentNode.querySelector(".pagination");
    if (oldPagination) {
      this.container.parentNode.removeChild(oldPagination);
    }
    let newPagination = this.getPagination();
    this.container.parentNode.appendChild(newPagination);
  }

  getPaginationElement(number, active) {
    let div = document.createElement("div");
    if (active) div.classList.add("active");
    let span = document.createElement("span");
    span.textContent = number;
    div.appendChild(span);

    if (!active) {
      div.addEventListener("click", () => {
        this.currentPage = number;
        this.renderPage();
        this.rerenderPagination();
      });
    }

    return div;
  }

  getPaginationArrow(direction) {
    let arrow = document.createElement("img");
    arrow.src = `images/arrow-${direction}.svg`;

    if (direction == "left") {
      arrow.addEventListener("click", () => {
        this.currentPage -= 1;
        this.renderPage();
        this.rerenderPagination();
      });

      return arrow;
    }

    arrow.addEventListener("click", () => {
      this.currentPage += 1;
      this.renderPage();
      this.rerenderPagination();
    });

    return arrow;
  }

  getPaginationDots() {
    let dotsDiv = document.createElement("div");
    dotsDiv.classList.add("dots");
    let span = document.createElement("span");
    span.textContent = "...";
    dotsDiv.appendChild(span);

    return dotsDiv;
  }

  getPagination() {
    let paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");

    if (this.pages == 1) {
      paginationContainer.appendChild(this.getPaginationElement(1, true));

      return paginationContainer;
    }

    //pagination with dots
    if (this.pages - this.currentPage >= 4) {
      //array of pagination elements
      let paginationElementsArray = [
        this.getPaginationElement(this.currentPage, true),
        this.getPaginationElement(this.currentPage + 1, false),
        this.getPaginationElement(this.currentPage + 2, false),
        this.getPaginationDots(),
        this.getPaginationElement(this.pages, false),
      ];

      //optional left arrow
      if (this.currentPage != 1)
        paginationContainer.appendChild(this.getPaginationArrow("left"));

      //render pagination elements
      paginationElementsArray.forEach((element) => {
        paginationContainer.appendChild(element);
      });

      //right arrow
      paginationContainer.appendChild(this.getPaginationArrow("right"));

      return paginationContainer;
    }

    //pagination without dots

    //optional left arrow
    if (this.currentPage != 1)
      paginationContainer.appendChild(this.getPaginationArrow("left"));

    //render pagination elements
    paginationContainer.appendChild(
      this.pages - 3 == this.currentPage
        ? this.getPaginationElement(this.pages - 3, true)
        : this.getPaginationElement(this.pages - 3, false)
    );

    paginationContainer.appendChild(
      this.pages - 2 == this.currentPage
        ? this.getPaginationElement(this.pages - 2, true)
        : this.getPaginationElement(this.pages - 2, false)
    );

    paginationContainer.appendChild(
      this.pages - 1 == this.currentPage
        ? this.getPaginationElement(this.pages - 1, true)
        : this.getPaginationElement(this.pages - 1, false)
    );

    paginationContainer.appendChild(
      this.pages == this.currentPage
        ? this.getPaginationElement(this.pages, true)
        : this.getPaginationElement(this.pages, false)
    );

    //optional right arrow
    if (this.currentPage != this.pages)
      paginationContainer.appendChild(this.getPaginationArrow("right"));

    return paginationContainer;
  }

  getSlicedData(data) {
    let slicedArray = [];
    for (let i = 0; i < data.length; i += 10) {
      slicedArray.push(data.slice(i, i + 10));
    }
    return slicedArray;
  }
}

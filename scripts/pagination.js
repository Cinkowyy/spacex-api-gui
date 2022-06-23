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
  }

  getPagination() {
    let paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");

    if (this.pages == 1) {
      paginationContainer.innerHTML = `
            <div class="active"><span>1</span></div>`;

      return paginationContainer;
    }

    if (this.pages - this.currentPage >= 4) {
      paginationContainer.innerHTML = `
            ${
              this.currentPage == 1
                ? ""
                : '<img src="images/arrow-left.svg" alt="prev">'
            }
            <div class="active"><span>${this.currentPage}</span></div>
            <div><span>${this.currentPage + 1}</span></div>
            <div><span>${this.currentPage + 2}</span></div>
            <div class="dots"><span>...</span></div>
            <div><span>${this.pages}</span></div>
            ${
              this.currentPage == this.pages
                ? ""
                : '<img src="images/arow-right.svg" alt="next">'
            }
        `;

      return paginationContainer;
    }

    paginationContainer.innerHTML = `
            ${
              this.currentPage == 1
                ? ""
                : '<img src="images/arrow-left.svg" alt="prev">'
            }
            <div ${
              this.pages - 3 == this.currentPage ? ' class="active"' : ""
            }><span>${this.pages - 3}</span></div>
            <div${
              this.pages - 2 == this.currentPage ? ' class="active"' : " "
            }><span>${this.pages - 2}</span></div>
            <div${
              this.pages - 1 == this.currentPage ? ' class="active"' : " "
            }><span>${this.pages - 1}</span></div>
            <div${
              this.pages == this.currentPage ? ' class="active"' : " "
            }><span>${this.pages}</span></div>
            ${
              this.currentPage == this.pages
                ? ""
                : '<img src="images/arow-right.svg" alt="next">'
            }
        `;

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

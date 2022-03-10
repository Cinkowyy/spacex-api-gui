import Pagination from "../pagination.js";

export default class RocketsView {
    constructor(data) {
        this.pagination = new Pagination(data);
        this.callback = null;
    }
}
export default class Starlink {
    constructor(starlinkId, ObjectName, launch) {
        this.id = starlinkId;
        this.name = ObjectName;
        this.launchDate = launch;
    }

    render() {
        let element = document.createElement('div');
        element.classList.add('row');

        element.innerHTML = `
            <p>${this.id}</p>
            <p>${this.name}</p>
            <p>${this.getFormattedDate(this.launchDate)}</p>
        `

        return element;
    }

    getFormattedDate(date) {

        const monthNames = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];

        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);

        return `${monthNames[parseInt(month)-1]} ${day}, ${year}`;
    }
}
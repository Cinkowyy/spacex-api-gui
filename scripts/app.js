import * as views from './views.js';
import DataHandler from './data.js';

const container = document.querySelector(".container");

const starlinksData = await DataHandler.fetchData("starlink");
const rocketsData = await DataHandler.fetchData("rockets");
const roadsterData = await DataHandler.fetchData("roadster");

const menuView = new views.MenuView(container, [new views.StarlinksView(starlinksData), new views.RocketsView(rocketsData), new views.RoadsterView(roadsterData)]);


if(starlinksData.length == 0 || rocketsData.length == 0 || roadsterData.length == 0) {
    alert("Fetching data failed")
} else {
    menuView.initialize();
}


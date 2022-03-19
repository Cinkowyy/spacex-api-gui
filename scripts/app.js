import MenuView from './views/menuView.js';
import StarlinksView from './views/starlinksView.js';
import RocketsView from './views/rocketsView.js';
import RoadsterView from "./views/roadsterView.js";
import DataHandler from './dataHandler.js';

const container = document.querySelector(".container");

const starlinksData = await DataHandler.fetchData("starlink");
const rocketsData = await DataHandler.fetchData("rockets");
const roadsterData = await DataHandler.fetchData("roadster");

const menuView = new MenuView(container, [new StarlinksView(starlinksData), new RocketsView(rocketsData), new RoadsterView(roadsterData)]);


if(starlinksData.length == 0 || rocketsData.length == 0 || roadsterData.length == 0) {
    alert("Fetching data failed")
} else {
    menuView.initialize();
}


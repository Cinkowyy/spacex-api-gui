import MenuView from "./views/menuView.js";
import StarlinksView from "./views/starlinksView.js";
import RocketsView from "./views/rocketsView.js";
import RoadsterView from "./views/roadsterView.js";
import DataHandler from "./dataHandler.js";

const container = document.querySelector(".container");

const starlinksData = await DataHandler.fetchData("starlink");
const rocketsData = await DataHandler.fetchData("rockets");
const roadsterData = await DataHandler.fetchData("roadster");

const menuView = new MenuView(container, [
  new StarlinksView(starlinksData),
  new RocketsView(rocketsData),
  new RoadsterView(roadsterData),
]);
const loader = document.querySelector(".loader");

if (
  starlinksData.length == 0 ||
  rocketsData.length == 0 ||
  roadsterData.length == 0
) {
  loader.innerHTML = '<span class="fetch-error">Fetching data failed</span>';
} else {
  menuView.initialize();
  console.log("Initialized");
  loader.classList.add("loaded");
}

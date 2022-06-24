export default class MenuView {
  constructor(container, viewsArray) {
    this.container = container;
    this.views = viewsArray;
    this.callbacks = [];
  }

  initialize() {
    if (this.callbacks.length > 0) {
      this.callbacks.forEach((el) => {
        el.eventEl.removeEventListener("click", el.eventFn);
      });
      this.callbacks = [];
    }

    //starlinks, rockets, tesla
    const options = this.container.querySelectorAll(".option");

    for (let i = 0; i < options.length; i++) {
      const eventFunction = () => {
        this.views[i].render(this);
      };

      options[i].addEventListener("click", eventFunction);

      this.callbacks.push({
        eventEl: options[i],
        eventFn: eventFunction,
      });
    }
  }

  render() {
    this.container.classList.remove("view");
    this.container.innerHTML = `
        <div class="content-container menu">
            <div class="header">
                <p class="header-text">Welcome to spacex</p>
                <p class="brackets">( pick option to see more )</p>
            </div>

            <div class="options-container">
                <div class="option">
                    <img src="images/starlink-icon.png" alt="Starlink">
                    <div class="option-label">Starlinks</div>
                </div>

                <div class="option">
                    <img src="images/rocket-icon.png" alt="Rocket">
                    <div class="option-label">Rockets</div>
                </div>

                <div class="option">
                    <img src="images/roadster-icon.png" alt="Roadster">
                    <div class="option-label">Tesla car</div>
                </div>
            </div>
       </div>`;
  }
}

import { Component } from 'preact';
import { TimelineMax, Linear } from 'gsap';

import Building1 from './../assets/images/1.svg';
import Building2 from './../assets/images/2.svg';
import Building3 from './../assets/images/3.svg';
import Building4 from './../assets/images/4.svg';

class Builings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [Building1, Building2, Building3, Building4],
      enabled: true
    }
    this.interval = null;
  }

  componentDidMount() {
    this.startGenerating();
  }

  startGenerating() {
    this.interval = setInterval(() => {
      const buildings = document.querySelector('.buildings');
      const newBuilding = this.createBuilding();
      buildings.appendChild(newBuilding);
      this.animateBuilding(newBuilding);
    }, 3000);
  }

  toggleGenerating() {
    if (this.state.enabled) {
      this.setState({ enabled: false }, () => clearInterval(this.interval));
    } else {
      this.setState({ enabled: true }, () => this.startGenerating());
    }
  }

  createBuilding() {
    const building = document.createElement('img');
    const index = (Math.floor(Math.random() * (4 - 1 + 1) + 1)) - 1;
    const image = this.state.images[index];
    building.setAttribute('class', `building building-${index + 1}`);
    building.setAttribute('src', image);
    return building;
  }

  animateBuilding(building) {
    const buildingTl = new TimelineMax();
    buildingTl
      .set(building, { left: '100%' })
      .to(building, 10, { left: '-800px', ease: Linear.easeNone })
      .add(() => building.parentElement.removeChild(building))
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

	render() {
		return (
			<div className="buildings">
        <button onClick={() => this.toggleGenerating()}>{this.state.enabled ? 'Stop' : 'Start'} generating buildings</button>
      </div>
		);
	}
}

export default Builings;
import { Component } from 'preact';
import { TimelineMax, Linear } from 'gsap';

import cloudImage from './../assets/images/cloud.png';

class Background extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    }
    this.interval = null;
  }

  componentDidMount() {
    this.startGenerating();
  }

  toggleGenerating() {
    if (this.state.enabled) {
      this.setState({ enabled: false }, () => clearInterval(this.interval));
    } else {
      this.setState({ enabled: true }, () => this.startGenerating());
    }
  }

  startGenerating() {
    this.interval = setInterval(() => {
      const background = document.querySelector('.background');
      const cloud = this.createCloud();
      background.appendChild(cloud);
      this.animateCloud(cloud);
    }, 1500);
  }

  createCloud() {
    const cloud = document.createElement('img');
    cloud.setAttribute('src', cloudImage);
    cloud.setAttribute('class', 'cloud');
    cloud.setAttribute('style', `width: ${this.randomNumber(100, 60)}px; top: ${this.randomNumber(300, 5)}px;`);
    return cloud;
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  animateCloud(cloud) {
    const cloudTl = new TimelineMax();
    cloudTl
      .set(cloud, { left: '100%' })
      .to(cloud, this.randomNumber(20, 10), { left: '-100px', ease: Linear.easeNone })
      .add(() => cloud.parentElement.removeChild(cloud))
  }

	render() {
		return (
			<div className="background">
        <button onClick={() => this.toggleGenerating()}>{this.state.enabled ? 'Stop' : 'Start'} generating clouds</button>
      </div>
		);
	}
}

export default Background;
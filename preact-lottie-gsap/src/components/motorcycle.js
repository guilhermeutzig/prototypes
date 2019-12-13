import { Component } from 'preact';
import lottie from 'lottie-web';

class Motorcycle extends Component {
  componentDidMount() {
    const container = document.querySelector('#motorcycle');
    this.animation = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './../assets/lottie/motorcycle.json'
    });
    this.animation.setSpeed(1.6);
  }

  render() {
    return (
      <div id="motorcycle"></div>
    )
  }
}

export default Motorcycle;
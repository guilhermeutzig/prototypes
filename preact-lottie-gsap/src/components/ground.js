import { Component } from 'preact';
import { TweenMax, TimelineMax, Linear } from 'gsap';

class Motorcycle extends Component {
  componentDidMount() {
    const dashedTimeline = new TimelineMax({ repeat: '-1' });
    dashedTimeline
      .set('.yellow-lines.dashed', {left: '100%', ease: Linear.easeNone})
      .to('.yellow-lines.dashed', 4, {left: '-100%', ease: Linear.easeNone})
  }

  render() {
    return (
      <div className="ground">
        <div className="border top"></div>
        <div className="yellow-lines"></div>
        <div className="yellow-lines dashed"></div>
        <div className="yellow-lines full"></div>
        <div className="border bottom"></div>
      </div>
    )
  }
}

export default Motorcycle;
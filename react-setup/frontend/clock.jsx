import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalhours: 0,
      newhours: 0,
      minutes: 0,
      seconds: 0,
      ampmtoggle: ["AM","PM"],
      ampm: "AM"

    };
    this.incrementTime = this.incrementTime.bind(this);
    this.setUp = this.setUp.bind(this);
  }
  componentDidMount(){
    this.incrementTime();
    this.setUp();
    setInterval(()=>{
      this.incrementTime();
    }, 1000);

  }
  setUp(){
    let start = new Date();
    let totalhours = start.getHours();
    let newhours = 0;
    let minutes = start.getMinutes();
    let seconds = start.getSeconds();
    let ampmtoggle = ["AM", "PM"];
    let ampm = ampmtoggle[0];
    this.setState({totalhours, newhours, minutes, seconds, ampmtoggle, ampm});
  }
  incrementTime(){
    let totalhours = this.state.totalhours;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    let newhours = this.state.newhours;
    let ampmtoggle = this.state.ampmtoggle;
    let ampm = this.state.ampm;
    seconds += 1;
    if (seconds === 60){
      seconds = 0;
      minutes += 1;
    }
    if (minutes === 60){
      totalhours += 1;
    }
    if (totalhours >= 12){
      ampm = ampmtoggle[1];
      if (totalhours > 12){
        newhours = totalhours - 12;
      }
    }
  this.setState({totalhours, newhours, minutes, seconds, ampmtoggle, ampm});
  }

  render() {
    return(

        <div className="clock">
          <div id='hours'>{this.state.newhours}</div>
          <div id='minutes'>{this.state.minutes}</div>
          <div id='seconds'>{this.state.seconds}</div>
          <div id='ampm'>{this.state.ampm}</div>
        </div>

    );
  }

}
export default Clock;

/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Me from "./images/me.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      endDate: new Date(),
    };
  }

  startInterval = (e) => {
    var that = this;
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let x = setInterval(function () {
      let distance = that.state.endDate.getTime() - new Date().getTime();

      console.log("endDate " + that.state.endDate);
      console.log("now " + new Date().getTime());
      if (distance >= 0) {
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        );
        document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        );
        document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        );
      }
    }, second);
  };

  handleChange(e) {
    this.startInterval(e);
    this.setState({ endDate: e });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Me} className="App-logo" alt="logo" />
          <h1 id="head">React Countdown </h1>
        </header>

        <div className="margin"></div>

        <DatePicker
          className="form-control datepicker"
          selected={new Date()}
          onChange={(e) => this.handleChange(e)}
          dateFormat="EEEE, MMM d, yyyy"
        />

        <div className="margin"></div>
        <h1 id="head">Countdown to my birthday:</h1>
        <ul>
          <li>
            <span id="days">00</span> days
          </li>
          <li>
            <span id="hours">00</span> hours
          </li>
          <li>
            <span id="minutes">00</span> minutes
          </li>
          <li>
            <span id="seconds">00</span> seconds
          </li>
        </ul>
      </div>
    );
  }
}

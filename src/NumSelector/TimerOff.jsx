import React, { Component } from 'react'

class TimerOff extends Component {

    constructor (props) {
        super(props);
        this.initTimer();
    }

    state = {
        dd: 0,
        hh: 0,
        mm: 0,
        ss: 0
    }

    initTimer = () => () => {
        const currentDate = new Date();
        const endDate = currentDate + 6000;
        let seconds = 600;//endDate - currentDate;

        if (seconds > 0) {
            let minutes = seconds/60; 
            let hours = minutes/60;
            let days = hours / 24;

            minutes = (hours - Math.floor(hours)) * 60; 
            days = Math.floor(days);
            hours =  Math.floor(hours)- days * 24; 
     
            seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
            minutes = Math.floor(minutes); 
     
            this.setState ({
                dd: days,
                hh: hours,
                mm: minutes,
                ss: seconds 
            })

            //setTimePage(days, hours, minutes, econds); 
     
            function secOut() {
              if (seconds == 0) { 
                  if (minutes == 0) { 
                      if (hours == 0) { 
                             if(days == 0){
                                  this.showMessage(timerId); 
                              }
                              else{
                                   days--; 
                                  hours = 24; 
                                minutes = 59; 
                                seconds = 59; 
                              }
                      }
                      else {
                          hours--; 
                          minutes = 59; 
                          seconds = 59; 
                      }
                  }
                  else {
                      minutes--; 
                      seconds = 59; 
                  }
              }
              else {
                  seconds--; 
              }
                  this.setState ({
                    dd: days,
                    hh: hours,
                    mm: minutes,
                    ss: seconds 
                })
            }
            var timerId = setInterval(secOut, 1000) 
        }
        else {
            alert("Установленая дата уже прошла");
        }
    }

    showMessage() {
        //
    }
    render() {
        return (
            <div>
                {this.state.mm}  :  {this.state.ss}
            </div>
        )
    }
}

export default TimerOff;


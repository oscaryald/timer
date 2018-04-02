import {Component, OnInit} from '@angular/core';
import {TimerService} from "./timer.service";

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    constructor(private timerService: TimerService) {
    }

    timerSub;
    hour: number = 11;
    minute: number = 45;
    second: number = 58;

    setHour: number;
    setMinute: number;
    setSeconds: number;

    private initTimer() {
        if (this.second < 59) {
            this.second++;
        } else {
            this.second = 0;
            if (this.minute < 59) {
                this.minute++;
            } else {
                this.minute = 0
                if (this.hour < 24) {
                    this.hour++;
                } else {
                    this.hour = 0;
                }
            }
        }
    }

    private unsubscibeTimer() {
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
    }

    ngOnInit() {
        this.setHour = this.hour;
        this.setMinute = this.minute;
        this.setSeconds = this.second;
    }


    startTimer() {
        this.timerSub = this.timerService.getTimer()
            .subscribe((val) => {
                this.initTimer();
            })
    }

    stopTimer() {
        this.unsubscibeTimer();
        this.hour = this.setHour;
        this.minute = this.setMinute;
        this.second = this.setSeconds;
    }

    waitTimer() {
        this.unsubscibeTimer();
    }

    resetTimer() {
        this.unsubscibeTimer();
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }
}

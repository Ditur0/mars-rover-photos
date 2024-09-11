import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  landingDate = new Date('2021-03-18 22:55:00');
  currentDate!: Date;
  timeDifference!: any;
  demo!: any;
  years!: any;
  stringYears!: any;
  months!: any;
  stringMonths!: any;
  days!: any;
  stringDays!: any;
  hours!: any;
  stringHours!: any;
  minutes: any;
  stringMinutes!: any;
  seconds!: any;
  stringSeconds!: any;

  x = setInterval(() => {
    this.currentDate = new Date();

    this.timeDifference =
      this.currentDate.getTime() - this.landingDate.getTime();
    this.years = Math.floor(
      this.timeDifference / (1000 * 60 * 60 * 24 * 365.25)
    );
    this.months = this.currentDate.getMonth() - this.landingDate.getMonth() + 1;
    this.days = this.currentDate.getDate() - this.landingDate.getDate() + 1;
    this.hours =
      Math.floor(this.timeDifference % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60);
    this.hours = this.hours.toFixed(0);
    this.minutes = Math.floor(
      (this.timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.seconds = Math.floor((this.timeDifference % (1000 * 60)) / 1000);

    if (this.months < 0) {
      this.years--;
      this.months += 12;
    }

    if (this.days < 0) {
      this.months--;
      if (this.months < 0) {
        this.years--;
        this.months += 12;
      }
      const daysInPreviousMonth = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        0
      ).getDate();
      this.days += daysInPreviousMonth;
    }

    this.stringYears =
      this.years <= 9 ? '0' + this.years : this.years.toString();
    this.stringMonths =
      this.months <= 9 ? '0' + this.months : this.months.toString();
    this.stringDays = this.days <= 9 ? '0' + this.days : this.days.toString();
    this.stringHours =
      this.hours <= 9 ? '0' + this.hours : this.hours.toString();
    this.stringMinutes =
      this.minutes <= 9 ? '0' + this.minutes : this.minutes.toString();
    this.stringSeconds =
      this.seconds <= 9 ? '0' + this.seconds : this.seconds.toString();
  });
}

import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fname: string = "";
  lname: string = "";
  data = {};

  @Output() event = new EventEmitter();

  add() {
    this.data = {
      fname: this.fname,
      lname: this.lname,
    };
    this.event.emit(this.data);
  }
}

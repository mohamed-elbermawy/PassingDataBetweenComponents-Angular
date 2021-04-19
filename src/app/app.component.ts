import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Assigment";

  data = [];

  receiver(eventData) {
    console.log(eventData);
    this.data.push(eventData);
  }
}

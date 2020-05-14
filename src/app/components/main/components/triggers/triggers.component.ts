import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.css']
})
export class TriggersComponent implements OnInit {

  @Input("triggers") triggers = [];
  constructor() { }

  ngOnInit(): void {
  }

  changeTrigger(item, event) {
    const newValue = event.target.value;
    const index = this.triggers.indexOf(item);
    this.triggers[index] = newValue;
  }
}

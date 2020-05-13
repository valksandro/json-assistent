import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-items',
  templateUrl: './dropdown-items.component.html',
  styleUrls: ['./dropdown-items.component.css']
})
export class DropdownItemsComponent implements OnInit {

  @Input("items") items = [];
  constructor() { }

  ngOnInit(): void {
  }

  changeItem(item, event) {
    const newValue = event.target.value;
    const index = this.items.indexOf(item);
    this.items[index] = newValue;
  }
}

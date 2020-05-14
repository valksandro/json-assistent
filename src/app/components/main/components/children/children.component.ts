import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input("children") children = [];
  constructor() { }

  ngOnInit(): void {
  }

  changeChild(child, event) {
    const newValue = event.target.value;
    const index = this.children.indexOf(child);
    this.children[index] = newValue;
  }
}

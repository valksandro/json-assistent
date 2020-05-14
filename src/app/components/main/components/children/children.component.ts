import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TextField } from 'src/app/domain/TextField';
import { Modal } from 'src/app/ar-modal/components';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input("children") children = [];
  @ViewChild('modalChildren') modalChildren:Modal
  constructor() { }

  ngOnInit(): void {
  }

  changeChild(child, event) {
    const newValue = event.target.value;
    const index = this.children.indexOf(child);
    this.children[index] = newValue;
  }

  addChild() {
    const child = new TextField();
    this.children.push(child);
  }
}

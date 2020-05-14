import { FieldBase } from './field-base';

export class DropdownWithChildren extends FieldBase {
    triggers: Array<any>
    items: Array<any>
    children: Array<any>

    constructor() {
        super();
        this.triggers = [];
        this.items = [];
        this.children = [];       
    }
}
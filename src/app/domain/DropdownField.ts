import { FieldBase } from './field-base';

export class DropdownField extends FieldBase {

    isSingleSelection: boolean
    items: Array<any>;

    constructor() {
        super();
        this.type = "dropdown"; 
        this.isSingleSelection = false;  
        this.items = [];
    }
}
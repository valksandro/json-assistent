import { FieldBase } from './field-base';

export class CheckBoxField extends FieldBase {

    items: Array<any>;

    constructor() {
        super();
        this.type = "checkbox"; 
        this.items = [];
    }
}
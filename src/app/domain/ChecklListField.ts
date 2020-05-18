import { FieldBase } from './field-base';

export class ChecklListField extends FieldBase {
    children: Array<any>

    constructor() {
        super();
        this.children = [];       
    }
}
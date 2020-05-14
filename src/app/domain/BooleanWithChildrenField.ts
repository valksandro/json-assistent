import { FieldBase } from './field-base';

export class BooleanWithChildrenField extends FieldBase {
    children: Array<any>;

    constructor() {
        super();
        this.children = [];
    }
}
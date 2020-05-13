import { FieldBase } from './field-base';

export class SlideField extends FieldBase {
    min: string;
    max: string;
    value: string;
    division: string;

    constructor() {
        super();
        this.min = null;
        this.max = null;
        this.value = null;
        this.division =null;
        this.type = "slide";
    }
}
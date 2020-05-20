import { FieldBase } from './field-base';

export class NumberField extends FieldBase {
    mask: string;
    editable: boolean;
    size: number;
    capitalization: boolean;
    rightSymbol: string

    constructor() {
        super();
        this.type = "number";
        this.mask = null;
        this.editable = true;
        this.size = null;
        this.capitalization = true;
        this.rightSymbol = null;        
    }
}
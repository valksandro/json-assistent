import { FieldBase } from './field-base';

export class TextField extends FieldBase {
    mask: string;
    editable: boolean;
    size: number;
    capitalization: boolean;

    constructor() {
        super();
        this.mask = null;
        this.editable = null;
        this.size = null;
        this.capitalization = null;
    }
}
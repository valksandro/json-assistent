import { FieldBase } from './field-base';

export class Text extends FieldBase {
    mask: string;
    editable: boolean;
    display: boolean;
    size: number;
    capitalization: boolean;
}
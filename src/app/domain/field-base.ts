 export class FieldBase {
        group: number;
        orderResume: number;
        groupResume: number;
        fieldName: string;
        label: string;
        type: string
        display: boolean;
        required: boolean;

        constructor() {
              this.group = null;
              this.orderResume = null;
              this.groupResume = null;
              this.fieldName = null;
              this.label = null;
              this.type = null;
              this.display = true;
              this.required = true;
        }
 }
export class Field {
    name?: string;
    type?: string;
    jsonObject?:Object[];
    constructor(name?: string, type?: string, jsonObject?:Object[]){
        this.name = name;
        this.type = type;
        this.jsonObject = jsonObject;
    }
}
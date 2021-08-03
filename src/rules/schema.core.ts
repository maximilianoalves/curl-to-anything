import toJsonSchema from 'to-json-schema'

export default class Schema {

    jsonObject: Object;

    constructor(jsonObject: string) {
        this.jsonObject = JSON.parse(jsonObject);
    }

    mountSchema() {
        const jsonSchema = toJsonSchema(this.jsonObject, {required: true})
        return JSON.stringify(jsonSchema, null, 2);
    }
}
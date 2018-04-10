import {rasSchema} from "./storageForRAS";

let properties = {};
let id = 0;

export function createIfrsProperties(name) {
    properties[id] = {
        "tmp": {
            "type": "string",
            "title": name
        },
    }["tmp"];
    id += 1;
}

let ifrsSchema = {
    "type": "object",
    properties
};

function _isEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length >= 1);
}

export function getIfrsSchema() {
    if (_isEmpty(properties)) {
        return ifrsSchema
    }
}

export let newIfrsSchema = {
    "type": "object",
    "required": [
        "newValue"
    ],
    "properties": {
        "newValue": {
            "type": "string",
            "title": "New IFRS value"
        },
    }
};

export let ifrsPropsEmpty = properties.length > 0;
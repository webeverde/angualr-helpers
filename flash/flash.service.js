import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
export class FlashMessage {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
}
let FlashService = class FlashService {
    constructor() {
        this.listeners = [];
    }
    listenToMessageAdded(func) {
        this.listeners.push(func);
    }
    addMessage(text, type, translateParams) {
        if (!type) {
            type = 'success';
        }
        let message = new FlashMessage(text, type);
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i](message);
        }
    }
};
FlashService = tslib_1.__decorate([
    Injectable()
], FlashService);
export { FlashService };
//# sourceMappingURL=flash.service.js.map
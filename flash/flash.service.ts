import { Injectable } from '@angular/core';

export class FlashMessage {
    text: string;
    type: "info" | "success" | "warning" | "danger";
    timer: number;

    constructor(text: string, type: "info" | "success" | "warning" | "danger") {
        this.text = text;
        this.type = type;
    }
}

@Injectable()
export class FlashService {

    constructor() {

    }

    private listeners: Function[] = [];

    public listenToMessageAdded(func: (message: FlashMessage) => void) {
        this.listeners.push(func);
    }

    public addMessage(text: string, type?: "info" | "success" | "warning" | "danger", translateParams?: { [key: string]: string }) {
        if (!type) {
            type = 'success';
        }
        let message = new FlashMessage(text, type);
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i](message);
        }

    }
}
export declare class FlashMessage {
    text: string;
    type: "info" | "success" | "warning" | "danger";
    timer: number;
    constructor(text: string, type: "info" | "success" | "warning" | "danger");
}
export declare class FlashService {
    constructor();
    private listeners;
    listenToMessageAdded(func: (message: FlashMessage) => void): void;
    addMessage(text: string, type?: "info" | "success" | "warning" | "danger", translateParams?: {
        [key: string]: string;
    }): void;
}

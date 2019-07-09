"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class FlashMessage {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
}
exports.FlashMessage = FlashMessage;
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
FlashService = __decorate([
    core_1.Injectable()
], FlashService);
exports.FlashService = FlashService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsYXNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBYSxZQUFZO0lBS3JCLFlBQVksSUFBWSxFQUFFLElBQStDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQVRELG9DQVNDO0FBR0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUVyQjtRQUlRLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFGbkMsQ0FBQztJQUlNLG9CQUFvQixDQUFDLElBQXFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWdELEVBQUUsZUFBMkM7UUFDekgsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksR0FBRyxTQUFTLENBQUM7U0FDcEI7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFFTCxDQUFDO0NBQ0osQ0FBQTtBQXRCWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7R0FDQSxZQUFZLENBc0J4QjtBQXRCWSxvQ0FBWSJ9
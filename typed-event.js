"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** passes through events as they happen. You will not get events from before you start listening */
class TypedEvent {
    constructor() {
        this.listeners = [];
        this.listenersOncer = [];
        this.on = (listener) => {
            this.listeners.push(listener);
            return {
                dispose: () => this.off(listener)
            };
        };
        this.once = (listener) => {
            this.listenersOncer.push(listener);
        };
        this.off = (listener) => {
            var callbackIndex = this.listeners.indexOf(listener);
            if (callbackIndex > -1)
                this.listeners.splice(callbackIndex, 1);
        };
        this.emit = (event) => {
            /** Update any general listeners */
            this.listeners.forEach((listener) => listener(event));
            /** Clear the `once` queue */
            if (this.listenersOncer.length > 0) {
                this.listenersOncer.forEach((listener) => listener(event));
                this.listenersOncer = [];
            }
        };
        this.pipe = (te) => {
            return this.on((e) => te.emit(e));
        };
    }
}
exports.TypedEvent = TypedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWQtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlZC1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLG9HQUFvRztBQUNwRyxNQUFhLFVBQVU7SUFBdkI7UUFDWSxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixtQkFBYyxHQUFrQixFQUFFLENBQUM7UUFFM0MsT0FBRSxHQUFHLENBQUMsUUFBcUIsRUFBYyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLE9BQU87Z0JBQ0gsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ3BDLENBQUM7UUFDTixDQUFDLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBQyxRQUFxQixFQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFBO1FBRUQsUUFBRyxHQUFHLENBQUMsUUFBcUIsRUFBRSxFQUFFO1lBQzVCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFBO1FBRUQsU0FBSSxHQUFHLENBQUMsS0FBUSxFQUFFLEVBQUU7WUFDaEIsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUV0RCw2QkFBNkI7WUFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBQyxFQUFpQixFQUFjLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBbENELGdDQWtDQyJ9
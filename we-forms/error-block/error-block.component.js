"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * This component displays errors for a form component
 */
let ErrorBlockComponent = class ErrorBlockComponent {
    /**
     * The component's constructor
     */
    constructor() {
        /**
         * An array mapping all default error types to error messages
         */
        this.errorMessages = {
            'required': 'FORM_ERROR_REQUIRED',
            'min': 'FORM_ERROR_MIN',
            'max': 'FORM_ERROR_MAX',
            'size': 'FORM_ERROR_SIZE',
            'maxlength': 'FORM_ERROR_MAXLENGTH',
            'minlength': 'FORM_ERROR_MINLENGTH',
            'email': 'FORM_ERROR_EMAIL',
            'duplicate': 'FORM_ERROR_DUPLICATE',
            'dependency': 'FORM_ERROR_DEPENDENCY',
            'constraint': 'FORM_ERROR_CONSTRAINT',
            'date': 'FORM_ERROR_DATE',
            'beforeDate': 'FORM_ERROR_BEFORE_DATE',
            'unavailableDate': 'FORM_ERROR_UNAVAILABLE_DATE',
            'compareTo': 'FORM_ERROR_COMPARE_TO',
            'zip': 'FORM_ERROR_COMPARE_ZIP',
            'undefined': 'FORM_ERROR_INVALID_INPUT',
            'crmDuplicate': 'FORM_ERROR_CRM_DUPLICATE'
        };
        /**
         * An array containing error codes to ignore
         */
        this.ignore = [];
    }
    /**
     * Returns the error message for a given error code
     *
     * @param key The error code
     */
    getMessage(key) {
        if (this.messages) {
            if (this.messages[key]) {
                return this.messages[key];
            }
        }
        if (this.errorMessages[key]) {
            return this.errorMessages[key];
        }
        return "Unknown error: " + key;
    }
    /**
     * Returns a list of all error messages to display
     *
     * @param errors An array of all errors
     */
    renderMessages(errors) {
        let out = [];
        for (let key in errors) {
            if (this.ignore.indexOf(key) > -1) {
                continue;
            }
            out.push(this.getMessage(key));
        }
        return out;
    }
};
__decorate([
    core_1.Input("messages")
], ErrorBlockComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], ErrorBlockComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("control")
], ErrorBlockComponent.prototype, "control", void 0);
ErrorBlockComponent = __decorate([
    core_1.Component({
        selector: 'error-block',
        templateUrl: 'error-block.html'
    })
], ErrorBlockComponent);
exports.ErrorBlockComponent = ErrorBlockComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3ItYmxvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQWlEO0FBR2pEOztHQUVHO0FBS0gsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF5QzVCOztPQUVHO0lBQ0g7UUExQ0E7O1dBRUc7UUFDSCxrQkFBYSxHQUE4QjtZQUN2QyxVQUFVLEVBQUUscUJBQXFCO1lBQ2pDLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsWUFBWSxFQUFFLHVCQUF1QjtZQUNyQyxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsWUFBWSxFQUFFLHdCQUF3QjtZQUN0QyxpQkFBaUIsRUFBRSw2QkFBNkI7WUFDaEQsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsY0FBYyxFQUFHLDBCQUEwQjtTQUM5QyxDQUFBO1FBT0Q7O1dBRUc7UUFFSCxXQUFNLEdBQWEsRUFBRSxDQUFDO0lBV3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxNQUFrQztRQUM3QyxJQUFJLEdBQUcsR0FBYSxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsU0FBUzthQUNaO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSixDQUFBO0FBbERHO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQztxREFDa0I7QUFLcEM7SUFEQyxZQUFLLENBQUMsUUFBUSxDQUFDO21EQUNNO0FBS3RCO0lBREMsWUFBSyxDQUFDLFNBQVMsQ0FBQztvREFDSTtBQXZDWixtQkFBbUI7SUFKL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxrQkFBa0I7S0FDbEMsQ0FBQztHQUNXLG1CQUFtQixDQStFL0I7QUEvRVksa0RBQW1CIn0=
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./flash.component"));
__export(require("./flash.service"));
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const flash_component_1 = require("./flash.component");
const flash_service_1 = require("./flash.service");
/**
 * Module for displaying flash alerts for success, warning and error messages using bootstrap markup
 */
let FlashModule = class FlashModule {
};
FlashModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [flash_component_1.FlashMessageComponent],
        declarations: [flash_component_1.FlashMessageComponent],
        providers: [flash_service_1.FlashService],
    })
], FlashModule);
exports.FlashModule = FlashModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxhc2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLHFDQUFnQztBQUNoQyw0Q0FBK0M7QUFDL0Msd0NBQXlDO0FBQ3pDLHVEQUEwRDtBQUMxRCxtREFBK0M7QUFFL0M7O0dBRUc7QUFPSCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUksQ0FBQTtBQUFmLFdBQVc7SUFOdkIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztRQUN2QixPQUFPLEVBQUUsQ0FBQyx1Q0FBcUIsQ0FBQztRQUNoQyxZQUFZLEVBQUUsQ0FBQyx1Q0FBcUIsQ0FBQztRQUNyQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyJ9
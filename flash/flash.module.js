import * as tslib_1 from "tslib";
export * from './flash.component';
export * from './flash.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlashMessageComponent } from './flash.component';
import { FlashService } from './flash.service';
/**
 * Module for displaying flash alerts for success, warning and error messages using bootstrap markup
 */
let FlashModule = class FlashModule {
};
FlashModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        exports: [FlashMessageComponent],
        declarations: [FlashMessageComponent],
        providers: [FlashService],
    })
], FlashModule);
export { FlashModule };
//# sourceMappingURL=flash.module.js.map
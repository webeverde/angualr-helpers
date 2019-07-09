export * from './flash.component';
export * from './flash.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlashMessageComponent } from './flash.component';
import { FlashService } from './flash.service';

/**
 * Module for displaying flash alerts for success, warning and error messages using bootstrap markup
 */
@NgModule({
    imports: [CommonModule],
    exports: [FlashMessageComponent],
    declarations: [FlashMessageComponent],
    providers: [FlashService],
})
export class FlashModule { }

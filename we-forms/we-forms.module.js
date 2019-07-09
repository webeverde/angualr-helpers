"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const error_block_component_1 = require("./error-block/error-block.component");
const dynamic_list_control_component_1 = require("./form-controls/dynamic-list-control/dynamic-list-control.component");
const input_control_component_1 = require("./form-controls/input-control/input-control.component");
const select_control_component_1 = require("./form-controls/select-control/select-control.component");
const select_check_control_component_1 = require("./form-controls/select-check-control/select-check-control.component");
const textarea_control_component_1 = require("./form-controls/textarea-control/textarea-control.component");
const time_control_component_1 = require("./form-controls/time-control/time-control.component");
const error_handle_service_1 = require("../services/error-handle.service");
let WeFormsModule = class WeFormsModule {
};
WeFormsModule = __decorate([
    core_1.NgModule({
        providers: [error_handle_service_1.ErrorService],
        declarations: [
            error_block_component_1.ErrorBlockComponent,
            dynamic_list_control_component_1.DynamicListControlComponent,
            input_control_component_1.InputControlComponent,
            select_control_component_1.SelectControlComponent,
            select_check_control_component_1.SelectCheckControlComponent,
            textarea_control_component_1.TextareaControlComponent,
            time_control_component_1.TimeControlComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [
            error_block_component_1.ErrorBlockComponent,
            dynamic_list_control_component_1.DynamicListControlComponent,
            input_control_component_1.InputControlComponent,
            select_control_component_1.SelectControlComponent,
            select_check_control_component_1.SelectCheckControlComponent,
            textarea_control_component_1.TextareaControlComponent,
            time_control_component_1.TimeControlComponent
        ]
    })
], WeFormsModule);
exports.WeFormsModule = WeFormsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2UtZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2UtZm9ybXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLDRDQUErQztBQUMvQywrRUFBMEU7QUFDMUUsd0hBQWtIO0FBQ2xILG1HQUE4RjtBQUM5RixzR0FBaUc7QUFDakcsd0hBQWtIO0FBQ2xILDRHQUF1RztBQUN2RyxnR0FBMkY7QUFDM0YsMkVBQWdFO0FBMEJoRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUksQ0FBQTtBQUFqQixhQUFhO0lBeEJ6QixlQUFRLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQyxtQ0FBWSxDQUFDO1FBQ3pCLFlBQVksRUFBRTtZQUNaLDJDQUFtQjtZQUNuQiw0REFBMkI7WUFDM0IsK0NBQXFCO1lBQ3JCLGlEQUFzQjtZQUN0Qiw0REFBMkI7WUFDM0IscURBQXdCO1lBQ3hCLDZDQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLHFCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQ0FBbUI7WUFDbkIsNERBQTJCO1lBQzNCLCtDQUFxQjtZQUNyQixpREFBc0I7WUFDdEIsNERBQTJCO1lBQzNCLHFEQUF3QjtZQUN4Qiw2Q0FBb0I7U0FDckI7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFJO0FBQWpCLHNDQUFhIn0=
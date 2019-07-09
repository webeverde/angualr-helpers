"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
let RouteService = class RouteService {
    constructor(router) {
        this.router = router;
        this.referrer = '';
        this.isBack = false;
        this.originalReferrer = document.referrer;
        window.onpopstate = (e) => {
            this.isBack = true;
        };
        this.router.events.pipe(operators_1.filter((e) => {
            return e instanceof router_1.RoutesRecognized;
        }), operators_1.pairwise()).subscribe((e) => {
            this.referrer = e[0].urlAfterRedirects;
        });
        this.router.events.pipe(operators_1.filter((e) => {
            return e instanceof router_1.NavigationEnd;
        })).subscribe((e) => {
            if (!this.isBack && e.url.indexOf('?') == -1) {
                window.scroll(0, 0);
            }
            this.isBack = false;
        });
    }
    getReferrer() {
        return this.referrer;
    }
    getOriginalReferrer() {
        return this.originalReferrer;
    }
};
RouteService = __decorate([
    core_1.Injectable()
], RouteService);
exports.RouteService = RouteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFDM0MsNENBQTBFO0FBQzFFLDhDQUFrRDtBQUdsRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBTXJCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjFCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUc1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNuQixrQkFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDZCxPQUFPLENBQUMsWUFBWSx5QkFBZ0IsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFDRixvQkFBUSxFQUFFLENBQ2IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbkIsa0JBQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLFlBQVksc0JBQWEsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDTCxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLEVBQUUsRUFBRTtZQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtQkFBbUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztDQUVKLENBQUE7QUF4Q1ksWUFBWTtJQUR4QixpQkFBVSxFQUFFO0dBQ0EsWUFBWSxDQXdDeEI7QUF4Q1ksb0NBQVkifQ==
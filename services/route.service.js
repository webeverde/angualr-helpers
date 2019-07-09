import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutesRecognized, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
let RouteService = class RouteService {
    constructor(router) {
        this.router = router;
        this.referrer = '';
        this.isBack = false;
        this.originalReferrer = document.referrer;
        window.onpopstate = (e) => {
            this.isBack = true;
        };
        this.router.events.pipe(filter((e) => {
            return e instanceof RoutesRecognized;
        }), pairwise()).subscribe((e) => {
            this.referrer = e[0].urlAfterRedirects;
        });
        this.router.events.pipe(filter((e) => {
            return e instanceof NavigationEnd;
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
RouteService = tslib_1.__decorate([
    Injectable()
], RouteService);
export { RouteService };
//# sourceMappingURL=route.service.js.map
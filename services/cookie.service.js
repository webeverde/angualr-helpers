import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CookieService = class CookieService {
    constructor(domain = "") {
        this.domain = domain;
    }
    setCookie(cname, cvalue, exdays) {
        if (cvalue) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            let pVal = JSON.stringify(cvalue);
            if (typeof cvalue == "string") {
                pVal = cvalue;
            }
            let c = cname + "=" + pVal + "; path=/; " + expires;
            if (this.domain.length) {
                c += "; domain=" + this.domain;
            }
            if (document) {
                document.cookie = c;
            }
        }
    }
    getCookie(cname) {
        var name = cname + "=";
        if (document) {
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1);
                if (c.indexOf(name) == 0) {
                    let s = c.substring(name.length, c.length);
                    try {
                        return JSON.parse(s);
                    }
                    catch (e) {
                        return s;
                    }
                }
            }
        }
        return "";
    }
    removeCookie(name) {
        this.setCookie(name, "empty", -1);
    }
};
CookieService = tslib_1.__decorate([
    Injectable()
], CookieService);
export { CookieService };
//# sourceMappingURL=cookie.service.js.map
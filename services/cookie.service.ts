
import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
    constructor(private domain: string = ""){}

    public setCookie(cname: string, cvalue: any, exdays: number) {
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

    public getCookie(cname: string) {
        var name = cname + "=";
        if (document) {
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);

                if (c.indexOf(name) == 0) {
                    let s = c.substring(name.length, c.length);
                    try {
                        return JSON.parse(s);
                    } catch (e) {
                        return s;
                    }
                }

            }
        }
        return "";
    }

    public removeCookie(name: string) {
        this.setCookie(name, "empty", -1);
    }

}
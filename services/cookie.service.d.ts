export declare class CookieService {
    private domain;
    constructor(domain?: string);
    setCookie(cname: string, cvalue: any, exdays: number): void;
    getCookie(cname: string): any;
    removeCookie(name: string): void;
}

import { Router } from '@angular/router';
export declare class RouteService {
    private router;
    private referrer;
    private originalReferrer;
    private isBack;
    constructor(router: Router);
    getReferrer(): string;
    getOriginalReferrer(): string;
}

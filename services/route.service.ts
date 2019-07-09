import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable()
export class RouteService {

    private referrer: string = '';
    private originalReferrer: string;
    private isBack: boolean = false;

    constructor(private router: Router) {
        this.originalReferrer = document.referrer;
        window.onpopstate = (e) => {
            this.isBack = true;
        }
        this.router.events.pipe(
            filter((e: any) => {
                return e instanceof RoutesRecognized;
            }), 
            pairwise()
        ).subscribe((e: any[]) => {
            this.referrer = e[0].urlAfterRedirects;
        });
        this.router.events.pipe(
            filter((e: any) => {
                return e instanceof NavigationEnd;
            })
        ).subscribe((e: NavigationEnd) => {

                if (!this.isBack && e.url.indexOf('?') == -1) {
                    window.scroll(0, 0);
                }
                this.isBack = false;
            });
    }

    public getReferrer(): string {
        return this.referrer;
    }

    public getOriginalReferrer(): string {
        return this.originalReferrer;
    }

}
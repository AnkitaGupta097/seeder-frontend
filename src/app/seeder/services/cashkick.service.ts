import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',

})
export class CashkickService {

    contracts = new BehaviorSubject<any>([])

    constructor(private httpClient: HttpClient) {
    }

    addNewCashKick(payload: any): Observable<any> {

        return this.httpClient
            .post<any>("cashkicks", payload)
    }

    getCashKicks(): Observable<any> {

        return this.httpClient
            .get<any>("cashkicks")
    }

}

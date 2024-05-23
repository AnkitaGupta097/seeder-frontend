import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',

})
export class ContractService {

    constructor(private httpClient: HttpClient) {
    }

    getContracts(): Observable<any> {
        return this.httpClient
            .get<any | HttpErrorResponse>("contracts")
            .pipe(
                map((responseData) => {
                    return responseData.map((contracts: any) => ({
                        ...contracts?.contractDetail,
                        status: contracts.status
                    }
                    ))

                }),
                catchError((errResponse) => { console.error(errResponse); return throwError(() => new Error(errResponse.error?.message)) }),
            );
    }


}

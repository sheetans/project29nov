import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/category.model';
@Injectable({ providedIn: 'root' })

export class categoryservice {
    constructor(private http: HttpClient) { }

    // getcategorylist(){
    //     return this.http.get('https://localhost:52623/api/Categories').toPromise();
    // }

    GetCategoryList() {
        return this.http.get('https://localhost:52623/api/Categories');
    }



}

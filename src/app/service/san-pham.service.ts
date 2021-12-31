import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/sanPhamMatKinh';

  //GET all Data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //GetSingleData
  getDataId(maKinh: any): Observable<any> {
    let ids = maKinh;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //GetSingleData
  // getThongTin(): Observable<any> {
  //   return this._http.get(`${this.apiUrl}`);
  // }


}

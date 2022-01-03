import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/BenhNhan';

  //GET all Data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //GetSingleData
  getDataId(maBN: any): Observable<any> {
    let ids = maBN;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //Create data
  dangKyBenhNhan(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //Delete data
  deleteBenhNhan(maBN: any): Observable<any> {
    let ids = maBN;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update data == PUT
  updateBenhNhan(data: any, maBN: any): Observable<any> {
    let ids = maBN;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }
}
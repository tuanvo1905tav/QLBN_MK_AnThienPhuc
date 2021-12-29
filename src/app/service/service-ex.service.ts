import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceExService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/xxxRouterLink';

  //GET all Data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //GetSingleData
  getDataId(maKH: any): Observable<any> {
    let ids = maKH;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //GetSingleData
  getThongTin(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //Create data
  dangKy(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //Delete data
  deleteKhachHang(maKH: any): Observable<any> {
    let ids = maKH;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update data == PUT
  updateKhachHang(data: any, maKH: any): Observable<any> {
    let ids = maKH;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }
}

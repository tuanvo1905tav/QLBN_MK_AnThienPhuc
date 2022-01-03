import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatKinhService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/MatKinh';

  //GET all Data
  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  //GetSingleData
  getDataId(maKinh:any):Observable<any>{
    let ids = maKinh;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //Create data
  dangKyMatKinh(data:any, hinhSP2:any) {
    // return this._http.post(`${this.apiUrl}`, data);
    let payLoad = new HttpParams();
    payLoad= payLoad.append('tenKinh',data.tenKinh);
    payLoad= payLoad.append('doCan',data.doCan);
    payLoad= payLoad.append('chatLieu',data.chatLieu);
    payLoad= payLoad.append('mauSac',data.mauSac);
    payLoad= payLoad.append('loaiGong',data.loaiGong);  
    payLoad= payLoad.append('giaBan',data.giaBan);
    payLoad= payLoad.append('baoHanh',data.baoHanh);
    payLoad= payLoad.append('maPhieuKham',data.maPhieuKham);
    payLoad = payLoad.append('hinhSP', hinhSP2);
    return this._http.post(this.url, payLoad);
  }

  url = 'http://localhost:8080/php_admin/add_sp.php';


  //Delete data
  deleteMatKinh(maKinh:any):Observable<any>{
    let ids = maKinh;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update data == PUT
  updateMatKinh(data:any, maKinh:any):Observable<any>{
    let ids = maKinh;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }
}

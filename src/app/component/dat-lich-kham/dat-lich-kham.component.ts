import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dat-lich-kham',
  templateUrl: './dat-lich-kham.component.html',
  styleUrls: ['./dat-lich-kham.component.scss']
})
export class DatLichKhamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hoTen: String = ""
  diaChi: String = ""
  dienThoai: String = ""
  email: String = ""

}

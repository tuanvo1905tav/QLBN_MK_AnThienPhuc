import { Component, OnInit } from '@angular/core';
import { DataMauService } from 'src/app/service/data-mau.service';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss']
})
export class GioHangComponent implements OnInit {

  constructor(private sanPham: DataMauService) { }

  ngOnInit(): void {
  }
  data1 = this.sanPham.sanPham


}

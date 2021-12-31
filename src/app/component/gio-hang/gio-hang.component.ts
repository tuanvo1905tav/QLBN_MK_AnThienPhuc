import { Component, OnInit } from '@angular/core';
import { SanPhamService } from 'src/app/service/san-pham.service';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss']
})
export class GioHangComponent implements OnInit {
  readData: any;
  constructor(private sanPhamMatKinh: SanPhamService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.sanPhamMatKinh.getAllData().subscribe((res) => {
      this.readData = res.data;
    });
  }

}

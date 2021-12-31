import { Component, OnInit } from '@angular/core';
import { SanPhamService } from 'src/app/service/san-pham.service';


@Component({
  selector: 'app-show-sp',
  templateUrl: './show-sp.component.html',
  styleUrls: ['./show-sp.component.scss'],
})
export class ShowSPComponent implements OnInit {

  readData: any;
  constructor(private sanPhamMatKinh: SanPhamService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  // data = this.sanPhamMatKinh

  //Get all data
  getAllData() {
    this.sanPhamMatKinh.getAllData().subscribe((res) => {
      this.readData = res.data;
    });
  }
}

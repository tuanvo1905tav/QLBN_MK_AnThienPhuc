import { Component, OnInit } from '@angular/core';
import { SanPhamService } from 'src/app/service/san-pham.service';


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {

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

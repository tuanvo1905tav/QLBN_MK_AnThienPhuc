import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanPhamService } from 'src/app/service/san-pham.service';

@Component({
  selector: 'app-ct-mat-kinh',
  templateUrl: './ct-mat-kinh.component.html',
  styleUrls: ['./ct-mat-kinh.component.scss']
})
export class CtMatKinhComponent implements OnInit {
  getId: any;
  readData: any;
  spMauData: any;

  constructor(private sanPhamMatKinh: SanPhamService,
    private router: ActivatedRoute,
    private routers: Router) { }

  ngOnInit(): void {
    this.getDataId();
    this.getAllData();
  }

  demoValue = 1;

  getAllData() {
    this.sanPhamMatKinh.getAllData().subscribe((res) => {
      this.spMauData = res.data;
    });
  }

  getDataId() {
    this.getId = this.router.snapshot.paramMap.get('maKinh');
    this.sanPhamMatKinh.getDataId(this.getId).subscribe((res) => {
      this.readData = res.data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataMauService } from 'src/app/service/data-mau.service';

@Component({
  selector: 'app-ct-mat-kinh',
  templateUrl: './ct-mat-kinh.component.html',
  styleUrls: ['./ct-mat-kinh.component.scss']
})
export class CtMatKinhComponent implements OnInit {

  constructor(private sanPham: DataMauService) { }

  ngOnInit(): void {
  }
  data1 = this.sanPham.sanPham

  demoValue = 1;
}

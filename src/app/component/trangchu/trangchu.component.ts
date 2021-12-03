import { Component, OnInit } from '@angular/core';
import { DataMauService } from 'src/app/service/data-mau.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {

  constructor(private sanPham: DataMauService) { }

  ngOnInit(): void {
  }
  data1 = this.sanPham.sanPham
}

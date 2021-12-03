import { Component, OnInit } from '@angular/core';
import { DataMauService } from 'src/app/service/data-mau.service';

@Component({
  selector: 'app-show-sp',
  templateUrl: './show-sp.component.html',
  styleUrls: ['./show-sp.component.scss'],
})
export class ShowSPComponent implements OnInit {

  constructor(private sanPham: DataMauService) { }

  ngOnInit(): void {
  }
  data = this.sanPham.sanPham

}

import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  hienThongBao(): void {
    this.notification
      .blank(
        'Thông báo',
        'Vui lòng điền đầy đủ tất cả thông tin ở các mục!'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-dat-lich-kham',
  templateUrl: './dat-lich-kham.component.html',
  styleUrls: ['./dat-lich-kham.component.scss']
})
export class DatLichKhamComponent implements OnInit {

  validateForm!: FormGroup;


  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      hoTen: [null, [Validators.required]],
      ngaySinh: [null, [Validators.required]],
      diaChi: [null, [Validators.required]],
      sdt: [null, [Validators.required]],
      email: [null, [Validators.required]],
      ngayDatHen: [null, [Validators.required]],
      ndKham: [null, [Validators.required]],
      remember: [true]
    });
  }

  hienThongBao(): void {
    this.notification
      .blank(
        'Thông báo',
        'Đặt lịch khám thành công.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}

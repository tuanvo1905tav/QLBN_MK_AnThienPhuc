import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatKinhService } from 'src/app/service/matkinh.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage'



@Component({
  selector: 'app-matkinh',
  templateUrl: './qlmatkinh.component.html',
  styleUrls: ['./qlmatkinh.component.css'],
  providers: [NzNotificationService, NzMessageService],
})
export class QLMatKinhComponent implements OnInit {
  constructor(private service: MatKinhService,
              private modal: NzModalService, 
              private router: ActivatedRoute, 
              private notification: NzNotificationService, 
              private message: NzMessageService,
              private ff:AngularFireStorage) { }

  readData: any;

  img:any;

  loading = false;
  avatarUrl?: string;

  getParamId: any;

  errmsg: string = '';
  succsess: string = '';
  // khai báo cho user form
  tenKinh: string = '';
  doCan: string = '';
  chatLieu: string = '';
  mauSac: string = '';
  loaiGong: string = '';
  giaBan: Date = new Date();
  baoHanh: string = '';

  // fileList1 = [...this.defaultFileList];
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.message.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.message.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.message.error('Network error');
        this.loading = false;
        break;
    }
  }

  ngOnInit(): void {

    this.getAllData();

    this.getParamId = this.router.snapshot.paramMap.get('maKinh');

    if (this.getParamId) {
      this.service.getDataId(this.getParamId).subscribe((res) => {
        this.userForm.patchValue({
          // Đổ dữ liệu ngược lại theo id có key Object 0
          tenKinh: res.data[0].tenKinh,
          doCan: res.data[0].doCan,
          mauSac: res.data[0].mauSac,
          loaiGong: res.data[0].loaiGong,
          chatLieu: res.data[0].chatLieu,
          giaBan: res.data[0].giaBan,
          baoHanh: res.data[0].baoHanh,
          hinhSP: res.data[0].hinhSP,
        });
      });
    }
  }

  userForm = new FormGroup({
    tenKinh: new FormControl('', Validators.required),
    doCan: new FormControl('', Validators.required),
    mauSac: new FormControl('', Validators.required),
    loaiGong: new FormControl('', Validators.required),
    chatLieu: new FormControl('', Validators.required),
    giaBan: new FormControl('', Validators.required),
    baoHanh: new FormControl('', Validators.required),
    maPhieuKham: new FormControl('', Validators.required),
  });

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log(this.userForm.value);
    this.myDate = Date.now();
    this.link = ("/files" + this.myDate);
    this.ff.upload(this.link,this.path);
    if (this.userForm.valid) {
      this.service.dangKyMatKinh(this.userForm.value, this.link).subscribe((res:any) => {
        console.log(res);
        this.userForm.reset();
        this.succsess = res.message;
      });
    } else {
      this.errmsg = 'Chưa nhập dữ liệu!';
    }
    console.log('Button ok clicked!');
    this.notification
      .blank(
        'Thông báo',
        'Thêm khám thành công.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  isVisible1 = false;

  showModal1(): void {
    this.isVisible1 = true;
  }

  handleOk1(): void {
    this.userUpdate();
    console.log('Button ok clicked!');
    this.isVisible1 = false;
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.isVisible1 = false;
  }

  isVisible2 = false;

  userUpdate() {
    if (this.userForm.valid) {
      this.service
        .updateMatKinh(this.userForm.value, this.getParamId)
        .subscribe((res) => {
          console.log(res);
          this.succsess = res.message;
          this.getAllData();
        });
    } else {
      this.errmsg = 'Chưa cập nhật dữ liệu!';
    }
  }


  showModal2(): void {
    this.service.getDataId(this.getParamId);
    // window.location.reload();
    this.getParamId = this.router.snapshot.paramMap.get('maKinh');

    if (this.getParamId) {
      this.service.getDataId(this.getParamId).subscribe((res) => {
        this.userForm.patchValue({
          // Đổ dữ liệu ngược lại theo id có key Object 0
          tenKinh: res.data[0].tenKinh,
          doCan: res.data[0].doCan,
          mauSac: res.data[0].mauSac,
          loaiGong: res.data[0].loaiGong,
          chatLieu: res.data[0].chatLieu,
          giaBan: res.data[0].giaBan,
          baoHanh: res.data[0].baoHanh,
          hinhSP: res.data[0].hinhSP,
        });
      });
    }

    this.isVisible2 = true;
  }

  handleOk2(): void {
    console.log('Button ok clicked!');
    // this.userForm.value = this.FormControl.value;
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Bạn chắc chắn muốn xoá kính này?',
      nzContent: '<b style="color: red;">Sau khi xoá dữ liệu từ kinh cũng sẽ bị xoá</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.service.deleteMatKinh(this.getParamId).subscribe((res) => {
          console.log(res);
          this.getAllData();
        });
        console.log('OK')
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  myDate :any;
  // Add data
  addData() {
    if (this.userForm.valid) {
     
      this.service.dangKyMatKinh(this.userForm.value, this.myDate).subscribe((res:any) => {
        console.log(res);
        
        this.userForm.reset();
        this.succsess = res.message;
        
      });
    } else {
      this.errmsg = 'Chưa nhập dữ liệu!';
    }
  }

  // ad
  hinh($event:any) {
    this.path = $event.target.files[0];
  }

  //Get all data
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res.data;
    });
  }
  //Get delete id
  deleteID(id: any) {
    this.service.deleteMatKinh(id).subscribe((res) => {
      console.log(res);
      this.getAllData();
    });
  }
  path:any;
  link:any;
  uploadIMG(){
    this.link = ("/files" + Math.random());
    this.ff.upload(this.link,this.path);
    console.log(this.path);
    console.log(this.link);
    
  }

}

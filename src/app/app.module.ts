import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TrangchuComponent } from './component/trangchu/trangchu.component';
import { Page404Component } from './component/page404/page404.component';
import { MatkinhComponent } from './component/matkinh/matkinh.component';
import { DatLichKhamComponent } from './component/dat-lich-kham/dat-lich-kham.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CtMatKinhComponent } from './component/ct-mat-kinh/ct-mat-kinh.component';
import { ShowSPComponent } from './component/show-sp/show-sp.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { BenhNhanComponent } from './component/benhnhan/BenhNhan.component';
import { QLMatKinhComponent } from './component/qlmatkinh/qlmatkinh.component';
import { LoginComponent } from './component/login/login.component';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { GioHangComponent } from './component/gio-hang/gio-hang.component';
import { VeChungToiComponent } from './component/ve-chung-toi/ve-chung-toi.component';
import { HuongDanComponent } from './component/huong-dan/huong-dan.component';
import { LienHeComponent } from './component/lien-he/lien-he.component';
import { DvKhamMatComponent } from './component/dv-kham-mat/dv-kham-mat.component';
import { DvDieuTriTatKhucXaComponent } from './component/dv-dieu-tri-tat-khuc-xa/dv-dieu-tri-tat-khuc-xa.component';
import { DvPhauThuatKhucXaComponent } from './component/dv-phau-thuat-khuc-xa/dv-phau-thuat-khuc-xa.component';
import { DvPhauThuatGlaucomaComponent } from './component/dv-phau-thuat-glaucoma/dv-phau-thuat-glaucoma.component';
import { DvTaoHinhThamMiComponent } from './component/dv-tao-hinh-tham-mi/dv-tao-hinh-tham-mi.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BenhNhanService } from './service/benhnhan.service';
import { QuanlibackendComponent } from './component/quanlibackend/quanlibackend.component';


registerLocaleData(vi);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    Page404Component,
    MatkinhComponent,
    CtMatKinhComponent,
    ShowSPComponent,
    DatLichKhamComponent,
    GioHangComponent,
    VeChungToiComponent,
    HuongDanComponent,
    LienHeComponent,
    DvKhamMatComponent,
    DvDieuTriTatKhucXaComponent,
    DvPhauThuatKhucXaComponent,
    DvPhauThuatGlaucomaComponent,
    DvTaoHinhThamMiComponent,
    LoginComponent,
    QLMatKinhComponent,
    BenhNhanComponent,
    QuanlibackendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzCarouselModule,
    NzInputNumberModule,
    LoadingBarRouterModule,
    NzInputModule,
    NzDatePickerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzResultModule,
    NzNotificationModule,
    NzIconModule,
    NzUploadModule,
    NzModalModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCOnHLMOyOgL9_mPpmH7wD8BIYKdD_t4Xo",
      authDomain: "qlweb-c8a47.firebaseapp.com",
      databaseURL: "https://qlweb-c8a47-default-rtdb.asia-southeast1.firebasedatabase.app/",
      projectId: "qlweb-c8a47",
      storageBucket: "qlweb-c8a47.appspot.com",
      messagingSenderId: "461384426633",
      appId: "1:461384426633:web:4decb24af83f4ac5631258",
      measurementId: "G-TRF2PEYZ22"
    }),
    AngularFirestoreModule


  ],
  providers: [BenhNhanService, { provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CtMatKinhComponent } from './component/ct-mat-kinh/ct-mat-kinh.component';
import { ShowSPComponent } from './component/show-sp/show-sp.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

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
    DvTaoHinhThamMiComponent
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
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

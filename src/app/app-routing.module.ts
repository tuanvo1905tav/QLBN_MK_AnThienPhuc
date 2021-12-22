import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtMatKinhComponent } from './component/ct-mat-kinh/ct-mat-kinh.component';
import { DatLichKhamComponent } from './component/dat-lich-kham/dat-lich-kham.component';
import { DvDieuTriTatKhucXaComponent } from './component/dv-dieu-tri-tat-khuc-xa/dv-dieu-tri-tat-khuc-xa.component';
import { DvKhamMatComponent } from './component/dv-kham-mat/dv-kham-mat.component';
import { DvPhauThuatGlaucomaComponent } from './component/dv-phau-thuat-glaucoma/dv-phau-thuat-glaucoma.component';
import { DvPhauThuatKhucXaComponent } from './component/dv-phau-thuat-khuc-xa/dv-phau-thuat-khuc-xa.component';
import { DvTaoHinhThamMiComponent } from './component/dv-tao-hinh-tham-mi/dv-tao-hinh-tham-mi.component';
import { GioHangComponent } from './component/gio-hang/gio-hang.component';
import { HuongDanComponent } from './component/huong-dan/huong-dan.component';
import { LienHeComponent } from './component/lien-he/lien-he.component';
import { MatkinhComponent } from './component/matkinh/matkinh.component';
import { Page404Component } from './component/page404/page404.component';
import { ShowSPComponent } from './component/show-sp/show-sp.component';
import { TrangchuComponent } from './component/trangchu/trangchu.component';
import { VeChungToiComponent } from './component/ve-chung-toi/ve-chung-toi.component';

const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'matkinh', component: MatkinhComponent },
  { path: 'matkinh/chiTietMatKinh', component: CtMatKinhComponent },
  { path: 'matkinh/allSanPham', component: ShowSPComponent },
  { path: 'chiTietMatKinh/gioHang', component: GioHangComponent },
  { path: 'datLichKham', component: DatLichKhamComponent },
  { path: 'veChungToi', component: VeChungToiComponent },
  { path: 'huongDan', component: HuongDanComponent },
  { path: 'lienHe', component: LienHeComponent },
  { path: 'dvDieuTriTatKhucXa', component: DvDieuTriTatKhucXaComponent },
  { path: 'dvKhamMat', component: DvKhamMatComponent },
  { path: 'dvPhauThuatGlaucoma', component: DvPhauThuatGlaucomaComponent },
  { path: 'dvPhauThuatKhucXa', component: DvPhauThuatKhucXaComponent },
  { path: 'dvTaoHinhThamMi', component: DvTaoHinhThamMiComponent },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

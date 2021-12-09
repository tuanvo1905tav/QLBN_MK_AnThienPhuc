import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtMatKinhComponent } from './component/ct-mat-kinh/ct-mat-kinh.component';
import { DatLichKhamComponent } from './component/dat-lich-kham/dat-lich-kham.component';
import { MatkinhComponent } from './component/matkinh/matkinh.component';
import { Page404Component } from './component/page404/page404.component';
import { ShowSPComponent } from './component/show-sp/show-sp.component';
import { TrangchuComponent } from './component/trangchu/trangchu.component';

const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'matkinh', component: MatkinhComponent },
  { path: 'matkinh/chiTietMatKinh', component: CtMatKinhComponent },
  { path: 'matkinh/allSanPham', component: ShowSPComponent },
  { path: 'datLichKham', component: DatLichKhamComponent },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

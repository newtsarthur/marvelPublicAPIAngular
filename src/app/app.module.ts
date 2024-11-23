import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [],
  imports: [HttpClientModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
})
export class AppModule {}

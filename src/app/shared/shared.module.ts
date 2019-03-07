import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CasePipe } from './pipes/case.pipe';
import { TraductorPipe } from './pipes/traductor.pipe';

@NgModule({
  declarations: [HeaderComponent, CardComponent, BodyComponent, FooterComponent, CasePipe, TraductorPipe],
  imports: [
    CommonModule],
    exports: [HeaderComponent, CardComponent, BodyComponent, FooterComponent]
})
export class SharedModule { }

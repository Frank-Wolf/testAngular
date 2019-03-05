import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule],
    exports: [HeaderComponent, CardComponent, BodyComponent, FooterComponent]
})
export class SharedModule { }

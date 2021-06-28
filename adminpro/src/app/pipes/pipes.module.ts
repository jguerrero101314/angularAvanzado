import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [ImagenPipe],
  exports: [ImagenPipe],
  imports: [CommonModule],
})
export class PipesModule {}

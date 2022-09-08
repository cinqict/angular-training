import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroPadPipe } from './zero-pad.pipe';

@NgModule({
  declarations: [ZeroPadPipe],
  imports: [CommonModule],
  exports: [ZeroPadPipe]
})
export class ZeroPadModule {}

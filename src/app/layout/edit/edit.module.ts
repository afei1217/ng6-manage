import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { editRouter } from './edit.router';
import { TextEditComponent } from './text-edit/text-edit.component';
import { MarkdownEditComponent } from './markdown-edit/markdown-edit.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(editRouter)
  ],
  declarations: [TextEditComponent, MarkdownEditComponent]
})
export class EditModule { }

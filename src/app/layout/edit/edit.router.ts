import { TextEditComponent } from "./text-edit/text-edit.component";
import { MarkdownEditComponent } from "./markdown-edit/markdown-edit.component";

export const editRouter = [
  {
    path:'textEdit',
    component:TextEditComponent,
    data:['编辑', '文本编辑']
  },
  {
    path:'mdEdit',
    component:MarkdownEditComponent,
    data:['编辑', 'MarkDown']
  }
]
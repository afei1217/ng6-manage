import { TextEditComponent } from "./text-edit/text-edit.component";
import { MarkdownEditComponent } from "./markdown-edit/markdown-edit.component";

export const editRouter = [
  {
    path:'textEdit',
    component:TextEditComponent
  },
  {
    path:'mdEdit',
    component:MarkdownEditComponent
  }
]
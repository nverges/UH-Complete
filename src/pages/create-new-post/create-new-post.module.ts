import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewPostPage } from './create-new-post';

@NgModule({
  declarations: [
    CreateNewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewPostPage),
  ],
})
export class CreateNewPostPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {
  
  currentPost: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    // Retrieve current post
    this.currentPost = this.navParams.get('currentPost');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

  // Edit post
  saveEdit() {
    console.log('saveEdit firing');

    // Close modal on "Save"
    this.viewCtrl.dismiss();
  }

  // Close View
  close() {
    this.viewCtrl.dismiss();
  }

}

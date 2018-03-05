import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// Providers
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CreateNewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-post',
  templateUrl: 'create-new-post.html',
})
export class CreateNewPostPage {

  posts: any;
  title: any;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
    console.log('CreateNewPostPage loaded');
  }

  // Save Post (not yet functioning)
  savePost() {
    // New Post object
    let newItem = {
      title: this.title,
      body: this.body,
    };
    // { need to post to DB }
    this.viewCtrl.dismiss(newItem);
  }

  // Close View
  close() {
    this.viewCtrl.dismiss();
  }

}

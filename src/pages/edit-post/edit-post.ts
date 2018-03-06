import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// Providers
import { RestProvider } from '../../providers/rest/rest';

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
  
  post: any;
  updatePost: any;
  title: any;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider) {

    // Retrieve current post
    this.post = navParams.get('post');
    this.updatePost = navParams.get('updatePost');
    console.log(this.post);
    console.log(this.updatePost)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

  // Edit post
  saveEdit(id) {
    console.log('saveEdit firing');
    console.log(id);

    let newPost = {
      id,
      title: this.title,
      body: this.body
    };

    console.log(newPost)

    // API POST request
    this.restProvider.editPost(id, newPost)
      // .then(() => {
      //   this.updatePost(newPost)
      // });
    this.updatePost(newPost)

    // Close modal on "Save"
    this.viewCtrl.dismiss();
  }

  // Close View
  close() {
    this.viewCtrl.dismiss();
  }

}

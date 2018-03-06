import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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

  // Variables
  username: string;
  title: string;
  body: string;
  id: number;
  user: any;
  appendNewPost: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider) {

    // Retrieve user info
    this.user = navParams.get('userId');
    this.username = navParams.get('username');
    this.appendNewPost = navParams.get('appendNewPost');

  }

  ionViewDidLoad() {
    console.log('CreateNewPostPage loaded');
  }

  // Save Post
  savePost(userId) {
    // console.log('savePost() firing');

    // set userId for selected user
    userId = this.user;

    // New Post object
    let newPost = {
      userId,
      title: this.title,
      body: this.body
    };

    // logs
    console.log('Create a New Post for userId: ' + userId);
    console.log(newPost);
 
    // Validation - if a newPost has been entered...
    if (newPost) {
      // Trigger API POST request
      this.restProvider.createPost(newPost)

        // Append post to User's post list
        .then(this.appendNewPost(newPost));
    }

    // Dismiss Modal
    this.viewCtrl.dismiss(newPost);
  }

  // Close View
  close() {
    this.viewCtrl.dismiss();
  }

}

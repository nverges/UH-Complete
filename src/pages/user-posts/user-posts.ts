import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

// HTTP
import { RestProvider } from '../../providers/rest/rest';

// Pages
import { CreateNewPostPage } from '../create-new-post/create-new-post';
import { EditPostPage } from '../edit-post/edit-post';

// import _ from 'lodash';

/**
 * Generated class for the UserPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-posts',
  templateUrl: 'user-posts.html',
})
export class UserPostsPage {

  // Variables
  posts: any;
  username: any;
  id: any;
  title: any;
  body: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('UserPostsPage loaded');
    console.log('Selected User:');
    console.log(this.navParams.get('user'));

    // Retrieve all posts from user
    this.getUserPosts(this.navParams.get('user').id);
    this.username = this.navParams.get('user').username;
    this.id = this.navParams.get('user').id;
    this.title = this.navParams.get('user').title;
    this.body = this.navParams.get('user').body;
  }

  // Get a specific user's posts by userId
  getUserPosts(id) {

    // GET request
    this.restProvider.getUserPosts(id)
    .then(data => {

      // Set entire data object to 'posts' variable
      this.posts = data;

      // Posts from selected user
      console.log(this.posts);
      console.log('--------------');
    });
  }

  // Display Create New Post Page in Modal
  createPostPage(userId) {
    console.log('ID: ' + userId);
    
    // Send data to Modal Component
    let modal = this.modalCtrl.create(CreateNewPostPage, {
      userId, 
      appendNewPost: this.appendNewPost.bind(this)
    });
    
    // Renders Modal
    modal.present();
  }
  
  // Append post to user's post list
  appendNewPost(post) {
    console.log('appendNewPost() firing');

    // Push new post to Posts object
    this.posts.push(post);
  }

  // Delete selected post
  deletePost(id: number) {
    console.log('deletePost() firing');
    this.restProvider.deletePost(id);
  }

  // Edit Selected Post
  editPost(id: number) {
    console.log('editPost() firing');

    let currentPost = {
      'title': this.title = this.navParams.get('user').title,
      'body': this.body = this.navParams.get('user').body
    }

    let modal = this.modalCtrl.create(EditPostPage, {currentPost});
    modal.present();
  }

  // Close View
  close() {
    this.viewCtrl.dismiss();
  }

}

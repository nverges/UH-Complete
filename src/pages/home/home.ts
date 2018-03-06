import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

// Pages
import { UserPostsPage } from '../user-posts/user-posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Variables
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public modalCtrl: ModalController) {
    
    // Retrieve all users
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('HomePage loaded');
  }

  // Get all users
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
    });
  }

  // Click event to display all posts for a specific user
  viewPosts(user) {

    // Push user data to UserPostsPage
    this.navCtrl.push(UserPostsPage, {
      user
    });
    console.log('View all Posts for user: ' + user.username);
  }

}

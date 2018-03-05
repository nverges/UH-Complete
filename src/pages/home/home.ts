import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

// Modal
import { ModalController } from 'ionic-angular';

// Pages
import { UserPostsPage } from '../user-posts/user-posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public modalCtrl: ModalController) {
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

  // Click event to display user posts page
  viewPosts(user) {
    this.navCtrl.push(UserPostsPage, {
      user
    })
  }

}

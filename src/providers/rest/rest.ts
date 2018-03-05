import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('RestProvider loaded');
  }

  // Get list of all users
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Get posts from specific user
  getUserPosts(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts?userID='+id).subscribe(data => {
        resolve(data);
      }, err=> {
        console.log(err);
      });
    });
  }

  // Add new post
  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/posts', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // Edit post
  editPost(post) {
    
  }

}

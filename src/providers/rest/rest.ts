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

  // GET all
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

  // GET by userId
  // Get posts from specific user
  getUserPosts(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts?userId='+id).subscribe(data => {
        resolve(data);
      }, err=> {
        console.log(err);
      });
    });
  }

  // POST 
  // Add a new post
  createPost(post) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/posts', {
        // id,
        ...post
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  // PUT
  // Edit a post
  editPost(id) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/posts/'+id, JSON.stringify(id))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  // DELETE
  // Delete a post
  deletePost(id) {
    console.log('api deletePost arg: ' + id)
    this.http.delete(this.apiUrl+'/posts/'+id)
    .subscribe(
      (post) => {
        console.log('Deleting Post:', post)
      },
      response => {
        console.log('ERROR', response);
      },
      () => {
        console.log('DELETE now completed.')
      }
    )
  }

}

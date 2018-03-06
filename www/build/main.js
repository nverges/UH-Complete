webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

/**
 * Generated class for the CreateNewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewPostPage = (function () {
    function CreateNewPostPage(navParams, viewCtrl, restProvider) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        // Retrieve user info
        this.user = navParams.get('userId');
        this.username = navParams.get('username');
        this.appendNewPost = navParams.get('appendNewPost');
    }
    CreateNewPostPage.prototype.ionViewDidLoad = function () {
        console.log('CreateNewPostPage loaded');
    };
    // Save Post
    CreateNewPostPage.prototype.savePost = function (userId) {
        // console.log('savePost() firing');
        // set userId for selected user
        userId = this.user;
        // New Post object
        var newPost = {
            userId: userId,
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
                .then(this.appendNewPost(newPost));
        }
        // Dismiss Modal
        this.viewCtrl.dismiss(newPost);
    };
    // Close View
    CreateNewPostPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CreateNewPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-new-post',template:/*ion-inline-start:"/Users/nick/Desktop/UH-Complete/src/pages/create-new-post/create-new-post.html"*/'<!--\n  Generated template for the CreateNewPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color=\'secondary\'>\n        <ion-title>Create New Post for {{ username }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)=\'close()\'><ion-icon name=\'close\'></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Title</ion-label>\n            <ion-input type=\'text\' [(ngModel)]=\'title\'></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Body</ion-label>\n            <ion-input type=\'text\' [(ngModel)]=\'body\'></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <button full ion-button color=\'secondary\' (click)=\'savePost(id)\'>Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/nick/Desktop/UH-Complete/src/pages/create-new-post/create-new-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], CreateNewPostPage);
    return CreateNewPostPage;
}());

//# sourceMappingURL=create-new-post.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPostPage = (function () {
    function EditPostPage(navCtrl, navParams, viewCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        // Retrieve current post
        this.post = navParams.get('post');
        this.updatePost = navParams.get('updatePost');
        console.log(this.post);
        console.log(this.updatePost);
    }
    EditPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPostPage');
    };
    // Edit post
    EditPostPage.prototype.saveEdit = function (id) {
        console.log('saveEdit firing');
        console.log(id);
        var newPost = {
            id: id,
            title: this.title,
            body: this.body
        };
        console.log(newPost);
        // API POST request
        this.restProvider.editPost(id, newPost);
        // .then(() => {
        //   this.updatePost(newPost)
        // });
        this.updatePost(newPost);
        // Close modal on "Save"
        this.viewCtrl.dismiss();
    };
    // Close View
    EditPostPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EditPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-post',template:/*ion-inline-start:"/Users/nick/Desktop/UH-Complete/src/pages/edit-post/edit-post.html"*/'<!--\n  Generated template for the EditPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color=\'secondary\'>\n        <ion-title>Edit Post</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)=\'close()\'><ion-icon name=\'close\'></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Title</ion-label>\n            <ion-input type=\'text\' [(ngModel)]=\'title\' value=\'{{post.title}}\'></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Body</ion-label>\n            <ion-textarea type=\'text\' [(ngModel)]=\'body\' value=\'{{post.body}}\' min=\'1000\'></ion-textarea>\n        </ion-item>\n\n    </ion-list>\n\n    <button full ion-button color=\'secondary\' (click)=\'saveEdit(post.id)\'>Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/nick/Desktop/UH-Complete/src/pages/edit-post/edit-post.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object])
    ], EditPostPage);
    return EditPostPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-post.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_new_post_create_new_post__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_post_edit_post__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// HTTP

// Pages



/**
 * Generated class for the UserPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPostsPage = (function () {
    function UserPostsPage(navCtrl, navParams, viewCtrl, restProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.modalCtrl = modalCtrl;
    }
    UserPostsPage.prototype.ionViewDidLoad = function () {
        console.log('UserPostsPage loaded');
        console.log('Selected User Data:');
        console.log(this.navParams.get('user'));
        // Retrieve all posts from user
        this.getUserPosts(this.navParams.get('user').id);
        this.username = this.navParams.get('user').username;
        this.id = this.navParams.get('user').id;
        this.title = this.navParams.get('user').title;
        this.body = this.navParams.get('user').body;
    };
    // Get a specific user's posts by userId
    UserPostsPage.prototype.getUserPosts = function (id) {
        var _this = this;
        // GET request 
        this.restProvider.getUserPosts(id)
            .then(function (data) {
            // Set entire data object to 'posts' variable
            _this.posts = data;
            // Posts from selected user
            console.log(_this.posts);
            console.log('--------------');
        });
    };
    // Display Create New Post Page in Modal
    UserPostsPage.prototype.createPostPage = function (userId) {
        console.log("Create New Post for " + this.username + ", userId: " + userId);
        // Send data to Modal Component
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__create_new_post_create_new_post__["a" /* CreateNewPostPage */], {
            userId: userId,
            username: this.navParams.get('user').username,
            appendNewPost: this.appendNewPost.bind(this)
        });
        // Renders Modal
        modal.present();
    };
    // Append post to user's post list
    UserPostsPage.prototype.appendNewPost = function (post) {
        // console.log('appendNewPost() firing');
        // Push new post to Posts object
        this.posts.push(post);
    };
    // Delete selected post
    UserPostsPage.prototype.deletePost = function (id) {
        // console.log('deletePost() firing');
        // console.log(id);
        // API delete call
        this.restProvider.deletePost(id);
        // Remove deleted post
        // Not sure why this works. 
        // Doesn't work in a .then()?
        __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.remove(this.posts, { id: id });
    };
    UserPostsPage.prototype.updatePost = function (post) {
        var editedIndex = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.findIndex(this.posts, { id: post.id });
        console.log(post);
        console.log(editedIndex);
        // Update object
        this.posts.splice(editedIndex, 1, post);
    };
    // Edit Selected Post
    UserPostsPage.prototype.editPost = function (id) {
        console.log('editPost() firing');
        console.log(id);
        // Find post
        var post = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(this.posts, { id: id });
        console.log(post);
        console.log(this.updatePost);
        // Pass post data to modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__edit_post_edit_post__["a" /* EditPostPage */], {
            post: post,
            updatePost: this.updatePost.bind(this)
        });
        // Render modal
        modal.present();
    };
    // Close View
    UserPostsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UserPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-posts',template:/*ion-inline-start:"/Users/nick/Desktop/UH-Complete/src/pages/user-posts/user-posts.html"*/'<!--\n  Generated template for the UserPostsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color=\'light\'>\n        <ion-title>{{ username }}\'s Posts</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)=\'createPostPage(id)\' ion-button><ion-icon name=\'add-circle\'></ion-icon></button>\n            <button ion-button icon-only (click)=\'close()\'><ion-icon name=\'close\'></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let post of posts">\n\n        <ion-card-header value=\'title\'>\n            {{ post.title }}\n        </ion-card-header>\n\n        <ion-card-content value=\'body\'>\n            {{ post.body }}\n        </ion-card-content>\n\n        <button ion-button color=\'secondary\' (click)=\'editPost(post.id)\'>Edit</button>\n        <button ion-button color=\'danger\' (click)=\'deletePost(post.id)\'>Delete</button>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/nick/Desktop/UH-Complete/src/pages/user-posts/user-posts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object])
    ], UserPostsPage);
    return UserPostsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=user-posts.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-new-post/create-new-post.module": [
		283,
		2
	],
	"../pages/edit-post/edit-post.module": [
		284,
		1
	],
	"../pages/user-posts/user-posts.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_posts_user_posts__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Pages

var HomePage = (function () {
    function HomePage(navCtrl, restProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.modalCtrl = modalCtrl;
        // Retrieve all users
        this.getUsers();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('HomePage loaded');
    };
    // Get all users
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
        });
    };
    // Click event to display all posts for a specific user
    HomePage.prototype.viewPosts = function (user) {
        // Push user data to UserPostsPage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_posts_user_posts__["a" /* UserPostsPage */], {
            user: user
        });
        console.log('View all Posts for user: ' + user.username);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nick/Desktop/UH-Complete/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color=\'primary\'>\n        <ion-title>\n            U-HAUL Mobile Web Test\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list inset>\n        <ion-item *ngFor="let user of users" (click)="viewPosts(user)" style="cursor:pointer">\n            <h2>{{user.username}}</h2>\n            <p>{{user.address.street}} {{user.address.suite}}, {{user.address.city}} {{user.address.zipcode}} </p>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/nick/Desktop/UH-Complete/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_posts_user_posts__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_new_post_create_new_post__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_post_edit_post__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Pages




// Providers

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_posts_user_posts__["a" /* UserPostsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_new_post_create_new_post__["a" /* CreateNewPostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_post_edit_post__["a" /* EditPostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-new-post/create-new-post.module#CreateNewPostPageModule', name: 'CreateNewPostPage', segment: 'create-new-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-post/edit-post.module#EditPostPageModule', name: 'EditPostPage', segment: 'edit-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-posts/user-posts.module#UserPostsPageModule', name: 'UserPostsPage', segment: 'user-posts', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_posts_user_posts__["a" /* UserPostsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_new_post_create_new_post__["a" /* CreateNewPostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_post_edit_post__["a" /* EditPostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nick/Desktop/UH-Complete/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nick/Desktop/UH-Complete/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://jsonplaceholder.typicode.com';
        console.log('RestProvider loaded');
    }
    // GET all
    // Get list of all users
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // GET by userId
    // Get posts from specific user
    RestProvider.prototype.getUserPosts = function (id) {
        var _this = this;
        // console.log(id);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/posts?userId=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // POST 
    // Add a new post
    RestProvider.prototype.createPost = function (post) {
        var _this = this;
        // console.log(post);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/posts', __assign({}, post))
                .subscribe(function (res) {
                console.log('Creating Post...');
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            }, function () {
                console.log('Post Created Successfully!');
            });
        });
    };
    // PUT
    // Edit a post
    RestProvider.prototype.editPost = function (id, post) {
        var _this = this;
        // console.log(id);
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/posts/' + id, __assign({}, post))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // DELETE
    // Delete a post
    RestProvider.prototype.deletePost = function (id) {
        var _this = this;
        // console.log('api deletePost arg: ' + id);
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/posts/' + id)
                .subscribe(function (post) {
                console.log('Deleting Post:', id);
            }, function (response) {
                console.log('ERROR', response);
            }, function () {
                console.log('Post Deleted Successfully!');
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Vendor } from "./vendor.model";
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({ providedIn: "root" })
export class VendorsService {
  private vendors: Vendor[] = [];
  //private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}


  /*getPosts() {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/posts")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
  getuserPosts(uid: string) {
    this.http
      .get<{ message: string; posts: any }>("http://localhost:3000/api/getdata/"+uid)
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
  
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ _id: string, title: string, content: string, imagePath: string }>(
      "http://localhost:3000/api/posts/" + id
    );
  }*/

  addPost(storeName: string,fname:string ,lname:string,address,contact,email:string,franchiseid:string,deliveryWindow:string,pickupWindow:string) {
    
    const vendorData:Vendor={vendorId:'123456',storeName:storeName,fname:fname,lname:lname,address:address,contact:contact,createdBy:franchiseid,deliveryWindow:deliveryWindow,pickupWindow:pickupWindow }
    console.log("Iam at add post",vendorData.storeName,vendorData.fname,vendorData.lname,vendorData.address,vendorData.contact,);
    this.http
      .post<{ message: string;vendor: Vendor }>(
        "http://localhost:3000/api/vendors",vendorData
      )
      .subscribe(responseData => {
        console.log(responseData.message);
        /*const vendor: Vendor = {
          vendorId: '12345678',
          storeName: storeName,
          fname: fname,
          lname: lname,
          address:address,
          contact:contact
        };
        this.vendors.push(vendor);
        //this.postsUpdated.next([...this.posts]);
        //this.router.navigate(["/list",post.content]);*/
      });
  }

  updatePost(id: string,storeName: string,fname:string ,lname:string,address,contact,email:string,franchiseid:string,deliveryWindow:string,pickupWindow:string) {
    let vendorData: Vendor | FormData;
    vendorData={vendorId:'123456',storeName:storeName,fname:fname,lname:lname,address:address,contact:contact,createdBy:franchiseid,deliveryWindow:deliveryWindow,pickupWindow:pickupWindow }
    this.http
      .put("http://localhost:3000/api/posts/" + id, vendorData)
      .subscribe(response => {
        /*const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        const post: Post = {
          id: id,
          title: title,
          content: content,
          imagePath: ""
        };
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);*/
        console.log(response);
        //this.router.navigate(["/list",post.content]);
      });
  }

  /*deletePost(postId: string) {
    this.http
      .delete("http://localhost:3000/api/posts/" + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }*/
}

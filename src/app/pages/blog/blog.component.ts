import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import 'firebase/firestore';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Observable<any[]>;
  selectedBlog : any;

  constructor(firestore: AngularFirestore) {
    this.blogs = firestore.collection('blogs').valueChanges();
    this.blogs.subscribe(res=>console.log(res));


    // let doc : AngularFirestoreCollection = firestore.collection('blogs', ref => ref.orderBy('date'));
    // console.log("doc is: "+doc);
    // let request = doc.get().subscribe(
    //   thedoc => {
    //   this.document = thedoc;
    //   console.log(this.document);
    //   console.log(this.document.getData())
    // });

  }

  ngOnInit(): void {
  }

  loadBlogs(): void {

  }

}

class Blog {
  title: string;
  author: string;
  date: Number;
  description: string;
}

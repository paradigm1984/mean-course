import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})

export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    let postTitle = form.value.title,
        postContent = form.value.content;

    this.checkValidation(postTitle, postContent);
    if(form.invalid) {
      return;
    }

   const post: Post = {
     title: form.value.title,
     content: form.value.content
   };
   this.postCreated.emit(post);
  }
  checkValidation(postTitle, postContent) {
    let titleBox = document.getElementById("title"),
        contentBox = document.getElementById("content");


    if(postTitle.length === 0) {
      titleBox.classList.add("error-border");
      contentBox.classList.remove("error-border");
    } else if(postContent.length === 0) {
      contentBox.classList.add("error-border");
      titleBox.classList.remove("error-border");
    } else {
      contentBox.classList.remove("error-border");
      titleBox.classList.remove("error-border");
    }
  }
}

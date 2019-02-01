import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    const postTitle = form.value.title,
        postContent = form.value.content;

    this.checkValidation(postTitle, postContent);
    if (form.invalid) {
      return;
    }
   this.postsService.addPost(form.value.title, form.value.content);
   form.resetForm();
  }

  checkValidation(postTitle, postContent) {
  const titleBox = document.getElementById('title'),
        contentBox = document.getElementById('content');

    contentBox.classList.remove('error-border');
    titleBox.classList.remove('error-border');
    if (postTitle.length === 0) {
      titleBox.classList.add('error-border');
    }
    if (postContent.length === 0) {
      contentBox.classList.add('error-border');
    }
  }
}

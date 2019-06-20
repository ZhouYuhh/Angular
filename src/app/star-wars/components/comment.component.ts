import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommentService } from "src/app/services/comment.service";
import { Comment } from "src/app/models/Comment";
import { SwapiService } from "src/app/services/swapi.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  category: string;
  id: string;
  item: any;
  comments: Comment[];
  @ViewChild("commentForm")
  commentForm: NgForm;

  constructor(
    private swapiService: SwapiService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params.category;
    this.id = this.activatedRoute.snapshot.params.id;
    this.swapiService
      .getItemDetail(this.category, this.id)
      .subscribe(result => {
        this.item = result;
      });
    this.commentService
      .getComments(this.category, this.id)
      .toArray()
      .then(result => (this.comments = result));
  }

  showName() {
    if (!this.item) {
      return "";
    }

    if (this.category === "films") {
      return this.item.title;
    }

    return this.item.name;
  }

  onSubmit() {
    const comment = {
      type: this.category,
      item_id: this.id,
      date: new Date(),
      text: this.commentForm.value.text,
      active: true
    };
    this.commentService.add(comment).then(index =>
      this.commentService
        .getComments(this.category, this.id)
        .toArray()
        .then(result => (this.comments = result))
    );
  }

  removeComment(comment: Comment) {
    this.commentService.inactiveComment(comment.id).then(index =>
      this.commentService
        .getComments(this.category, this.id)
        .toArray()
        .then(result => (this.comments = result))
    );
  }

}

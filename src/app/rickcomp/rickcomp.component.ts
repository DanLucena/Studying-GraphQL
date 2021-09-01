import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rickcomp',
  templateUrl: './rickcomp.component.html',
  styleUrls: ['./rickcomp.component.scss']
})
export class RickcompComponent implements OnInit {

  posts: any;
  private querySubscription!: Subscription;

  private GET_POST = gql`
    query{
      characters{
        results{
          name
          image
        }
      }
    }
  `;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: this.GET_POST
    })
      .valueChanges
      .subscribe(({ data }) => {
        this.posts = data.characters;
      });
  }

}

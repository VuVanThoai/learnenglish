import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-word-memoried',
  templateUrl: './word-memoried.component.html',
  styleUrls: ['./word-memoried.component.scss']
})
export class WordMemoriedComponent implements OnInit {

  users: any[] = [];
  urls = [
    'https://jsonplaceholder.typicode.com/comments?postId=1',
    'https://jsonplaceholder.typicode.com/comments?postId=2',
    'https://jsonplaceholder.typicode.com/comments?postId=3',
    'https://jsonplaceholder.typicode.com/comments?postId=4'
  ];

  constructor(
    private http: HttpClient
  ) {
    this.users = [
      {id: 1, name: 'HTM1'},
      {id: 2, name: 'HTM2'},
      {id: 3, name: 'HTM3'}
    ];
  }

  getUsers() {
    this.users = this.fetchUsers();
  }

  fetchUsers() {
    return [
      {id: 1, name: 'HTM1'},
      {id: 2, name: 'HTM2'},
      {id: 3, name: 'HTM3'},
      {id: 4, name: 'HTM4'},
      {id: 5, name: 'HTM5'},
    ];
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  ngOnInit(): void {
    from(this.urls).pipe(
      mergeMap(url => this.http.get(url))
    ).subscribe({
      next: value => {
        console.log(value);
      }
    });
  }

}

import {Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {mergeMap, throttleTime} from 'rxjs/operators';
import {CommonService} from '../../../core/service/common.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  search$ = new Subject<string>();
  keySearch = '';
  resultSearch: any[] = [];
  isShowResultSearch = false;
  selectedRow = 0;

  constructor(
    private eRef: ElementRef,
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.search$.asObservable().pipe(
      throttleTime(100),
      mergeMap(keySearch => this.http.get<[]>('https://607d7bdf184368001769dd6f.mockapi.io/api/articles/photos?title=' + keySearch))
    ).subscribe({
      next: value => {
        console.log(value);
        this.resultSearch = value;
      }
    });
  }

  search(keySearch: any) {
    console.log(keySearch.target.value);
    this.keySearch = keySearch.target.value;
    if (keySearch !== '') {
      this.search$.next(this.keySearch);
      this.isShowResultSearch = true;
    } else {
      this.resultSearch = [];
    }
  }

  arrowDown() {
    this.selectedRow++;
    console.log(this.selectedRow);
  }

  arrowUp() {
    this.selectedRow--;
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  @HostListener('document:click', ['$event'])
  closeResultSearch(event: any) {
    if (this.isShowResultSearch) {
      this.isShowResultSearch = false;
    }
  }
}

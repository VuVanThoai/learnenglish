import {Injectable, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() progressEvent = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }


  callApi(options: any) {

    const method = options.method;
    const url = options.url;
    const data = options.data;
    let progress = options.progress;
    if (progress === undefined) {
      progress = true;
    }
    if (progress) {
      // @ts-ignore
      this.progressEvent.emit(true);
    }

    let obs: Observable<any>;

    const httpOptions = {
      headers: this.buildHttpHeaders('application/json')
    };

    if (method === 'GET') {
      obs = this.http.get(url, httpOptions);
    } else if (method === 'POST') {
      obs = this.http.post(url, JSON.stringify(data), httpOptions);
    } else if (method === 'PUT') {
      obs = this.http.put(url, JSON.stringify(data), httpOptions);
    } else {
      obs = this.http.delete(url, httpOptions);
    }

    let timeoutSeconds = 90;
    if (options.timeoutSeconds) {
      timeoutSeconds = options.timeoutSeconds;
    }
    return obs.pipe(timeout(1000 * timeoutSeconds));
    // obs.pipe(timeout(1000 * timeoutSeconds)).subscribe(
    //   (successData) => {
    //     console.log('succeessData', successData);
    //     if (typeof options.success === 'function') {
    //       if (progress) {
    //         // @ts-ignore
    //         this.progressEvent.emit(false);
    //       }
    //       options.success(successData);
    //     }
    //   },
    //   (errorData) => {
    //     console.log(errorData);
    //     if (progress) {
    //       // @ts-ignore
    //       this.progressEvent.emit(false);
    //     }
    //     if (errorData.status === '504' || errorData.name === 'TimeoutError') {
    //       errorData.error = {
    //         errorMessage: {
    //           errorCode: 'ERROR_CODE',
    //           messages: {
    //             vn: 'mat ket noi',
    //             en: 'connect timeout'
    //           }
    //         }
    //       };
    //     }
    //   });
  }

  buildHttpHeaders(contentType: string) {
    return new HttpHeaders({
      'Content-Type':  contentType,
      'Access-Control-Allow-Origin': '*'
    });
  }

}

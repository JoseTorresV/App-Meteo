import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = '14d262b40789aaf61734579f07fded42';

  URI = '';


  uriMeteo = '';

  accesKey = '2698f0584b511956b1fd970df83dfbf05fd4843c48a95b3cd1da6b4fbcb7b1ec';

  endPnt = '';

  constructor( private http: HttpClient ) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

    // this.uriMeteo = `${this.endPoint}?query=`;
    this.uriMeteo = `https://api.unsplash.com/search/photos?query=`;

    this.endPnt = `&client_id=${this.accesKey}`;

   }

   getWeather(cityName: string, countryCode: string) {
     return this.http.get( `${this.URI}${cityName}, ${countryCode}` );
   }

   getImages(query: string) {
    return this.http.get( `${this.uriMeteo}${query}${this.endPnt}` );
  }

}


//  createImages(imagesList){

  // }

    //    getImages(query: string){
    //     let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    //     let jsonResponse = await response.json();
    //     let imagesList = await jsonResponse.results;
    //     createImages(imagesList);
    // }

    // function createImages(imagesList){
    //     for(let i = 0 ; i < imagesList.length ; i++ ) {
    //         const image = document.createElement('img');
    //         image.src = imagesList[i].urls.thumb;
    //         document.body.appendChild(image);
    //     }
    // }

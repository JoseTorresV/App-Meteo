import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  weather: any;

  imagQuery: any;

  constructor(private weatherService: DataService) { }

  ngOnInit() {
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
      },
      err => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {

    if (cityName.value && countryCode.value) {

      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';

    } else {
      alert('Please. Insert some values');
    }

    // cityName.focus();

    return false;
  }

  // IMAGES

    getImages(query: string) {

     this.weatherService.getImages(query)
     .subscribe(

      res => {
        console.log(res);
      },
      err => console.log(err)

     );

  }


  createImages() {
    
  } 


}


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


    // getImages(query: string) {
    //   const risp: any = this.http.get( `${this.uriMeteo}${query}${this.endPnt}` );
    //   const jsonResp = risp.json();
    //   const im
    // }

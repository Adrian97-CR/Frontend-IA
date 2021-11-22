import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private response: HttpClient) { }
  private _API_ROOT = 'http://localhost:5000/'

  avocadoPrice(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'avocadoPrice',dataQuery,{headers})
  }
  changeTp(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'changeTp',dataQuery,{headers})
  }
  vehiclePrice(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'vehiclePrice',dataQuery,{headers})
  }
  findIris(dataQuery:JSON){
    let headers = {};
    
    return this.response.post(this._API_ROOT+'findIris',dataQuery,{headers})
  }
  rossmannCompany(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'rossmannCompany',dataQuery,{headers})
  }
  bodyFat(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'bodyFat',dataQuery,{headers})
  }
  hepatitisType(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'hepatitisType',dataQuery,{headers})
  }
  cirrosisType(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'cirrosisType',dataQuery,{headers})
  }
  wineQuality(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'wineQuality',dataQuery,{headers})
  }
  homeRental(dataQuery:JSON){
    let headers = {};
    return this.response.post(this._API_ROOT+'homeRental',dataQuery,{headers})
  }

  onUpload(uploadData:FormData) {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //        'Content-Type': 'multipart/form-data'
  //     })
  //  };
    //let file = {'file': ('test.jpg', selectedFile, content_type)};
    return this.response.post(this._API_ROOT+'upload', uploadData)
  }

}

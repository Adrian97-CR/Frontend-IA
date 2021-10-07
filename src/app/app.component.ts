import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './services/data.service';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IAFront';
  ModalTitle = ''
  id = '';
  result = '';
  showResult = false;
  public sample: FormGroup;
  public formConfig = [];
  irisForm = ["largo del sépalo","Ancho del sépalo","Largo del pétalo","Ancho del pétalo"];
  housesForm = ["Habitantes en vivienda","Colegios por localidad", "Porcentaje de estado inferior de la población"];
  wineForm = ["Tipo","Acidez fija","Acidez volátil","Acido cítrico","Azúcar residual","Cloruros",
    "Dióxido de azufre libre", "Dióxido de azufre total", "Densidad", "pH", "Sulfatos", "Alcohol"
];
  cirrForm = ["Colesterol","Albúmina","Cobre","Alk_Phos", "SGOT", "Triglicéridos", "Plaquetas", "Protrombina", "Escenario"];
  hepForm = ["Edad","Sexo","ALB","ALP", "ALT", "AST", "BIL", "CHE", "CHOL", "CREA", "GGT", "PROT"];
  fatForm = ["Densidad", "Peso"];
  rossForm = ["Clientes", "Vacaciones escolares", "Abierta"];
  vehicleForm = ["Precio actual"];
  telephForm = ["Ciudadano mayor", "Socio, tenencia", "Servicio telefónico", "Múltiples líneas", "Servicio de Internet",
     "Seguridad en línea", "Respaldo en línea", "Protección de dispositivos", "Soporte técnico"];
  avocadoForm = ["4046", "Volumen total"];
  constructor(private dataService:DataService, public speech: SpeechService,
    private fb: FormBuilder) { 
    this.speech.init();
    this.sample = this.fb.group({
      orders: new FormArray([])
    });
  }

  startService(id:number): void {
    console.log(id)
    this.speech.text = '';
    this.speech.start().then((data:any)=>{
      (this.sample.controls.orders as FormArray).at(id).patchValue(data.txt);
    });
    this.speech.error = false;
  }

  createForm(form: any, id:string, name:string) {
    this.showResult = false;
    this.sample = this.fb.group({
      orders: new FormArray([])
    });
    this.formConfig = form;
    this.formConfig.forEach((o, i) => {
      const control = new FormControl(''); 
      (this.sample.controls.orders as FormArray).push(control);
    });
    this.id = id;
    this.ModalTitle = name;
    document.getElementById('modalBTT')?.click();
  }

  //parseInt()
  //parseFloat()
  send(){
      let dataq: any[] = [];
      this.sample.get('orders')!.value.forEach((element:any) => {
        dataq.push(element)
      });
      switch (this.id) {
        case "avocado":{
          let dataQ = JSON.parse(JSON.stringify({d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1])}));
          if(true){
            this.dataService.avocadoPrice(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
            })
          }
          break;
        }
        case "teleph":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2]), d4: parseFloat(dataq[3]),
            d5: parseFloat(dataq[4]), d6: parseFloat(dataq[5]), d7: parseFloat(dataq[6]), d8: parseFloat(dataq[7]), d9: parseFloat(dataq[8]),
            d10: parseFloat(dataq[9])}));
          if(true){
            this.dataService.changeTp(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "vehicle":{
          let dataQ = JSON.parse(JSON.stringify({d1: parseFloat(dataq[0])}));
          if(true){
            this.dataService.vehiclePrice(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "iris":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]),d3: parseFloat(dataq[2]),d4: parseFloat(dataq[3])}));
          if(true){
            this.dataService.findIris(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "ross":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2])}));
          if(true){
            this.dataService.rossmannCompany(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "fat":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]) }));
          if(true){
            this.dataService.bodyFat(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "hep":{
          let dataQ = JSON.parse(JSON.stringify({  d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2]), d4: parseFloat(dataq[3]),
            d5: parseFloat(dataq[4]), d6: parseFloat(dataq[5]), d7: parseFloat(dataq[6]), d8: parseFloat(dataq[7]), d9: parseFloat(dataq[8]),
            d10: parseFloat(dataq[9]), d11: parseFloat(dataq[10]), d12: parseFloat(dataq[11]) }));
          if(true){
            this.dataService.hepatitisType(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "cirr":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2]), d4: parseFloat(dataq[3]),
            d5: parseFloat(dataq[4]), d6: parseFloat(dataq[5]), d7: parseFloat(dataq[6]), d8: parseFloat(dataq[7]), d9: parseFloat(dataq[8])}));
          if(true){
            this.dataService.cirrosisType(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "wine":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2]), d4: parseFloat(dataq[3]),
            d5: parseFloat(dataq[4]), d6: parseFloat(dataq[5]), d7: parseFloat(dataq[6]), d8: parseFloat(dataq[7]), d9: parseFloat(dataq[8]),
            d10: parseFloat(dataq[9]), d11: parseFloat(dataq[10]), d12: parseFloat(dataq[11])}));
          if(true){
            this.dataService.wineQuality(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
        case "houses":{
          let dataQ = JSON.parse(JSON.stringify({ d1: parseFloat(dataq[0]), d2: parseFloat(dataq[1]), d3: parseFloat(dataq[2])}));
          if(true){
            this.dataService.homeRental(dataQ).subscribe((data:any)=>{
              this.result = data.response;
              this.showResult = true;
              console.log(this.result);
            })
          }
          break;
        }
      
        default:
          break;
      }
    }
  
}

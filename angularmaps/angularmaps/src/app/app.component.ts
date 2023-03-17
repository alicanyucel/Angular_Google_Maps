import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularmaps Ali Can Yücel';
  zoom: number = 14; // yakınlaştırır
locations=[
 { lat:40.0493036,lng:32.8935028},{
  lat:40.0493036,lng:32.8935028},
  {lat:40.0493036,lng:32.8935028},
  {lat:40.0405646,lng:32.9116131}
]
    // kooridnat verir
  mapclick(event:any){
    console.log(event)
  }
  // marker click işaretçiye tıkladığımızda ne olacaksa onu belirliyoruz
  markerClick(event:any){
   console.log(event);
  }
  //kooridnat verir ve yakınlaştırır
  mapdoubleclick(event:any){
    const obj={
      lat:event.coords.lat,
      lng:event.coords.lng,
    };
  this.locations.push(obj);
  }
  // opacity:saydamlık veriyoruz
  // disabledoubleclikzoom:çift tıklarsam yakınlaştırma true yada false değer alır
  //  [mapDraggable]="false" haritayı sürüklemeye yarar false surukleme yapmaz tru surukleme yapar default true değer
  //markerlara icon,parlaklık,gorunurluk,title,isaretleme verebiliriz
  // [markerDraggable]="true"  işaretçiyi sürükleme taşıma
}

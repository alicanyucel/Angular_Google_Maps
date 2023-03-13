import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularmaps Ali Can Yücel';
  zoom: number = 14; // yakınlaştırır
  // initial center position for the map
  lat: number = 40.0430556 // enlem bilgisi
  lng: number = 32.88663614; // boylam bilgisi
  lat2: number = 40.0424659 // enlem bilgisi
  lng2: number = 32.907433; // boylam bilgisi
  icon={ //ikonun boyutunu da yarlayabiliyoruz
    url:'https://upload.wikimedia.org/wikipedia/tr/8/85/Apple_Hesap_makinesi_Calculator-icon.png',
    scaledSize:{widht:50,height:60}
  }
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
    console.log(event)
  }
  // opacity:saydamlık veriyoruz
  // disabledoubleclikzoom:çift tıklarsam yakınlaştırma true yada false değer alır
  //  [mapDraggable]="false" haritayı sürüklemeye yarar false surukleme yapmaz tru surukleme yapar default true değer
  //markerlara icon,parlaklık,gorunurluk,title,isaretleme verebiliriz
  // [markerDraggable]="true"  işaretçiyi sürükleme taşıma
}

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
@NgModule({
 
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCf1cCO8spsop4q8K7UNPQZ4gKzBpRsJJU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

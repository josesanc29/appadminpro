// Modulos
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
// import { GaficoDonutComponent } from './components/gafico-donut/gafico-donut.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    // GaficoDonutComponent
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

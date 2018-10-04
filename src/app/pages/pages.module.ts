//Modulos
import { NgModule ,  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from "../shared/shared.module";
// Componentes
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GaficoDonutComponent } from "../components/gafico-donut/gafico-donut.component";

// Rutas
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GaficoDonutComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    FormsModule,
    ChartsModule,
    PAGES_ROUTES
  ]
})

export class PagesModule { }

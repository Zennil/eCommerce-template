import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NuevoPedidoComponent } from './modules/nuevo-pedido/nuevo-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosService } from './services/productos.service';
import { SliderService } from './services/sliders.service';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { CrearComponent } from './crear/crear.component';
import { CrearPedidoComponent } from './nuevo-pedido/crear-pedido.component';
import { PedidosService } from './services/pedidos.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-pedido', component: NuevoPedidoComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'crear-pedido', component: CrearPedidoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NuevoPedidoComponent,
    CrearComponent,
    CrearPedidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbTabsetModule,
    NgbCollapseModule
  ],
  providers: [
    ProductosService,
    PedidosService,
    SliderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

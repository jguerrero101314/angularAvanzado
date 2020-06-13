import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { HeaderComponent } from './share/header/header.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './share/breadcrumbs/breadcrumbs.component';
import { RegisterComponent } from './login/register.component';

// Paginas modulos
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

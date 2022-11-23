import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulo Creado actualmente
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

//Modulo Personalizado
import { VentasModule } from './ventas/ventas.module';


// Cambiar el locale de la app, con hacer esto, ya tengo registrado el Español
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeJa);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

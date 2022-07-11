import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterWithProvider, AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailsComponent,
		HeaderComponent,
		FooterComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		AppRouting,
		HttpClientModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
	],
	providers: [
		AppRouterWithProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

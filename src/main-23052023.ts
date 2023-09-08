import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideProtractorTestingSupport, bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';

import routeConfig from './app/routes';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(), 
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));
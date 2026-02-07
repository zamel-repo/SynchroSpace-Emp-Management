import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/confg/app.component';
import { appConfig } from './app/confg/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

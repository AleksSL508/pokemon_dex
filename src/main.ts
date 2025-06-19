import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideIonicAngular(),
  ],
}); import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { addIcons } from 'ionicons';
import { heart, heartOutline, arrowBack, arrowForward } from 'ionicons/icons';

if (environment.production) {
  enableProdMode();
}

addIcons({
  'heart': heart,
  'heart-outline': heartOutline,
  'arrow-next': arrowForward,
  'arrow-previus': arrowBack,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
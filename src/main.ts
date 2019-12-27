import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop'}).catch(err => console.error(err));
};

if (typeof (window as any).cordova !== 'undefined') {
  document.addEventListener('deviceready', () => {
    bootstrap();
  }, false);
} else {
  bootstrap();
}


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import getStream from 'get-stream';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


window.setTimeout(async () => {


  const { body: readableStream } = await fetch('http://localhost:4200');
  if (!readableStream) {
    throw new Error('Failed to fetch');
  }
  console.log(await getStream(readableStream));
}, 0);
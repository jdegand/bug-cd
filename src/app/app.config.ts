import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BarComponent } from './bar.component';
import { FooComponent } from './foo.component';
import { MainNavigationComponent } from './main-navigation.component';

// I reordered the routes
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'foo',
        component: FooComponent,
      },
      {
        path: 'bar',
        component: BarComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'foo',
      },
      {
        path: '',
        component: MainNavigationComponent,
        outlet: 'side',
      },
    ]),
  ],
};

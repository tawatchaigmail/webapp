import { Component } from '@angular/core';
//import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { CompanyComponent } from './components/company/companyComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // standalone: true,  
/*
  imports: [
           HomeComponent,
           RouterModule,
           CompanyComponent,
           ],
*/
/*
  template: `
    <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <!--img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"-->
        <img
            class="brand-logo"
            width="20"
            alt="Angular Logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
        />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
   </main>
`
*/
/*
`
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
*/
  styleUrls: ['./app.component.scss']
},

)


export class AppComponent {
  title = 'webapp';
}

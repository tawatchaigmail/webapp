import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../service/housing.service';
import { HousingLocation } from '../../models/housinglocation';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
//  standalone: true,
//  imports: [CommonModule],
  imports: [
           CommonModule,
           ReactiveFormsModule
  ],

/*
  template: `
    <p>
      details works!
    </p>
  `,
*/
 //  template: `<p>details works! {{ housingLocationId }}</p>`,

/*
template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
`,

*/

templateUrl: `./detail.component.html`,
  styles: [
  ]
})

/*

export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }
}

*/

export class DetailsComponent {

//  route: ActivatedRoute = inject(ActivatedRoute);
//  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
});

/*
constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
*/

constructor(private route: ActivatedRoute , private housingService : HousingService ) {
  const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
  this.housingLocation = housingLocation;
  });
}

submitApplication() {
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}

}
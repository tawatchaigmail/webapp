@Component({
     selector: 'app-movies',
     template : '
               <input
                 type ="text"
                 [(ngModel)] = "studio"
                 [disable]="store.loading()"
                 placeholder="name of studio"
               >
               <ul>
                @for (movie of store.moives(); track movie.id) {
                   <p>{{movie.id}} : {{movie.name}}</p>
                }
               </ul>
     ',
     imports : [FormModule]
})

 export class MociceCOmposnt {
     protected studio = studio('');
     proteted readonly store = inject(moviessStore);

     consstructoe () {
       this.store.load(this.studio)
     }
 }
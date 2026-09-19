const userRoutes: Routes = [
  {
    path:'users',
    component:UserCenterComponent,
    children:[
      {
        path: '',
        component: UserListComponent,
        children:[
          {
            path:':id',
            component:UserDetailComponent,
            resolve: {
              user: UserDetailResolverService
            }            
          }
        ] // end children
      }
    ] // end children
  }
];

change path to 


const userRoutes: Routes = [
  {
    path:'users',redirectTo:'members'
  },
  {
    path:'members',
    component:UserCenterComponent,
    children:[
      {
        path: '',
        component: UserListComponent,
        children:[
          {
            path:':id',
            component:UserDetailComponent,
            resolve: {
              user: UserDetailResolverService
            }            
          }
        ] // end children
      }
    ] // end children
  }
];
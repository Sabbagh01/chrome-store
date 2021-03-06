import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Themes} from './Navigation/designer-linen-layout.component';
import { HomeLayoutComponent } from './Navigation/home-layout.component';
import { SignIn } from './Navigation/signin';
import { Recommended } from './Navigation/recommended';
import { Photos } from './Navigation/photos';
import { Fun } from './Navigation/fun';
import { Accessibility } from './Navigation/accessibility';
import { AddProductComponent } from './store/add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: 'auth', component: AuthenticationComponent},
  { 
    path: 'themes', 
    component: Themes
  },
  {
    path: 'home',
    component: HomeLayoutComponent
  },
  {
    path: 'signin',
    component: SignIn
  },
  {
    path: 'recommended',
    component: Recommended
  },
  {
    path: 'photos',
    component: Photos
  },
  {
    path: 'fun',
    component: Fun
  },
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'accessibility',
    component: Accessibility
  },
  {
    path: 'admin',
    component: AddProductComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

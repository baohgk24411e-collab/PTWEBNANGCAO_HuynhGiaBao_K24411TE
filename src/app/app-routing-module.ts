import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { Exercise13Component } from './exercise13/exercise13';
import { Exercise14Component } from './exercise14/exercise14';
import { Exercise18Component } from './exercise18/exercise18';

const routes: Routes = [
  { path: 'binding-property-component', component: BindingPropertyComponent },
  { path: 'binding-class-component', component: BindingClassComponent },
  { path: 'binding-style-component', component: BindingStyleComponent },
  { path: 'binding-event-component', component: BindingEventComponent },
  { path: 'binding-two-way-component', component: BindingTwoWayComponent },
  { path: 'product-list-component', component: ProductListComponent },
  { path: 'product-dropdown-list-component', component: ProductDropdownListComponent },
  { path: 'product-list-call-service-component', component: ProductListCallServiceComponent },
  { path: 'product-list-call-http-service-component', component: ProductListCallHttpServiceComponent },
  { path: 'product-http-handle-error-service-component', component: ProductHttpHandleErrorServiceComponent },

  // Exercise 13
  { path: 'exercise13', component: Exercise13Component },
  { path: 'excercise13', component: Exercise13Component },
  { path: 'exercise13/:id', component: Exercise13Component },

  // Exercise 14
  { path: 'exercise14', component: Exercise14Component },
  { path: 'excercise14', component: Exercise14Component },

  // Exercise 18
  { path: 'exercise18', component: Exercise18Component },
  { path: 'excercise18', component: Exercise18Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

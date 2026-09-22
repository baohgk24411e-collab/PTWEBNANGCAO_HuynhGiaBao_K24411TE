import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent} from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

const routes: Routes = [
  {path: 'binding-property-component', component: BindingPropertyComponent},
  {path: 'binding-class-component', component: BindingClassComponent},
  {path: 'binding-style-component', component: BindingStyleComponent},
  {path: 'binding-event-component', component: BindingEventComponent},
  {path: 'binding-two-way-component', component: BindingTwoWayComponent},
  {path: 'product-list-component', component: ProductListComponent},
  {path: 'product-dropdown-list-component', component: ProductDropdownListComponent},
  {path: 'product-list-call-service-component', component: ProductListCallServiceComponent},
  


  // Cơ chế slug, search engine optimze tối ưu cơ chế bộ máy đường truyền
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

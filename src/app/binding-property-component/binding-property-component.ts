import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string = 'Huỳnh Gia Bảo'
  public email: string = 'baohgk24411e@st.uel.edu.vn'
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=false
  public hello:string="Welcome to K24411E"
  public red_color: string="red"
  public advanced_message: string = '<font color="blue">This is advanced message</font>'
}

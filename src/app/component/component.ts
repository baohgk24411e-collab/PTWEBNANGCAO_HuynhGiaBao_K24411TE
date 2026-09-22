import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  styleUrls: ['./component.css'],
  templateUrl: './component.html',
})
export class ContactComponent {
  sayHello() {
    alert('Hello from ContactComponent!');
  }
  sayHello2(mydiv: HTMLDivElement) {
    mydiv.innerHTML = 'Huỳnh Gia Bảo';
  }
}

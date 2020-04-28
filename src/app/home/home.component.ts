import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 title = 'Landing Page';
  noms: String[]=[];
  productId=1;

   constructor(private router: Router) {}

  Onclickville() {
  this.router.navigate(['/products'])

  console.log("OnclickVille ")
  }

  Ajouter(Nouvnom: string) {
    if (Nouvnom) {
      this.noms.push(Nouvnom);
    }
  }

}

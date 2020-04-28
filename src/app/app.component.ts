import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DateBase';
  noms: String[]=[];
  productId="Merci";

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

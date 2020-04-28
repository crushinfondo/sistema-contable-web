import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.product = params.get('name');
  });
  }

}

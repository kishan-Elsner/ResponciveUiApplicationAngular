import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodData:any;
  constructor(private service:OrderService) { }

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}

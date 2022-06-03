import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pizzaSub: Subscription

  constructor(public pizzaService: PizzaService) {
    console.log("Entrou");
  }
  
  ngOnInit(): void {

  this.pizzaSub = this.pizzaService.getPizzaList().subscribe()
  }

}

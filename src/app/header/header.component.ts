import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numPedidos = 0;

  constructor(private pedidosService: PedidosService) {
    this.pedidosService.getPedidos().subscribe((resultado: Pedido[]) => {
      this.numPedidos = resultado.length;
    });
  }

  ngOnInit() {
  }

}

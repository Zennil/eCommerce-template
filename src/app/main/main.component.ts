import { Component, OnInit } from '@angular/core';
import { Slider } from '../models/slider';
import { SliderService } from '../services/sliders.service';

class Articulo {
  nombre: String;
  imagen: String;
  oldPrecio: number;
  precio: number;
  stars: String[];
}

class ForClientes {
  nombre: string;
  articulos: Articulo[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sliderOfertasVet: Slider[] = [];
  sliderOfertasAgr: Slider[] = [];
  sliderOfertasAcs: Slider[] = [];

  sliderOfertas: Slider[];
  arrarForClientes: ForClientes[] = [];
  arrayForBuyAgain: ForClientes[] = [];

  constructor(private sliderService: SliderService) {

    this.sliderOfertasVet = this.sliderService.getSlidOfertasByCateg('vet');
    this.sliderOfertasAgr = this.sliderService.getSlidOfertasByCateg('agr');
    this.sliderOfertasAcs = this.sliderService.getSlidOfertasByCateg('acs');

    this.sliderOfertas = this.sliderService.getSlidOfertasByCateg('vet');
  }

  ngOnInit() {
    this.arrarForClientes = this.getArrayForClientes();
    this.arrayForBuyAgain = this.getArrayForBuyAgain();
  }

  newArticulo(nombre: String, imagen: String, oldPrecio: number, precio: number, strars: number): Articulo {
    const starsString: String[] = [];
    for (let i = 0; i < strars; i++) {
      starsString.push('fa fa-star');
    }
    const articulo: Articulo = {
      nombre: nombre,
      imagen: imagen,
      oldPrecio: oldPrecio,
      precio: precio,
      stars: starsString
    };
    return articulo;
  }

  getArrayForClientes(): ForClientes[] {
    const array: ForClientes[] = [
      {
        nombre: 'Uno',
        articulos: [
          this.newArticulo('Estado de cuenta', 'assets/img/picture.png', 109.00, 99, 4),
          this.newArticulo('Rastreo de pedidos', 'assets/img/picture.png', 599.00, 569.00, 4),
          this.newArticulo('Nuevo pedido', 'assets/img/picture.png', 1099.00, 869.00, 4),
          this.newArticulo('Registra tus pagos', 'assets/img/picture.png', 289.00, 269.00, 5),
        ]
      }
    ];
    return array;
  }


  getArrayForBuyAgain(): ForClientes[] {
    const array: ForClientes[] = [
      {
        nombre: 'Cinco',
        articulos: [
          this.newArticulo('Producto #1', 'assets/img/pictures.png', 109.00, 99, 4),
          this.newArticulo('Producto #2', 'assets/img/pictures.png', 599.00, 569.00, 4),
          this.newArticulo('Producto #3', 'assets/img/pictures.png', 1099.00, 869.00, 4),
          this.newArticulo('Producto #4', 'assets/img/pictures.png', 289.00, 269.00, 5),
          this.newArticulo('Producto #5', 'assets/img/pictures.png', 109.00, 99, 4),
          this.newArticulo('Producto #6', 'assets/img/pictures.png', 599.00, 569.00, 4),
          this.newArticulo('Producto #7', 'assets/img/pictures.png', 1099.00, 869.00, 4),
          this.newArticulo('Producto #8', 'assets/img/pictures.png', 289.00, 269.00, 5),
          this.newArticulo('Producto #9', 'assets/img/pictures.png', 1099.00, 869.00, 4),
          this.newArticulo('Producto #10', 'assets/img/pictures.png', 289.00, 269.00, 5)
        ]
      }
    ];
    return array;
  }

}

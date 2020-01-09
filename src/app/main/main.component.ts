import { Component, OnInit } from '@angular/core';

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

  arrayForClientes: ForClientes[] = [];

  constructor() { }

  ngOnInit() {
    this.arrayForClientes = [
      {
        nombre: 'Uno',
        articulos: [
          this.newArticulo('Estado de cuenta', 'src/assets/img/img-background.jpg', 109.00, 99, 4),
          this.newArticulo('Rastreo de pedidos', 'src/assets/img/img-background.jpg', 599.00, 569.00, 4),
          this.newArticulo('Realiza nuevo pedido', 'src/assets/img/img-background.jpg', 1099.00, 869.00, 4),
          this.newArticulo('Registra tus pagos', 'src/assets/img/img-background.jpg', 289.00, 269.00, 5)
        ]
      },
      {
        nombre: 'Dos',
        articulos: [
          this.newArticulo('Oferta #1', 'src/assets/img/img-background2.jpg', 109.00, 99, 4),
          this.newArticulo('Oferta #2', 'src/assets/img/img-background2.jpg', 599.00, 569.00, 4),
          this.newArticulo('Oferta #3', 'src/assets/img/img-background2.jpg', 1099.00, 869.00, 4)
          // this.newArticulo('Oferta #4', 'src/assets/img/img-background2.jpg', 289.00, 269.00, 5)
        ]
      },
      {
        nombre: 'Tres',
        articulos: [
          this.newArticulo('Apple Watch', 'src/assets/img/img-background3.jpg', 369.00, 349.00, 4),
          this.newArticulo('Canon DSLR', 'src/assets/img/img-background3.jpg', 315.00, 250.00, 4),
          this.newArticulo('Google Pixel', 'src/assets/img/img-background3.jpg', 450.00, 418.00, 3),
          this.newArticulo('Apple iPhone', 'src/assets/img/img-background3.jpg', 350.00, 330.00, 4)
        ]
      },
      {
        nombre: 'Cuatro',
        articulos: [
          this.newArticulo('Nikon DSLR', 'src/assets/img/img-background4.png', 400.00, 369.00, 4),
          this.newArticulo('Sony Headphone', 'src/assets/img/img-background4.png', 25.00, 23.99, 4),
          this.newArticulo('Macbook Air', 'src/assets/img/img-background4.png', 899.00, 649.00, 4),
          this.newArticulo('Apple iPad', 'src/assets/img/img-background4.png', 315.00, 250.00, 3),
          this.newArticulo('Xiaomi MI9', 'src/assets/img/img-background4.png', 260.00, 250.00, 3)
        ]
      }
    ];
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

}

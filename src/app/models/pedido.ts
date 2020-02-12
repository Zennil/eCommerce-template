import { Producto } from './producto';

export class Pedido {
    id: number;
    idUsuario: number;
    idProducto?: number;
    producto?: Producto = new Producto();
    cantidad: number;
}

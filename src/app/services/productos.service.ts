import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    constructor(private afDB: AngularFireDatabase) { }

    getProductos() {
        return this.afDB.list('productos/').valueChanges();
    }
    getProductoById(idProducto: string) {
        return this.afDB.object('productos/' + idProducto).valueChanges();
    }

    saveProducto(producto: Producto) {
        producto.id = Date.now();
        this.afDB.database.ref('productos/' + producto.id).set(producto);
    }
}

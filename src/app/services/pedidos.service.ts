import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pedido } from '../models/pedido';

@Injectable({
    providedIn: 'root'
})
export class PedidosService {

    constructor(private afDB: AngularFireDatabase) { }

    getPedidos() {
        return this.afDB.list('pedidos/').valueChanges();
    }

    savePedido(pedido: Pedido) {
        pedido.id = Date.now();
        this.afDB.database.ref('pedidos/' + pedido.id).set(pedido);
    }

    deletePedido(pedido: Pedido) {
        this.afDB.database.ref('pedidos/' + pedido.id).remove();
    }

}

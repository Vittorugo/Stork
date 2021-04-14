import api from '../services/api';


export function retornaTodosPedidos(){
   return api.get("/pedidos");
}

export function cadastroPedido(pedido){
   return api.post("/pedidos/cadastro", pedido);
}

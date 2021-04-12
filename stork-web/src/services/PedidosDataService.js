import api from '../services/api';


export default function retornaTodosPedidos(){
   return api.get("/home");
}



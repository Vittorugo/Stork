import retornaTodosPedidos from '../../services/PedidosDataService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
   Card, CardHeader, CardBody,CardImg,
   Row,
   Col,
   FormGroup, Input
} from 'reactstrap';

export default function CardPedido() {

   const [pedido, setPedido] = useState([]);

   useEffect(() => {
      retornaTodosPedidos().then((response) => {
         setPedido(response.data)
      }).catch(() => {
         toast.warning('Erro ao listar produtos')
      });
   }, []);

   return (

      <>
         {pedido.map(pedido =>
            <Card >
               <CardHeader>{pedido.nomeProdutos}</CardHeader>
               <CardBody>
                  <Row xs="2">
                     <Col className="col-8">
                        <Row >
                           <Col>
                              <span>{`Valor: ${pedido.valorNegociado}`}</span>
                           </Col>
                           <Col>
                              <span>{`Data de Entrega: ${pedido.dataEntrega}`}</span>
                           </Col>
                        </Row>
                        <label>Produto</label>
                        <FormGroup>
                           <Input type="textarea" name="text" value={pedido.urlProduto} />
                        </FormGroup>
                        <label>Descrição</label>
                        <FormGroup>
                           <Input type="textarea" name="text" value={pedido.descricao} />
                        </FormGroup>
                     </Col>
                     <Col className="col-4">
                        <CardImg src={pedido.urlImagem} alt="Card image cap" />
                     </Col>
                  </Row>
               </CardBody>
            </Card>
         )}
      </>
   )
}
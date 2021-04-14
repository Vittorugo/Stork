import styles from '../../../styles/Home.module.css'
import { Container, Form, FormGroup, Jumbotron, Label, FormFeedback, Input, Button } from 'reactstrap';
import { cadastroPedido } from '../../services/PedidosDataService';
import { useState } from 'react';


export default function CadastroPage() {

   function handleSubmit(e) {

      e.preventDefault();

      const novoPedido = {
         nomeProduto: e.currentTarget.nomeProduto.value,
         urlProduto:  e.currentTarget.urlProduto.value,
         urlImagem:  e.currentTarget.urlImagem.value,
         dataEntrega:  e.currentTarget.dataEntrega.value,
         descricao:  e.currentTarget.descricao.value
      }
      console.log(novoPedido);
      cadastroPedido(novoPedido)
      .then( response => {
         console.log("Enviado");
      })
   }

   return (

      <div className={styles.container}>
         <Container>
            <Jumbotron>
               <h1 className="display-3"> Novo Pedido </h1>
               <hr></hr>
            </Jumbotron>
            <Form onSubmit={handleSubmit} action="/pedidos/cadastro" method="post">
               <FormGroup>
                  <Label>Nome: </Label>
                  <Input name="nomeProduto" placeholder="Digite o nome do produto" />
                  <FormFeedback valid>Good! 😊</FormFeedback>
                  <Label>URL Produto: </Label>
                  <Input name="urlProduto" placeholder="URL do Produto" />
                  <FormFeedback valid>Good! 😊</FormFeedback>
                  <Label>Data de Entrega: </Label>
                  <Input
                     type="date"
                     name="dataEntrega"
                     placeholder="dd-mm-yyyy"
                  />
                  <Label>URL Imagem: </Label>
                  <Input name="urlImagem" placeholder="URL de uma imagem do produto" />
                  <Label>Descrição: </Label>
                  <Input name="descricao" type="textarea" placeholder="Descreva o produto desejado" />
               </FormGroup>
               <br />          
               <Button type="submit">Cadastrar</Button>
            </Form>
         </Container>
      </div>
   )
}
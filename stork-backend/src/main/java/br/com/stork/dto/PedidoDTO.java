package br.com.stork.dto;

import br.com.stork.model.Pedido;

import java.time.LocalDate;

public class PedidoDTO {

    private String nomeProduto;
    private String dataEntrega;
    private String urlProduto;
    private String urlImagem;
    private String descricao;

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getDataEntrega() {
        return dataEntrega;
    }

    public void setDataEntrega(String dataEntrega) {
        this.dataEntrega = dataEntrega;
    }

    public String getUrlProduto() {
        return urlProduto;
    }

    public void setUrlProduto(String urlProduto) {
        this.urlProduto = urlProduto;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Pedido toPedido() {
        Pedido pedido = new Pedido();
        pedido.setNomeProdutos(nomeProduto);
        pedido.setDescricao(descricao);
        pedido.setUrlImagem(urlImagem);
        pedido.setDataEntrega(LocalDate.parse(dataEntrega));
        pedido.setUrlProduto(urlProduto);
        return pedido;
    }
}

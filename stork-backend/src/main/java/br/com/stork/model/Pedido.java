package br.com.stork.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nomeProdutos;
    private BigDecimal valorNegociado;
    private LocalDate dataEntrega;
    private String urlProduto;
    private String descricao;
    private String urlImagem;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeProdutos() {
        return nomeProdutos;
    }

    public void setNomeProdutos(String nomeProdutos) {
        this.nomeProdutos = nomeProdutos;
    }

    public BigDecimal getValorNegociado() {
        return valorNegociado;
    }

    public void setValorNegociado(BigDecimal valorNegociado) {
        this.valorNegociado = valorNegociado;
    }

    public LocalDate getDataEntrega() {
        return dataEntrega;
    }

    public void setDataEntrega(LocalDate dataEntrega) {
        this.dataEntrega = dataEntrega;
    }

    public String getUrlProduto() {
        return urlProduto;
    }

    public void setUrlProduto(String urlProduto) {
        this.urlProduto = urlProduto;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "id=" + id +
                ", nomeProdutos='" + nomeProdutos + '\'' +
                ", valorNegociado=" + valorNegociado +
                ", descricao='" + descricao + '\'' +
                '}';
    }
}

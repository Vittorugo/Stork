package br.com.stork.controller;

import br.com.stork.repository.PedidoRepository;
import org.springframework.stereotype.Controller;

@Controller
public class PedidoController {

    private final PedidoRepository repository;

    public PedidoController(PedidoRepository repository) {
        this.repository = repository;
    }

    public void listaPedidos(){
        repository.findAll();
    }
}

package br.com.stork.controller;

import br.com.stork.dto.PedidoDTO;
import br.com.stork.model.Pedido;
import br.com.stork.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@CrossOrigin(origins={"http://localhost:3000"})
@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @GetMapping
    public List<Pedido> litarPedidos(){
        return pedidoRepository.findAll();
    }

    @PostMapping("/cadastro")
    public ResponseEntity<Pedido> cadastrar(@RequestBody @Valid PedidoDTO pedidoDTO){
        Pedido novoPedido = pedidoDTO.toPedido();
        pedidoRepository.save(novoPedido);
        return ResponseEntity.ok().body(novoPedido);
    }
}

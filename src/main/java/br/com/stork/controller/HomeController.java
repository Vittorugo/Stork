package br.com.stork.controller;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.stork.model.Pedido;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(Model model){
        
    	Pedido pedido = new Pedido();
        pedido.setNomeProdutos("Kindle");
        pedido.setDataEntrega(LocalDate.now());
        pedido.setUrlProduto("https://www.amazon.com.br/Kindle-10a-gera%C3%A7%C3%A3o-ilumina%C3%A7%C3%A3o-embutida/dp/B07FQK1TS9/ref=asc_df_B07FQK1TS9/?tag=googleshopp00-20&linkCode=df0&hvadid=432951822456&hvpos=&hvnetw=g&hvrand=9849367096549664972&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-901759904091&psc=1");
        pedido.setUrlImagem("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuk_Uj5-517HWenUShsFd8eBc2EX-MRMiZ2Vw2cwP1lsoFB4JXAQQouYk6-aVzF7jt57Nnug&usqp=CAc");
    	pedido.setDescricao("Kindle 2021");
    	
    	List<Pedido> pedidos =  Arrays.asList(pedido);
    	model.addAttribute("pedidos",pedidos);
    	
    	return "home";
    }

}

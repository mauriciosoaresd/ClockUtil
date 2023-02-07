package br.com.exerciciosjava.springboot.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
	
	@GetMapping()
	public String home(Model model) {
		String titlePage = "Clock";
		String titleH1 = "What time is it?";
	
		model.addAttribute("titlePage", titlePage);
		model.addAttribute("titleH1", titleH1);
		return "home";
	}	

}

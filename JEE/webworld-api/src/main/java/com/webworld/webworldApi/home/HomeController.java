package com.webworld.webworldApi.home;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@RequestMapping("/hello")
	public String welcome() {
		return "Hi Welcome to the site Test";
	}

}

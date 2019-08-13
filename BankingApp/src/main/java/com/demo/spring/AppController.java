package com.demo.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.spring.entity.Customers;
import com.demo.spring.entity.LoginData;

@RestController
public class AppController{
	
	
	@Autowired
	private LoginDataRepo ldr;
	
	@Autowired
	private CustomerRepo cRepo;
	
	@GetMapping(path = "/homepage")
	public ModelAndView getHomePage(Model model) {
		ModelAndView mv = new ModelAndView();
		LoginData ld = new LoginData();
		model.addAttribute("authenticate", ld);
		mv.setViewName("homepage");
		return mv;
	}
	@PostMapping(path = "/homepage")
	public ModelAndView processHomePage(@ModelAttribute("authenticate") LoginData ld) {
		ModelAndView mv = new ModelAndView();
		ld.setType("Customer");
		//ldr.save(ld);
		int isAuthentic = ldr.authenticate(ld.getId(), ld.getPassword(), ld.getType());	
		if(isAuthentic!=0)
			mv.setViewName("redirect:customerhomepage");
		else
			mv.setViewName("redirect:homepage");
		return mv;
	}
	
	
	
	@GetMapping(path = "/userlogin")
	public ModelAndView getUserLoginPage(Model model) {
		ModelAndView mv = new ModelAndView();
		LoginData ld=new LoginData();
		model.addAttribute("authenticate", ld);
		mv.setViewName("userlogin");
		return mv;
	}
	@PostMapping(path = "/userlogin")
	public ModelAndView processUserLogin(@ModelAttribute("authenticate") LoginData ld) {
		ModelAndView mv = new ModelAndView();
		ld.setType("User");
		int isAuthentic = ldr.authenticate(ld.getId(), ld.getPassword(), ld.getType());	
		if(isAuthentic!=0)
			mv.setViewName("redirect:userhomepage");
		else
			mv.setViewName("redirect:userlogin");
		return mv;
	}
	
	
	
	@GetMapping(path = "/createaccount")
	public ModelAndView getCreateAccountPage(Model model) {
		ModelAndView mv = new ModelAndView();
		Customers cs = new Customers();
		model.addAttribute("create", cs);
		mv.setViewName("createaccount");
		return mv;
	}
	@PostMapping(path = "/createaccount")
	public ModelAndView processCreateAccount(@ModelAttribute("create") Customers cs) {
		ModelAndView mv = new ModelAndView();
		cRepo.save(cs);
		mv.setViewName("redirect:setpassword");
		return mv;
	}
	

	@GetMapping(path = "/customerhomepage")
	public ModelAndView getCustomerHomePage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("customerhomepage");
		return mv;
	}
	
	@GetMapping(path = "/userhomepage")
	public ModelAndView getUserHomePage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("userhomepage");
		return mv;
	}
	
	
	@GetMapping(path = "/transferfunds")
	public ModelAndView getTransferFundsPage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("transferfunds");
		return mv;
	}
	@PostMapping(path = "/transferfunds")
	public ModelAndView processTransferFunds(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("redirect:success");
		return mv;
	}
	
	@GetMapping(path = "/viewstatement")
	public ModelAndView getViewStatementPage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("viewstatement");
		return mv;
	}
	
	@GetMapping(path = "/setpassword")
	public ModelAndView getSetPasswordPage(Model model) {
		ModelAndView mv = new ModelAndView();
		LoginData ld= new LoginData();
		model.addAttribute("setpass", ld);
		mv.setViewName("setpassword");
		return mv;
	}
	
	@PostMapping(path = "/setpassword")
	public ModelAndView processSetPassword(@ModelAttribute("setpass") LoginData ld) {
		System.out.println("post setpass");
		ModelAndView mv = new ModelAndView();
		ld.setType("Customer");
		ldr.save(ld);
		mv.setViewName("redirect:success");
		return mv;
	}
	
	
	@GetMapping(path = "/success")
	public ModelAndView getSuccessPage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("success");
		return mv;
	}
}

package com.demo.spring;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.spring.entity.Accounts;
import com.demo.spring.entity.Customers;
import com.demo.spring.entity.LoginData;
import com.demo.spring.entity.Transactions;

@RestController
public class AppController{
	
	private int currentId;
	

	
	@Autowired
	private LoginDataRepo ldr;
	
	@Autowired
	private TransactionRepo tRepo;
	
	@Autowired
	private CustomerRepo cRepo;
	
	@Autowired
	private AccountsRepo aRepo;
	
	private Customers loggedIn = new Customers();
	
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
		{
			loggedIn = cRepo.getLoggedInCustomerObject(ld.getId());
			//System.out.println("========="+loggedIn.getCid());
			mv.setViewName("redirect:customerhomepage");
		}
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
		currentId=cs.getCid();
		//System.out.println(currentId);
		Accounts accs = new Accounts();
		accs.setBalance(5000);
		accs.setCid(currentId);
		accs.setType("Savings");
		//aRepo.save(accs);
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
		Transactions t = new Transactions();
		mv.addObject("transact", t);
		mv.setViewName("transferfunds");
		return mv;
	}
	@PostMapping(path = "/transferfunds")
	public ModelAndView processTransferFunds(@ModelAttribute("transact") Transactions trs) {
		ModelAndView mv = new ModelAndView();
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		LocalDateTime now = LocalDateTime.now();  
		
		double custBalance = aRepo.getCurrBalance(loggedIn.getCid());
		
		if(trs.getAmount() <= custBalance) {
			System.out.println("if");

			trs.setDate(dtf.format(now));
			trs.setFromacc();
			tRepo.save(trs);
			aRepo.deductAmount(trs.getAmount(), loggedIn.getCid());
			aRepo.addAmount(trs.getAmount(), trs.getToacc());
			mv.setViewName("redirect:success");

			
		}
		else
		{
			//System.out.println("else");
			//out.println("sdaf");
			mv.setViewName("transferFunds");
		}
		
		
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
		ld.setId(currentId);
		ld.setType("Customer");
		ldr.save(ld);
		mv.setViewName("redirect:success");
		return mv;
	}
	
	@GetMapping(path = "/createbankaccount")
	public ModelAndView getBankAccPage(Model model) {
		ModelAndView mv = new ModelAndView();
//		int currId = loggedIn.getCid();
//		model.addAttribute("cid", currId);

		mv.setViewName("createbankaccount");
		return mv;
	}
	@PostMapping(path = "/createbankaccount")
	public ModelAndView processBankAccount(@ModelAttribute("bankAcc") Accounts accs) {
		ModelAndView mv = new ModelAndView();
		currentId=loggedIn.getCid();
		accs.setCid(currentId);
		aRepo.save(accs);
		return mv;
	}
	
	
	
	@GetMapping(path = "/success")
	public ModelAndView getSuccessPage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("success");
		return mv;
	}
}

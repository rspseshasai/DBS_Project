package com.demo.spring;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.spring.entity.Accounts;
import com.demo.spring.entity.AccountsCount;
import com.demo.spring.entity.Customers;
import com.demo.spring.entity.LoginData;
import com.demo.spring.entity.TempRegister;
import com.demo.spring.entity.Transactions;

@RestController
@CrossOrigin()
public class AppController{
		
	@Autowired
	private LoginDataRepo ldRepo;
	
	@Autowired
	private TempRegisterRepo trRepo;
	
	@Autowired
	private CustomerRepo cRepo;
	
	@Autowired
	private AccountsRepo aRepo;
	
	@Autowired
	private AccountsCountRepo acRepo;
	
	@Autowired
	private TransactionRepo tRepo;
		
	
	@PostMapping(path = "/homepage", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LoginData> processHomePage(@RequestBody LoginData ld) {
	int cur_id = ldRepo.getCurrId(ld.getUserName()); 
	System.out.println("in hp ");
	if(ldRepo.existsById(cur_id))
	{
		return ResponseEntity.ok(ld);
	}
		
	return ResponseEntity.ok(null);
	}
	
	
	@PostMapping(path = "/createtempaccount", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<TempRegister> processCreateTempAccount(@RequestBody TempRegister tr) {
		trRepo.save(tr);
		return ResponseEntity.ok(tr);
	}
	
	
	@PostMapping(path = "/customerlogin", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LoginData> processCustomerLogin(@RequestBody LoginData ld) {
  //System.out.println(ld.getUserName());
  //System.out.println(ld.getPassword());
	int isExists = ldRepo.doesExists(ld.getUserName());
	if(isExists == 0)
		return ResponseEntity.status(404).build();  
	
	
    int cur_id = ldRepo.getUserId(ld.getUserName(),ld.getPassword());
    //System.out.println(cur_id);
    if(ldRepo.getUserId(ld.getUserName(),ld.getPassword())==0)
        return ResponseEntity.status(404).build();
    if(ldRepo.existsById(cur_id))
    {
    	if(!(ldRepo.getUserType(cur_id).equals("Customer")))
	           return ResponseEntity.status(404).build();
    	//System.out.println("in if");
        ld.setId(cur_id);
        ld.setUserType(ldRepo.getUserType(cur_id));
        if(ld == null)
        	return ResponseEntity.status(404).build();
        
       // System.out.println("hii   "+ld.getId());
        
        return ResponseEntity.ok(ld);
    }
    else {
    	//System.out.println("in else");
        return ResponseEntity.status(404).build();    
    }
}
	@PostMapping(path = "/createaccount", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Accounts> processCreateAccount(@RequestBody Accounts accs) {
	
		System.out.println("in acrete acc");

		int isExists = aRepo.doesExists(accs.getCustomerId());
		
		if(isExists != 0)
		{
		 int globalAccNo = acRepo.getAccountsCount();		 
		 accs.setAccountNo("STSIND"+globalAccNo);
		 globalAccNo++;
		 acRepo.updateAccountsCount(globalAccNo);
		 accs.setBalance(5000);
		 aRepo.save(accs);
		 return ResponseEntity.ok(accs);
		}
		else
		{
			System.out.println("No cust");
			 return ResponseEntity.status(404).build();  
		}
	}

	
	@PostMapping(path = "/transferfunds", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Transactions> processtransferFunds(@RequestBody Transactions t) {
		
		
		//System.out.println("In Spring Transfer Funds");
		
		
		int isExists = aRepo.isToAccExists(t.getToAccount());
		
		if(isExists != 0) {
			SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
		    Date date = new Date();  
		    
			t.setTransactionDate(formatter.format(date));
			tRepo.save(t);
			
			aRepo.deductAmount(t.getFromAccount(), t.getTransactionAmount());
			aRepo.addAmount(t.getToAccount(), t.getTransactionAmount());
			
			return ResponseEntity.ok(t);
		}
		else
		{
			 return ResponseEntity.status(404).build();  

		}
	}
	
	
	
	@GetMapping(path = "/getaccountslist/{customerId}", produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<List <Accounts>> processGetAccountList(@PathVariable("customerId") int accNo) {
		
		System.out.println("in get accounts list");
		ArrayList<Accounts> accountsList=new ArrayList<Accounts>();
		
		accountsList = aRepo.getAccountsList(accNo);
		
		
		return ResponseEntity.ok(accountsList);
	}
	
	
	@GetMapping(path = "/getCustomerObj/{custId}", produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Customers> processGetCustObj(@PathVariable("custId") int custId) {
		
		Customers custObj = new Customers();
		if(cRepo.existsById(custId))
		{
			custObj = cRepo.getCustomerObj(custId);
			return ResponseEntity.ok(custObj);
		}
		else
		{
			return ResponseEntity.status(404).build();
		}
			
	}
	
	@GetMapping(path = "/getLoginObj/{custId}", produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<LoginData> processGetLoginDataObj(@PathVariable("custId") int custId) {
		
		LoginData ld = new LoginData();
		ld = ldRepo.getLoginDataObj(custId);
		
		System.out.println(ld);
		
		return ResponseEntity.ok(ld);
	}
	
	@GetMapping(path = "/removeaccount/{accNo}", produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<String> processRemoveAccount(@PathVariable("accNo") String accNo) {
		//System.out.println("In remove");
		
		if(aRepo.existsById(accNo))
		{
			aRepo.removeAccount(accNo);
			return ResponseEntity.ok("ok");
		}
		else
		{
			return ResponseEntity.status(404).build();
		}
	}
	
	@GetMapping(path = "/recenttransactions/{accNo}", produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity< List <Transactions> > processRecentTransactions(@PathVariable("accNo") String accNo) {
		ArrayList<Transactions> recentTransactions=new ArrayList<Transactions>();
		
		recentTransactions = tRepo.getRecentTransactions(accNo);

		
		 for (Transactions object : recentTransactions) {
	           
	           System.out.println(object.getFromAccount());
	         }

		return ResponseEntity.ok(recentTransactions);
	}
	
	
	
	@PostMapping(path = "/transactionsinrange", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity< List <Transactions> > processTransactionsInRange(@RequestBody ArrayList<String> range ) {
		
		ArrayList<Transactions> transactionsinrange=new ArrayList<Transactions>();
		
		transactionsinrange = tRepo.getTransactionsInRange(range.get(0), range.get(1), range.get(2));

		for (Transactions object : transactionsinrange) {
	           
	           System.out.println(object.getFromAccount());
	         }
		
		return ResponseEntity.ok(transactionsinrange);
	}
	
	//======================================================
	
	@PostMapping(path = "/userlogin", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
	   public ResponseEntity<LoginData> processUserLoginPage(@RequestBody LoginData ld) {
	   System.out.println(ld.getUserName());
	   System.out.println(ld.getPassword()+"pass");
	   int cur_id = ldRepo.getUserId(ld.getUserName(),ld.getPassword());
	   System.out.println(cur_id);
	   if(ldRepo.getUserId(ld.getUserName(),ld.getPassword())==0)
	       return ResponseEntity.status(404).build();
	   if(ldRepo.existsById(cur_id))
	   {
	       //System.out.println("Logged In");
	       if(!(ldRepo.getUserType(cur_id).equals("User")))
	           return ResponseEntity.status(404).build();
	       System.out.println("in if");
	       ld.setId(cur_id);
	       ld.setUserType(ldRepo.getUserType(cur_id));
	       if(ld == null)
	           return ResponseEntity.status(404).build();
	       return ResponseEntity.ok(ld);
	   }
	   else {
	       System.out.println("in else");
	       //ldRepo.save(ld);
	   return ResponseEntity.status(404).build();
	   }
	}
	    
	@PostMapping(path = "/customerlogin/update/personal", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customers> updatePersonalDetails(@RequestBody Customers c) {

        cRepo.save(c);
        return ResponseEntity.ok(c);
    }
     
     @PostMapping(path = "/customerlogin/update/login", produces= {MediaType.APPLICATION_JSON_VALUE}, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LoginData> updateLoginDetails(@RequestBody LoginData ld) {
         
     
     System.out.println(ld.getId());
     String type=ldRepo.getUserType(ld.getId());
     ld.setUserType(type);
    
     ldRepo.save(ld);
        return ResponseEntity.ok(ld);
    }
	    
	    @GetMapping(path = "/userlogin/requests", produces = {
	            MediaType.APPLICATION_JSON_VALUE })
	    public ResponseEntity<List<TempRegister>> pendingRequests() {
	        
	        List<TempRegister> ltr=trRepo.findAll();
	        System.out.println(ltr.get(0));
	        return ResponseEntity.ok(ltr);
	    }
	    
	    @PostMapping(path = "/userlogin/requests/accept", produces = {
	            MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<TempRegister> acceptPendingRequests(@RequestBody TempRegister tr) {
	    	System.out.println("hi there");
	        System.out.println(tr.getCustomerName());
	        System.out.println(tr.getEmail());
	    	int customerId = trRepo.getCurrCustomerId(tr.getCustomerName(), tr.getEmail());
	    	System.out.println(customerId+"hjsgfas");
	    	Customers customer = new Customers();
			LoginData logindata = new LoginData();
			
//			customer.setcustomerId(tr.getCustomerId());
			customer.setcustomerId(customerId);
			customer.setAddress(tr.getAddress());
			customer.setCustomerName(tr.getCustomerName());
			customer.setEmail(tr.getEmail());
			customer.setMobile(tr.getMobile());
			
			
			
			logindata.setId(customerId);
			logindata.setUserName(tr.getUserName());
			logindata.setPassword(tr.getPassword());
			logindata.setUserType("Customer");
			
			Accounts account = new Accounts();
			
			int globalAccNo = acRepo.getAccountsCount();
			
			System.out.println("ddd "+globalAccNo);
			
			account.setAccountNo("STSIND"+globalAccNo);
			
			AccountsCount ac = new AccountsCount();
			globalAccNo++;
			
			acRepo.updateAccountsCount(globalAccNo);
			
			
			account.setAccountType("savings");
			account.setBalance(5000);
			account.setCustomerId(customerId);
			//account.setAccountNo("STSIND"+globalAccNo);
			
			
			cRepo.save(customer);
			ldRepo.save(logindata);
			aRepo.save(account);
	        trRepo.delete(tr);
	        return ResponseEntity.ok(tr);
	    }
	    
	    @PostMapping(path = "/userlogin/requests/reject", produces = {
	            MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<TempRegister> rejectPendingRequests(@RequestBody TempRegister tr) {
	        trRepo.delete(tr);
	        return ResponseEntity.ok(tr);
	    }
	//========================================================
	
	
	@GetMapping(path = "/success")
	public ModelAndView getSuccessPage(Model model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("success");
		return mv;
	}
}

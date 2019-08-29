package com.demo.spring;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="TRANSACTIONREPORTS")
public class TransactionReports {
    @Id
private int transactionId;
    
    private String fromAccount;
    
    private String toAccount;
    
    private double transactionAmount;
    
    private String transactionDate;
    
    private boolean flag;
    
    public TransactionReports() {}
    public int getTransactionId() {
        return transactionId;
    }
    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }
    public String getFromAccount() {
        return fromAccount;
    }
    public void setFromAccount(String fromAccount) {
        this.fromAccount = fromAccount;
    }
    public String getToAccount() {
        return toAccount;
    }
    public void setToAccount(String toAccount) {
        this.toAccount = toAccount;
    }
    public double getTransactionAmount() {
        return transactionAmount;
    }
    public void setTransactionAmount(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }
    public String getTransactionDate() {
        return transactionDate;
    }
    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }
    public boolean isFlag() {
        return flag;
    }
    public void setFlag(boolean flag) {
        this.flag = flag;
    }
    public TransactionReports(int transactionId, String fromAccount, String toAccount, double transactionAmount,
            String transactionDate, boolean flag) {
        this.transactionId = transactionId;
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.transactionAmount = transactionAmount;
        this.transactionDate = transactionDate;
        this.flag = flag;
    }
    
    
}
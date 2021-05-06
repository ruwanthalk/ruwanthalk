/**
 * Created by Ruwantha.Lankathilak on 11/27/2017.
 */

public with sharing class AccountHandler {

    public static Account insertNewAccount(String nameString){
        Account account;
        try {

            account = new Account(Name = nameString);
            insert account;
        }catch (DmlException ex){
            account = null;
        }
        return account;
    }

}
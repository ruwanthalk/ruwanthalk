/**
 * Created by Ruwantha.Lankathilak on 2/22/2019.
 */

@RestResource(urlMapping='/MyWebService/*')
global with sharing class MyTest {

    @HttpGet
    global static List<Account> getAccount(){
        return [SELECT Id,Name FROM Account LIMIT 10];
    }

    @HttpPost
    global static Map<String,String> postAccount(Payload load){

        return new Map<String,String>{'Status'=>'True'};
    }


    global class Payload{
        public String api_url {get;set;}
        public Config conf {get;set;}

    }

    global class Config{
        public String action {get;set;}
        public String endpoint_url {get;set;}
        public String user_id {get;set;}
        public String webhook_id {get;set;}
    }
}
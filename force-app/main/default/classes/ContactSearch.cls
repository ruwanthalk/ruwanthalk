/**
 * Created by Ruwantha.Lankathilak on 11/27/2017.
 */

public with sharing class ContactSearch {

    public static List<Contact> searchForContacts(String name,String postalCode){

        String likeName = name + '%';
        List<Contact> contacts = [SELECT Name FROM Contact WHERE LastName = :name AND MailingPostalCode = :postalCode];

        return contacts;
    }
}
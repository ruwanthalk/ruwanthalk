/**
 * Created by Ruwantha.Lankathilak on 7/18/2017.
 */
({

    packItem : function(Component,event,helper){

        var item = {Name:'Test',Price__c:100,Quantity__c:10,Packed__c:false}
        var btn = event.getSource();
        btn.set('v.disabled',true);
        item.Packed__c = true;
        Component.set("v.item",item);
    },
})
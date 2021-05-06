({
    // Load items from Salesforce
    doInit: function(component, event, helper)
    {

        // Create the action
        var action = component.get("c.getItems");

        // Add callback behavior for when response is received
        action.setCallback(this, function(response)
                           {
                               var state = response.getState();
                               if (component.isValid() && state === "SUCCESS")
                               {
                                   component.set("v.items", response.getReturnValue());
                               }
                               else
                               {
                                   console.log("Failed with state: " + state);
                               }
                           });

        // Send action off to be executed

        $A.enqueueAction(action);

    },

    createCampingList : function(component, event, helper) {
        console.log("entered in the createCampingList js method");

        if(helper.validateCampingListForm(component))
        {
            console.log("entered the conditional to create the item");
            // Create the new item
            var newCampingItem = component.get("v.newItem");
            component.set("v.newItem", "{'sobjectType':'Camping_Item__c','Name':'',Quantity__c': 0,'Price__c': 0}");
            helper.createItem(component, newCampingItem);
        }
    }
})
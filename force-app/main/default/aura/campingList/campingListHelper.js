({
    getItemsJs : function (component, event)
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

    createItem : function (component, newItemToSave)
    {
        console.log("entered the createItem helper method");
        var action = component.get("c.saveItem");
        console.log("created the helper action");

        action.setParams({
            "newSaveItem": newItemToSave
        });

        console.log("before the helper callback");
        action.setCallback(this, function(response)
                           {
                               var state = response.getState();
                               console.log("entered the helper callback");

                               if (component.isValid() && state === "SUCCESS") {
                                   console.log("ok helper");
                                   var items = component.get("v.items");
                                   items.push(response.getReturnValue());
                                   component.set("v.items", items);
                                   console.log("ok helper2");
                               }
                           });
        console.log("before helper enqueue");
        $A.enqueueAction(action);
        console.log("after helper enqueue");
    },
    validateCampingListForm: function(component)
    {
        console.log("entered in the validation method");
        var isCampingValid = true;
        var nameField = component.find("campingName");
        var quantityField = component.find("quantity");
        var priceField = component.find("price");

        if(nameField.get("v.value") == '' )
        {
            nameField.set("v.errors",[{message:"name can't be blank"}]);
            isCampingValid = false;
        }
        else
        {
            console.log("name  validated");
            nameField.set("v.errors",null);
        }

        if( quantityField.get("v.value") == '' )
        {
            quantityField.set("v.errors",[{message:"Quantity can't be blank"}]);
            isCampingValid = false;
        }
        else
        {
            console.log("quantity validated");
            quantityField.set("v.errors",null);
        }

        if(priceField.get("v.value") == '')
        {

            priceField.set("v.errors",[{message:"Price can't be blank"}]);
            isCampingValid = false;
        }
        else
        {
            console.log("price  validated");
            priceField.set("v.errors",null);
        }

        return(isCampingValid);
    }
})
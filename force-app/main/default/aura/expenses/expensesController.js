/**
 * Created by Ruwantha.Lankathilak on 7/19/2017.
 */
//({
//    clickCreateExpense :function(Component, event,helper){
//
//        var validExpense = true;
//
//        var nameField = Component.find('expname');
//        var nameValue = nameField.get('v.value');
//
//        if($A.util.isEmpty(nameValue)){
//            validExpense = false;
//            nameField.set('v.errors',[{message:'Expense cannot be blank'}]);
//        }else{
//            nameField.set('v.errors', null);
//        }
//
//        if(validExpense){
//            var newExpense = Component.get('v.newExpense');
//
////            console.log('Create Expense ' + JSON.stringify(newExpense));
//
//            helper.createExpense(Component,newExpense);
//        }
//
//    },
//})

({
    clickCreateExpense: function(component, event, helper) {

        if(helper.validateExpenseForm(component)){
            var newExpense = component.get('v.newExpense');
             helper.createExpense(component, newExpense);

//            var action = component.get('c.saveExpense');
//            action.setParams({"expense":newExpense});
//
//            action.setCallback(this,function(response){
//                var state = response.getState();
//                console.log('state : ' + response.getState());
//
//                if(state == 'SUCCESS' && component.isValid()){
//                    var expenses = component.get('v.expenses');
//                    expenses.push(response.getReturnValue());
//                    component.set('v.expenses',expenses);
//
//                }else{
//                    alert(JSON.stringify(response));
//                }
//
//            });
//            $A.enqueueAction(action);
        }


    },
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {

        // Create the action
        var action = component.get('c.getExpenses');
//
//        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
    }
})
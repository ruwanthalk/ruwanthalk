/**
 * Created by Ruwantha.Lankathilak on 7/20/2017.
 */
//({
//    createExpense : function(component,expense){
//
//        var theExpenses = component.get('v.expenses');
//        console.log('sssssssss ' + theExpenses)
//
//        var newExpense = JSON.parse(JSON.stringify(expense));
//        console.log("Expenses before 'create': " + JSON.stringify(expense));
//
////        //theExpenses.push(newExpense);
//        component.set("v.expenses", theExpenses);
////        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
//    }
//})
({
    createExpense: function(component, expense) {
        console.log('expenseexpense' + JSON.stringify(expense))
        var action = component.get('c.saveExpense');
        action.setParam({
            'expense':$A.util.json.encode(expense)
        })
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS' && component.isValid()){
                var expenses = component.get('v.expenses');
                expenses.push(response.getReturnValue());
                component.set('v.expenses',expenses);

            }else{
                alert(JSON.stringify(response));
            }

        });
        $A.enqueueAction(action);

        var theExpenses = component.get("v.expenses");
        console.log('sssssssss ' + theExpenses)
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newExpense = JSON.parse(JSON.stringify(expense));
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
    },
    validateExpenseForm: function(component) {

        // Simplistic error checking
        var validExpense = true;

        // Name must not be blank
        var nameField = component.find("expname");
        var expname = nameField.get("v.value");
        if ($A.util.isEmpty(expname)){
            validExpense = false;
            nameField.set("v.errors", [{message:"Expense name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }

        // Amount must be set, must be a positive number
        var amtField = component.find("amount");
        var amt = amtField.get("v.value");
        if ($A.util.isEmpty(amt) || isNaN(amt) || (amt <= 0.0)){
            validExpense = false;
            amtField.set("v.errors", [{message:"Enter an expense amount."}]);
        }
        else {
            // If the amount looks good, unset any errors...
            amtField.set("v.errors", null);
        }

        return(validExpense);
    },
})
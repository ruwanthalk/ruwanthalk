// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ExpensesController.getExpenses" {
    export default function getExpenses(): Promise<Expense__c[]>;
}

declare module "@salesforce/apex/ExpensesController.saveExpense" {
    export default function saveExpense(params: {expense: Expense__c}): Promise<Expense__c>;
}
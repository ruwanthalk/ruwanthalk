// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/CampingListController.getItems" {
    export default function getItems(): Promise<Camping_Item__c[]>;
}

declare module "@salesforce/apex/CampingListController.saveItem" {
    export default function saveItem(params: {item: Camping_Item__c}): Promise<Camping_Item__c>;
}
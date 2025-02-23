// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItemChangeEvent extends SObject 
{
    AvailableQuantity?: number;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    EndDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ListPrice?: number;
    Order?: Order;
    OrderId?: string;
    OrderItemNumber?: string;
    OriginalOrderItem?: OrderItem;
    OriginalOrderItemId?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    QuoteLineItem?: QuoteLineItem;
    QuoteLineItemId?: string;
    ReplayId?: string;
    ServiceDate?: Date;
    UnitPrice?: number;
}
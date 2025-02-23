// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuoteLineItemChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Discount?: number;
    HasQuantitySchedule?: boolean;
    HasRevenueSchedule?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LineNumber?: string;
    OpportunityLineItem?: OpportunityLineItem;
    OpportunityLineItemId?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    Quote?: Quote;
    QuoteId?: string;
    ReplayId?: string;
    ServiceDate?: Date;
    SortOrder?: number;
    UnitPrice?: number;
}
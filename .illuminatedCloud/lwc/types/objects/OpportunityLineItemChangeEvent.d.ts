// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityLineItemChangeEvent extends SObject 
{
    CanUseRevenueSchedule?: boolean;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Discount?: number;
    HasQuantitySchedule?: boolean;
    HasRevenueSchedule?: boolean;
    HasSchedule?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ListPrice?: number;
    Name?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    ProductCode?: string;
    Quantity?: number;
    ReplayId?: string;
    ServiceDate?: Date;
    SortOrder?: number;
    Subtotal?: number;
    TotalPrice?: number;
    UnitPrice?: number;
}
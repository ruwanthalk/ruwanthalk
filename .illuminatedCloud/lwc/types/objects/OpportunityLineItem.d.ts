// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityLineItem extends SObject 
{
    CanUseRevenueSchedule?: boolean;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Discount?: number;
    HasQuantitySchedule?: boolean;
    HasRevenueSchedule?: boolean;
    HasSchedule?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    ListPrice?: number;
    Name?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    OpportunityLineItem?: QuoteLineItem;
    OpportunityLineItemSchedules?: OpportunityLineItemSchedule[];
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    ProductCode?: string;
    Quantity?: number;
    RelatedRecord?: FlowRecordRelation;
    ServiceDate?: Date;
    SortOrder?: number;
    Subtotal?: number;
    SystemModstamp?: string;
    TotalPrice?: number;
    UnitPrice?: number;
}
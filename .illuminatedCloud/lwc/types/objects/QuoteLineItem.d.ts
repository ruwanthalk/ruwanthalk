// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuoteLineItem extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Discount?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    HasQuantitySchedule?: boolean;
    HasRevenueSchedule?: boolean;
    HasSchedule?: boolean;
    Histories?: QuoteLineItemHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LineNumber?: string;
    ListPrice?: number;
    OpportunityLineItem?: OpportunityLineItem;
    OpportunityLineItemId?: string;
    OrderItems?: OrderItem[];
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    Quote?: Quote;
    QuoteId?: string;
    QuoteLineItem?: OrderItemChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    ServiceDate?: Date;
    SortOrder?: number;
    Subtotal?: number;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalPrice?: number;
    UnitPrice?: number;
}
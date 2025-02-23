// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricebookEntry extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Histories?: PricebookEntryHistory[];
    IsActive?: boolean;
    IsArchived?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OpportunityLineItems?: OpportunityLineItem[];
    OrderItems?: OrderItem[];
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    PricebookEntry?: OpportunityLineItemChangeEvent;
    Product2?: Product2;
    Product2Id?: string;
    ProductCode?: string;
    QuoteLineItems?: QuoteLineItem[];
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    UnitPrice?: number;
    UseStandardPrice?: boolean;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Pricebook2 extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    Contracts?: Contract[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Histories?: Pricebook2History[];
    IsActive?: boolean;
    IsArchived?: boolean;
    IsDeleted?: boolean;
    IsStandard?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Opportunities?: Opportunity[];
    Orders?: Order[];
    Pricebook2?: ContractChangeEvent;
    PricebookEntries?: PricebookEntry[];
    Quotes?: Quote[];
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
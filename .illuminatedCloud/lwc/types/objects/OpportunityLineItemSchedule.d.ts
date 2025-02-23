// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityLineItemSchedule extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OpportunityLineItem?: OpportunityLineItem;
    OpportunityLineItemId?: string;
    Quantity?: number;
    RelatedRecord?: FlowRecordRelation;
    Revenue?: number;
    ScheduleDate?: Date;
    SystemModstamp?: string;
    Type?: string;
}
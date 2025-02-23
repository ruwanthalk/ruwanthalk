// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityRelatedDeleteLog extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    DeleteLog?: string;
    FieldName?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    Parent?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Value?: any;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpressionFilterCriteria extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExpressionFilter?: ExpressionFilter;
    ExpressionFilterId?: string;
    FilterTarget?: string;
    FilterTargetValue?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Operation?: string;
    RelatedRecord?: FlowRecordRelation;
    SortOrder?: number;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
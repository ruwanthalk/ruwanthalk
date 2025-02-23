// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateRecordSet extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DuplicateRecordItems?: DuplicateRecordItem[];
    DuplicateRule?: DuplicateRule;
    DuplicateRuleId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RecordCount?: number;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
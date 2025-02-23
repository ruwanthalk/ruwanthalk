// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateRecordItem extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DuplicateRecordSet?: DuplicateRecordSet;
    DuplicateRecordSetId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Record?: SObject;
    RecordId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
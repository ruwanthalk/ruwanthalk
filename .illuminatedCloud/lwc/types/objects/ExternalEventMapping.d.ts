// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalEventMapping extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EndDate?: Date;
    Event?: Event;
    EventId?: string;
    ExternalId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    IsRecurring?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: ExternalEventMappingShare[];
    StartDate?: Date;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
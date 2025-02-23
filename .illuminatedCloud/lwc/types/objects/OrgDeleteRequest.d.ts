// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrgDeleteRequest extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    RequestType?: string;
    Shares?: OrgDeleteRequestShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
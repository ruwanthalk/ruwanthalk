// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserLocalWebServerIdentity extends SObject 
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
    LocalWebServerIdentityToken?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: UserLocalWebServerIdentityShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
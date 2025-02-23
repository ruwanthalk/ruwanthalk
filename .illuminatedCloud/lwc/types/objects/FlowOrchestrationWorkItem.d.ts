// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationWorkItem extends SObject 
{
    Assignee?: SObject;
    AssigneeId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    ScreenFlow?: string;
    ScreenFlowInputs?: string;
    Shares?: FlowOrchestrationWorkItemShare[];
    Status?: string;
    StepInstance?: FlowOrchestrationStepInstance;
    StepInstanceId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    WorkItem?: AgentWork;
}
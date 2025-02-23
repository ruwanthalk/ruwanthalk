// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PromptError extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    IsError?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PromptAction?: PromptAction;
    PromptActionId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: PromptErrorShare[];
    StepNumber?: number;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
}
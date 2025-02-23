// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationInstance extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrentStage?: string;
    Duration?: number;
    FlowOrchestrationLogs?: FlowOrchestrationLog[];
    FlowOrchestrationStageInstances?: FlowOrchestrationStageInstance[];
    FlowOrchestrationStepInstances?: FlowOrchestrationStepInstance[];
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Interview?: FlowInterview;
    InterviewId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OrchestrationDeveloperName?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: FlowOrchestrationInstanceShare[];
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TriggeringRecord?: string;
}
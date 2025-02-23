// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationLog extends SObject 
{
    Actor?: string;
    Assignee?: string;
    AssigneeType?: string;
    Comments?: string;
    Context?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Duration?: number;
    IsDeleted?: boolean;
    Kind?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OrchestrationInstance?: FlowOrchestrationInstance;
    OrchestrationInstanceId?: string;
    OrchestrationName?: string;
    OrchestrationVersion?: number;
    RelatedRecord?: FlowRecordRelation;
    StageName?: string;
    StepName?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Timestamp?: string;
}
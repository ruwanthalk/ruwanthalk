// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationStageInstance extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationStepInstances?: FlowOrchestrationStepInstance[];
    IsDeleted?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OrchestrationInstance?: FlowOrchestrationInstance;
    OrchestrationInstanceId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Position?: number;
    RelatedRecord?: FlowRecordRelation;
    Shares?: FlowOrchestrationStageInstanceShare[];
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PendingServiceRouting extends SObject 
{
    CapacityPercentage?: number;
    CapacityWeight?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomRequestedDateTime?: string;
    DropAdditionalSkillsTimeout?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Group?: Group;
    GroupId?: string;
    IsDeleted?: boolean;
    IsInterruptible?: boolean;
    IsPreferredUserRequired?: boolean;
    IsPushAttempted?: boolean;
    IsPushed?: boolean;
    IsReadyForRouting?: boolean;
    IsTransfer?: boolean;
    LastDeclinedAgentSession?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    PausedCapacityPercentage?: number;
    PausedCapacityWeight?: number;
    PendingServiceRouting?: AgentWork;
    PreferredUser?: User;
    PreferredUserId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PushTimeout?: number;
    Queue?: Group;
    QueueId?: string;
    RelatedRecord?: FlowRecordRelation;
    RoutingModel?: string;
    RoutingPriority?: number;
    RoutingType?: string;
    Serial?: number;
    ServiceChannel?: ServiceChannel;
    ServiceChannelId?: string;
    Shares?: PendingServiceRoutingShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    WorkItem?: SObject;
    WorkItemId?: string;
}
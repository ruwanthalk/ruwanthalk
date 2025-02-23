// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserServicePresence extends SObject 
{
    AtCapacityDuration?: number;
    AverageCapacity?: number;
    ConfiguredCapacity?: number;
    ConfiguredInterruptCapacity?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IdleDuration?: number;
    IsAway?: boolean;
    IsCurrentState?: boolean;
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
    ServicePresenceStatus?: ServicePresenceStatus;
    ServicePresenceStatusId?: string;
    Shares?: UserServicePresenceShare[];
    StatusDuration?: number;
    StatusEndDate?: string;
    StatusStartDate?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
}
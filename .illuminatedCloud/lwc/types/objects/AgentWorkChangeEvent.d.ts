// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AgentWorkChangeEvent extends SObject 
{
    AcceptDateTime?: string;
    ActiveTime?: number;
    AcwExtensionCount?: number;
    AcwExtensionDuration?: number;
    AfterConversationActualTime?: number;
    AgentCapacityWhenDeclined?: number;
    AgentIntCapacityWhenDeclined?: number;
    AssignedDateTime?: string;
    CancelDateTime?: string;
    CapacityPercentage?: number;
    CapacityWeight?: number;
    ChangeEventHeader?: ChangeEventHeader;
    CloseDateTime?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeclineDateTime?: string;
    DeclineReason?: string;
    HandleTime?: number;
    IsInterruptible?: boolean;
    IsPreferredUserRequired?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OriginalGroup?: Group;
    OriginalGroupId?: string;
    OriginalQueue?: Group;
    OriginalQueueId?: string;
    Owner?: User;
    OwnerId?: string;
    PausedCapacityPercentage?: number;
    PausedCapacityWeight?: number;
    PendingServiceRouting?: PendingServiceRouting;
    PendingServiceRoutingId?: string;
    PreferredUser?: User;
    PreferredUserId?: string;
    PushTimeout?: number;
    PushTimeoutDateTime?: string;
    ReplayId?: string;
    RequestDateTime?: string;
    RoutingModel?: string;
    RoutingPriority?: number;
    RoutingType?: string;
    ServiceChannel?: ServiceChannel;
    ServiceChannelId?: string;
    ShouldSkipCapacityCheck?: boolean;
    SpeedToAnswer?: number;
    Status?: string;
    User?: User;
    UserId?: string;
    WorkItem?: SObject;
    WorkItemId?: string;
}
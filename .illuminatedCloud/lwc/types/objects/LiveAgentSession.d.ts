// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveAgentSession extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    Agent?: User;
    AgentId?: string;
    ChatReqAssigned?: number;
    ChatReqDeclined?: number;
    ChatReqEngaged?: number;
    ChatReqTimedOut?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: LiveAgentSessionHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LoginTime?: string;
    LogoutTime?: string;
    Name?: string;
    NumFlagLoweredAgent?: number;
    NumFlagLoweredSupervisor?: number;
    NumFlagRaised?: number;
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    Shares?: LiveAgentSessionShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TimeAtCapacity?: number;
    TimeIdle?: number;
    TimeInAwayStatus?: number;
    TimeInChats?: number;
    TimeInOnlineStatus?: number;
    What?: EventChangeEvent;
}
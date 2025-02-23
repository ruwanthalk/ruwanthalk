// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactRequest extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsCallback?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    PreferredChannel?: string;
    PreferredPhone?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    RequestDescription?: string;
    RequestReason?: string;
    Shares?: ContactRequestShare[];
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    What?: SObject;
    WhatId?: string;
    Who?: SObject;
    WhoId?: string;
    WorkItem?: AgentWork;
}
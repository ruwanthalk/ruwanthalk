// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ChannelProgramMember extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Feeds?: ChannelProgramMemberFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ChannelProgramMemberHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Level?: ChannelProgramLevel;
    LevelId?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Partner?: Account;
    PartnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Program?: ChannelProgram;
    ProgramId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: ChannelProgramMemberShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
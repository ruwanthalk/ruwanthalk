// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ChannelProgramLevel extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    ChannelProgramMembers?: ChannelProgramMember[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: ChannelProgramLevelFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ChannelProgramLevelHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Program?: ChannelProgram;
    ProgramId?: string;
    Rank?: number;
    RelatedRecord?: FlowRecordRelation;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    ScorecardAssociations?: ScorecardAssociation[];
    Shares?: ChannelProgramLevelShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
}
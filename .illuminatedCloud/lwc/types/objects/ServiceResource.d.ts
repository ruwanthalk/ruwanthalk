// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceResource extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: ServiceResourceFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ServiceResourceHistory[];
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
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: User;
    RelatedRecordId?: string;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    ResourceType?: string;
    Shares?: ServiceResourceShare[];
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementChannelType extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    CommSubscriptionChannelTypes?: CommSubscriptionChannelType[];
    ContactPointType?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EngagementChannelType?: CommSubscriptionChannelTypeChangeEvent;
    Feeds?: EngagementChannelTypeFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: EngagementChannelTypeHistory[];
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
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: EngagementChannelTypeShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
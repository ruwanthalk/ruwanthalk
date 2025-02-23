// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscription extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    CommSubscriptionChannelTypes?: CommSubscriptionChannelType[];
    CommunicationSubscription?: CommSubscriptionChannelTypeChangeEvent;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataUsePurpose?: DataUsePurpose;
    DataUsePurposeId?: string;
    Feeds?: CommSubscriptionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: CommSubscriptionHistory[];
    IsDefault?: boolean;
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
    Shares?: CommSubscriptionShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
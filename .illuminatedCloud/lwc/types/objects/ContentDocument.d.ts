// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocument extends SObject 
{
    ArchivedBy?: User;
    ArchivedById?: string;
    ArchivedDate?: Date;
    AuditableEntities?: NetworkActivityAudit[];
    AuthorizationFormTexts?: AuthorizationFormText[];
    CampaignImage?: Campaign;
    ChildRecord?: ContentFolderMember;
    ContentAsset?: ContentAsset;
    ContentAssetId?: string;
    ContentDistributions?: ContentDistribution[];
    ContentDocument?: AttachedContentDocument;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContentModifiedDate?: string;
    ContentSize?: number;
    ContentVersions?: ContentVersion[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Document?: FileEventStore;
    Entity?: NetworkModeration;
    EntityIdentifier?: ContentNotification;
    Feeds?: ContentDocumentFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FileExtension?: string;
    FileType?: string;
    Histories?: ContentDocumentHistory[];
    IsArchived?: boolean;
    IsDeleted?: boolean;
    IsInternalOnly?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LatestPublishedVersion?: ContentVersion;
    LatestPublishedVersionId?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: ContentWorkspace;
    ParentEntities?: NetworkActivityAudit[];
    ParentId?: string;
    ParentRecord?: NetworkFeedResponseMetric;
    PublishStatus?: string;
    Record?: FeedAttachment;
    RelatedRecord?: FlowRecordRelation;
    SharingOption?: string;
    SharingPrivacy?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Title?: string;
    TopicAssignments?: TopicAssignment[];
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NamespaceRegistry extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Feeds?: NamespaceRegistryFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    Histories?: NamespaceRegistryHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NamespaceOrg?: string;
    NamespacePrefix?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
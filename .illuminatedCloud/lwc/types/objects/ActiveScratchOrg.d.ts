// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActiveScratchOrg extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Edition?: string;
    ExpirationDate?: Date;
    Features?: string;
    Feeds?: ActiveScratchOrgFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    HasSampleData?: boolean;
    Histories?: ActiveScratchOrgHistory[];
    IsDeleted?: boolean;
    LastLoginDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Namespace?: string;
    OrgName?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    ScratchOrg?: string;
    ScratchOrgInfo?: ScratchOrgInfo;
    ScratchOrgInfoId?: string;
    Shares?: ActiveScratchOrgShare[];
    SignupEmail?: string;
    SignupInstance?: string;
    SignupTrialDays?: number;
    SignupUsername?: string;
    Snapshot?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
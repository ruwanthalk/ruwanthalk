// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2Model extends SObject 
{
    ActivatedDate?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeactivatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    Feeds?: Territory2ModelFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    Histories?: Territory2ModelHistory[];
    IsCloneSource?: boolean;
    IsDeleted?: boolean;
    IsOppUnassignmentDone?: boolean;
    IsSharingGroupDeleteDone?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOppTerrAssignEndDate?: string;
    LastRunRulesEndDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    ObjectTerritory2AssignmentRules?: ObjectTerritory2AssignmentRule[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RelatedRecord?: FlowRecordRelation;
    State?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Territory2Model?: Territory2AlignmentLog;
    Territory2s?: Territory2[];
}
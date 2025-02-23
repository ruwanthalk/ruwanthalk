// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GuestUserAnomalyEventStore extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    Feedbacks?: ThreatDetectionFeedback[];
    Feeds?: GuestUserAnomalyEventStoreFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    GuestUserAnomalyEventNumber?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LoginKey?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    RelatedRecord?: FlowRecordRelation;
    RequestedEntities?: string;
    Score?: number;
    SecurityEventData?: string;
    SessionKey?: string;
    SoqlCommands?: string;
    SourceIp?: string;
    Summary?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalControllerEvents?: number;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
    UserType?: string;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApiAnomalyEventStore extends SObject 
{
    ApiAnomalyEventNumber?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    Feedbacks?: ThreatDetectionFeedback[];
    Feeds?: ApiAnomalyEventStoreFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LoginKey?: string;
    Operation?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    RelatedRecord?: FlowRecordRelation;
    RequestIdentifier?: string;
    RowsProcessed?: number;
    Score?: number;
    SecurityEventData?: string;
    SessionKey?: string;
    SourceIp?: string;
    Summary?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Uri?: string;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
}
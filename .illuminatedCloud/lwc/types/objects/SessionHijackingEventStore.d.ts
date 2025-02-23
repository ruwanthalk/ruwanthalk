// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SessionHijackingEventStore extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    CurrentIp?: string;
    CurrentPlatform?: string;
    CurrentScreen?: string;
    CurrentUserAgent?: string;
    CurrentWindow?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    Feedbacks?: ThreatDetectionFeedback[];
    Feeds?: SessionHijackingEventStoreFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
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
    PreviousIp?: string;
    PreviousPlatform?: string;
    PreviousScreen?: string;
    PreviousUserAgent?: string;
    PreviousWindow?: string;
    RelatedRecord?: FlowRecordRelation;
    Score?: number;
    SecurityEventData?: string;
    SessionHijackingEventNumber?: string;
    SessionKey?: string;
    SourceIp?: string;
    Summary?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
    Username?: string;
}
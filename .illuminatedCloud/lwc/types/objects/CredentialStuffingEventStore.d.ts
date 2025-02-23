// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CredentialStuffingEventStore extends SObject 
{
    AcceptLanguage?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    CredentialStuffingEventNumber?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    Feedbacks?: ThreatDetectionFeedback[];
    Feeds?: CredentialStuffingEventStoreFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LoginKey?: string;
    LoginType?: string;
    LoginUrl?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    RelatedRecord?: FlowRecordRelation;
    Score?: number;
    SessionKey?: string;
    SourceIp?: string;
    Summary?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
}
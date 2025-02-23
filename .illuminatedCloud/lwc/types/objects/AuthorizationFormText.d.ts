// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationFormText extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    AuthorizationForm?: AuthorizationForm;
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    AuthorizationFormId?: string;
    AuthorizationFormText?: AuthorizationFormConsentChangeEvent;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefaultAuthFormText?: AuthorizationForm;
    Feeds?: AuthorizationFormTextFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    FullAuthorizationFormUrl?: string;
    Histories?: AuthorizationFormTextHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Locale?: string;
    LocaleSelection?: string;
    Name?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    SummaryAuthFormText?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Survey extends SObject 
{
    ActiveVersion?: SurveyVersion;
    ActiveVersionId?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    Feeds?: SurveyFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    IsDeleted?: boolean;
    IsPartialSaveEnabled?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LatestVersion?: SurveyVersion;
    LatestVersionId?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NamespacePrefix?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: SurveyShare[];
    Survey?: SurveyInvitationChangeEvent;
    SurveyInvitations?: SurveyInvitation[];
    SurveyQuestionScores?: SurveyQuestionScore[];
    SurveyResponses?: SurveyResponse[];
    SurveySubjects?: SurveySubject[];
    SurveyType?: string;
    SurveyVersions?: SurveyVersion[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TopicAssignments?: TopicAssignment[];
    TotalVersionsCount?: number;
}
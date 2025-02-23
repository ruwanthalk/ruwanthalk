// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyResponse extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    CompletionDateTime?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Interview?: FlowInterview;
    InterviewGuid?: string;
    InterviewId?: string;
    Invitation?: SurveyInvitation;
    InvitationId?: string;
    IpAddress?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Latitude?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Location?: Location;
    Longitude?: number;
    Name?: string;
    Parent?: SurveySubjectChangeEvent;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Response?: SurveyQuestionResponseChangeEvent;
    Status?: string;
    Submitter?: SObject;
    SubmitterId?: string;
    Survey?: Survey;
    SurveyId?: string;
    SurveyQuestionResponses?: SurveyQuestionResponse[];
    SurveyResponse?: SurveyEngagementContext;
    SurveySubjectResponse?: SurveySubject[];
    SurveySubjects?: SurveySubject[];
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
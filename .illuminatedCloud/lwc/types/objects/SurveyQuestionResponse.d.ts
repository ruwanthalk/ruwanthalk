// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionResponse extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    ChoiceValue?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Datatype?: string;
    DateTimeValue?: string;
    DateValue?: Date;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Invitation?: SurveyInvitation;
    InvitationId?: string;
    IsDeleted?: boolean;
    IsTrueOrFalse?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    NumberValue?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Question?: SurveyQuestion;
    QuestionChoice?: SurveyQuestionChoice;
    QuestionChoiceId?: string;
    QuestionId?: string;
    Rank?: number;
    RelatedRecord?: FlowRecordRelation;
    Response?: SurveyResponse;
    ResponseId?: string;
    ResponseShortText?: string;
    ResponseValue?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TopicAssignments?: TopicAssignment[];
}
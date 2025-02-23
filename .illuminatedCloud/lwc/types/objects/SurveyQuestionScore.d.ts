// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionScore extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CumulativeScore?: number;
    DateResponse?: Date;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Question?: SurveyQuestion;
    QuestionChoice?: SurveyQuestionChoice;
    QuestionChoiceId?: string;
    QuestionDeveloperName?: string;
    QuestionId?: string;
    QuestionName?: string;
    QuestionSkippedCount?: number;
    RelatedRecord?: FlowRecordRelation;
    ResponseCount?: number;
    ResponseValue?: number;
    Score?: number;
    ScoreType?: string;
    Survey?: Survey;
    SurveyId?: string;
    SurveyInvitation?: SurveyInvitation;
    SurveyInvitationId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
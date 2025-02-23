// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionResponseChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    ChoiceValue?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Datatype?: string;
    DateTimeValue?: string;
    DateValue?: Date;
    Invitation?: SurveyInvitation;
    InvitationId?: string;
    IsTrueOrFalse?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NumberValue?: number;
    Question?: SurveyQuestion;
    QuestionChoice?: SurveyQuestionChoice;
    QuestionChoiceId?: string;
    QuestionId?: string;
    Rank?: number;
    ReplayId?: string;
    Response?: SurveyResponse;
    ResponseId?: string;
    ResponseShortText?: string;
    ResponseValue?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
}
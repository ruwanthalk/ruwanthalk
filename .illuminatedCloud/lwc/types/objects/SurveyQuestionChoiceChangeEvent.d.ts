// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionChoiceChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeprecated?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Question?: SurveyQuestion;
    QuestionId?: string;
    ReplayId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
}
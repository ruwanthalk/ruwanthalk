// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionChangeEvent extends SObject 
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
    PageDisplayOrder?: number;
    PageName?: string;
    QuestionChoiceCount?: number;
    QuestionName?: string;
    QuestionOrder?: number;
    QuestionType?: string;
    ReplayId?: string;
    SurveyPage?: SurveyPage;
    SurveyPageId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    ValidationType?: string;
}
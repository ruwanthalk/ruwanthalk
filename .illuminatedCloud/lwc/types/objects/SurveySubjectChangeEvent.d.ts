// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveySubjectChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Parent?: SObject;
    ParentId?: string;
    ReplayId?: string;
    Subject?: SObject;
    SubjectEntityType?: string;
    SubjectId?: string;
    Survey?: Survey;
    SurveyId?: string;
    SurveyInvitation?: SurveyInvitation;
    SurveyInvitationId?: string;
    SurveyResponse?: SurveyResponse;
    SurveyResponseId?: string;
}
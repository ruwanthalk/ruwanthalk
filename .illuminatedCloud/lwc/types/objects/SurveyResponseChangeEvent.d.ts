// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyResponseChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CompletionDateTime?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Interview?: FlowInterview;
    InterviewGuid?: string;
    InterviewId?: string;
    Invitation?: SurveyInvitation;
    InvitationId?: string;
    IpAddress?: string;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Latitude?: number;
    Location?: Location;
    Longitude?: number;
    Name?: string;
    ReplayId?: string;
    Status?: string;
    Submitter?: SObject;
    SubmitterId?: string;
    Survey?: Survey;
    SurveyId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
}
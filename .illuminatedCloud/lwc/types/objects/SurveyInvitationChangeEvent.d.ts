// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyInvitationChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    Community?: Network;
    CommunityId?: string;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailBranding?: SurveyEmailBranding;
    EmailBrandingId?: string;
    InvitationLink?: string;
    InviteExpiryDateTime?: string;
    IsDefault?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    Name?: string;
    OptionsAllowGuestUserResponse?: boolean;
    OptionsAllowParticipantAccessTheirResponse?: boolean;
    OptionsCollectAnonymousResponse?: boolean;
    Owner?: User;
    OwnerId?: string;
    Participant?: SObject;
    ParticipantId?: string;
    ReplayId?: string;
    ResponseStatus?: string;
    Survey?: Survey;
    SurveyId?: string;
    User?: User;
    UserId?: string;
    UUID?: string;
}
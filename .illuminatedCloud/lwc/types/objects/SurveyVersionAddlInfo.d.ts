// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyVersionAddlInfo extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailSender?: string;
    EmailTemplate?: EmailTemplate;
    EmailTemplateId?: string;
    EngagementContextMetadata?: string;
    InvitationSharingRole?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SurveyQuestion?: SurveyQuestion;
    SurveyQuestionId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
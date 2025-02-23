// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyEngagementContext extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    ContextType?: string;
    ContextValue?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: SurveyEngagementContextShare[];
    SurveyInvitation?: SurveyInvitation;
    SurveyInvitationId?: string;
    SurveyResponse?: SurveyResponse;
    SurveyResponseId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
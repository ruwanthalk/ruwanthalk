// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationDefinitionSessionEngagement extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    ConversationEngagement?: LiveChatTranscript;
    ConversationEngagementId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    Session?: ConversationDefinitionSession;
    SessionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
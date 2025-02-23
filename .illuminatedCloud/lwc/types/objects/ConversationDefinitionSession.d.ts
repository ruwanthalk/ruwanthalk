// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationDefinitionSession extends SObject 
{
    ChannelType?: string;
    ConvDefSessionMetrics?: ConvDefSessionMetric[];
    ConversationDefinition?: BotVersion;
    ConversationDefinitionEventLogs?: ConversationDefinitionEventLog[];
    ConversationDefinitionId?: string;
    ConversationEngagements?: ConversationDefinitionSessionEngagement[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    HasErrorLogs?: boolean;
    Hour?: number;
    IntegrationName?: string;
    IntegrationType?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Mode?: string;
    SessionDuration?: number;
    SessionEndType?: string;
    SessionStartTime?: string;
    SessionStatus?: string;
    SessionTransferResult?: string;
    SessionTransferTargetType?: string;
    SessionTransferType?: string;
    SystemModstamp?: string;
    WasSessionEngaged?: boolean;
}
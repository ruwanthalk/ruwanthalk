// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConvDefDialogHourlyMetric extends SObject 
{
    Article?: string;
    ArticleName?: string;
    BotDefinitionName?: string;
    ChannelType?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    ConversationDefinition?: BotVersion;
    ConversationDefinitionId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DialogDefinition?: ConversationDefinitionDialog;
    DialogDefinitionId?: string;
    DialogDefinitionName?: string;
    DialogEntryPoint?: string;
    GoalName?: string;
    Hour?: number;
    IntegrationName?: string;
    IntegrationType?: string;
    IntentLabel?: string;
    IsDeleted?: boolean;
    IsSuccessful?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MetricDateTime?: string;
    MetricType?: string;
    Name?: string;
    Parent?: ConvDefDialogDailyMetric;
    ParentId?: string;
    ParentSessionKey?: string;
    RelatedRecord?: FlowRecordRelation;
    SessionEndType?: string;
    SessionTransferType?: string;
    StaticChoiceValue?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Value?: number;
}
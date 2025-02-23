// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationDefinitionEventLog extends SObject 
{
    Action?: string;
    ChannelType?: string;
    ConversationDefinition?: BotVersion;
    ConversationDefinitionId?: string;
    ConversationTurn?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DialogDefinition?: ConversationDefinitionDialog;
    DialogDefinitionId?: string;
    Duration?: number;
    EventDateTime?: string;
    EventDetails?: string;
    EventLabel?: string;
    EventTarget?: string;
    EventTargetType?: string;
    EventTimestamp?: string;
    EventUuid?: string;
    IsDeleted?: boolean;
    IsSuccessful?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LogLevel?: string;
    LogType?: string;
    NumTokens?: number;
    Parent?: ConversationDefinitionSession;
    ParentId?: string;
    Planner?: string;
    PreviousEventLog?: ConversationDefinitionEventLog;
    PreviousEventLogId?: string;
    PreviousEventLogUuid?: string;
    StepType?: string;
    SystemModstamp?: string;
    User?: string;
}
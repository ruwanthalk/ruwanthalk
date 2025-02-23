// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BotDefinition extends SObject 
{
    AgentType?: string;
    BotVersions?: BotVersion[];
    Config?: MlIntentUtteranceSuggestion;
    ConversationEntries?: ConversationEntry[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    EventTarget?: ConversationDefinitionEventLog;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    SystemModstamp?: string;
    Type?: string;
}
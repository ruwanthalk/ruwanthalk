// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BotVersion extends SObject 
{
    BotDefinition?: BotDefinition;
    BotDefinitionId?: string;
    ConversationDefinition?: ConvDefDialogDailyMetric;
    ConversationDefinitionDialogs?: ConversationDefinitionDialog[];
    CopilotPrimaryLanguage?: string;
    CopilotSecondaryLanguages?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Status?: string;
    SystemModstamp?: string;
    ToneType?: string;
    VersionNumber?: number;
}
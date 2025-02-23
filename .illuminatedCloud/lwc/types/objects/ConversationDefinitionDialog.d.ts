// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationDefinitionDialog extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DialogDefinition?: ConvDefDialogDailyMetric;
    EventTarget?: ConversationDefinitionEventLog;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    Parent?: BotVersion;
    ParentId?: string;
    SystemModstamp?: string;
}
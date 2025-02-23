// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConvDefSessionMetric extends SObject 
{
    ArticleChosenCount?: number;
    ChoiceSelectionCount?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    GlobalChoiceSelectionCount?: number;
    InputMessageCount?: number;
    InterruptedDialogCount?: number;
    IsDeleted?: boolean;
    LastDialog?: string;
    LastDialogName?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NlpIntentRequestCount?: number;
    NlpIntentRequestHitCount?: number;
    OutputMessageCount?: number;
    Parent?: ConversationDefinitionSession;
    ParentId?: string;
    StartedDialogCount?: number;
    SystemModstamp?: string;
    TransferWaitTime?: number;
    WasSessionDropped?: boolean;
}
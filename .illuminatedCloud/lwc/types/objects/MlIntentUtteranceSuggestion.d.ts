// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MlIntentUtteranceSuggestion extends SObject 
{
    Config?: BotDefinition;
    ConfigId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IntentSuggestion?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    ReviewStatus?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Utterance?: string;
    UtteranceCount?: number;
}
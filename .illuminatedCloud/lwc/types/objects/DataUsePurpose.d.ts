// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataUsePurpose extends SObject 
{
    AuthorizationFormDataUses?: AuthorizationFormDataUse[];
    CanDataSubjectOptOut?: boolean;
    CommSubscriptions?: CommSubscription[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataUsePurpose?: AuthorizationFormDataUseChangeEvent;
    Description?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: DataUsePurposeHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LegalBasis?: DataUseLegalBasis;
    LegalBasisId?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    PartyConsents?: PartyConsent[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: DataUsePurposeShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
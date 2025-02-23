// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationForm extends SObject 
{
    AuthorizationForm?: AuthorizationFormDataUse;
    AuthorizationForms?: AuthorizationFormText[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefaultAuthFormText?: AuthorizationFormText;
    DefaultAuthFormTextId?: string;
    EffectiveFromDate?: Date;
    EffectiveToDate?: Date;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: AuthorizationFormHistory[];
    IsDeleted?: boolean;
    IsSignatureRequired?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    RevisionNumber?: string;
    Shares?: AuthorizationFormShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationFormConsent extends SObject 
{
    AuthorizationFormText?: AuthorizationFormText;
    AuthorizationFormTextId?: string;
    ConsentCapturedDateTime?: string;
    ConsentCapturedSource?: string;
    ConsentCapturedSourceType?: string;
    ConsentGiver?: SObject;
    ConsentGiverId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DocumentVersion?: ContentVersion;
    DocumentVersionId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: AuthorizationFormConsentHistory[];
    IsDeleted?: boolean;
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
    RelatedRecord?: Account;
    RelatedRecordId?: string;
    Shares?: AuthorizationFormConsentShare[];
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
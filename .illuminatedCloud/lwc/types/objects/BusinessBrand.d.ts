// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BusinessBrand extends SObject 
{
    BusinessBrand?: ContactPointTypeConsentChangeEvent;
    ChildBUs?: BusinessBrand[];
    ContactPointTypeConsents?: ContactPointTypeConsent[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OrgId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: BusinessBrand;
    ParentId?: string;
    PartyConsents?: PartyConsent[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: BusinessBrandShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
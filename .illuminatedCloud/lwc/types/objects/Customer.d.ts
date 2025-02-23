// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Customer extends SObject 
{
    ContactPointTypeConsents?: ContactPointTypeConsent[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomerStatusType?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Party?: Individual;
    PartyConsents?: PartyConsent[];
    PartyId?: string;
    PartyRole?: ContactPointTypeConsentChangeEvent;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: CustomerShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalLifeTimeValue?: number;
}
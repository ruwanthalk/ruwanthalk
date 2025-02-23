// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Seller extends SObject 
{
    ActiveFromDate?: Date;
    ActiveToDate?: Date;
    ContactPointTypeConsents?: ContactPointTypeConsent[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: SellerHistory[];
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
    SalesAmount?: number;
    SellerTier?: string;
    SellerType?: string;
    Shares?: SellerShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}
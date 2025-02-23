// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DatacloudOwnedEntity extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DatacloudEntityType?: string;
    DataDotComKey?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    PurchaseType?: string;
    PurchaseUsage?: DatacloudPurchaseUsage;
    PurchaseUsageId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
}
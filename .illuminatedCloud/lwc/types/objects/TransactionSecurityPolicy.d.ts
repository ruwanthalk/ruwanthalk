// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TransactionSecurityPolicy extends SObject 
{
    ActionConfig?: string;
    ApexPolicy?: ApexClass;
    ApexPolicyId?: string;
    BlockMessage?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomEmailContent?: string;
    Description?: string;
    DeveloperName?: string;
    EventName?: string;
    EventType?: string;
    ExecutionUser?: User;
    ExecutionUserId?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    Policy?: ApiAnomalyEvent;
    ResourceName?: string;
    State?: string;
    SystemModstamp?: string;
    Type?: string;
}
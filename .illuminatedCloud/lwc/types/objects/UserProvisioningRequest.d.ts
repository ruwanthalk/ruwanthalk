// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserProvisioningRequest extends SObject 
{
    AppName?: string;
    ApprovalStatus?: string;
    ConnectedApp?: ConnectedApplication;
    ConnectedAppId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExternalUserId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Manager?: User;
    ManagerId?: string;
    Name?: string;
    Operation?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: UserProvisioningRequest;
    ParentId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    RetryCount?: number;
    SalesforceUser?: User;
    SalesforceUserId?: string;
    ScheduleDate?: string;
    Shares?: UserProvisioningRequestShare[];
    State?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    UserProvAccount?: UserProvAccount;
    UserProvAccountId?: string;
    UserProvConfig?: UserProvisioningConfig;
    UserProvConfigId?: string;
    UserProvisioningRequest?: UserProvisioningLog;
}
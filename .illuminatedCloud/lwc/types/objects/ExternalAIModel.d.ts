// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalAIModel extends SObject 
{
    ApplicationType?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    ExternalModelKey?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    Status?: string;
    SystemModstamp?: string;
    Threshold?: number;
    TrainingJobName?: string;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyChangeEvent extends SObject 
{
    ActiveVersion?: SurveyVersion;
    ActiveVersionId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsPartialSaveEnabled?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LatestVersion?: SurveyVersion;
    LatestVersionId?: string;
    Name?: string;
    NamespacePrefix?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    SurveyType?: string;
    TotalVersionsCount?: number;
}
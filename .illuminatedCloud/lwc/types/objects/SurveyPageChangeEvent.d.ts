// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyPageChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DisplayOrder?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
}
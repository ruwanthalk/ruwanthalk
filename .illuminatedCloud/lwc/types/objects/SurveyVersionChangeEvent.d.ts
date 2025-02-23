// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyVersionChangeEvent extends SObject 
{
    BrandingSet?: BrandingSet;
    BrandingSetId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
    Survey?: Survey;
    SurveyId?: string;
    SurveyStatus?: string;
    VersionNumber?: number;
}
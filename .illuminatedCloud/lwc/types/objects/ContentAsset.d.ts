// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentAsset extends SObject 
{
    AssetSource?: CustomBrandAsset;
    ContentAsset?: ContentDocument;
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    FeaturedMedia?: ContentFolder;
    FooterImage?: SurveyEmailBranding;
    HeaderImage?: SurveyEmailBranding;
    Icon?: ChatterExtension;
    Image?: PromptVersion;
    IsDeleted?: boolean;
    IsVisibleByExternalUsers?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Logo?: AccountBrand;
    MasterLabel?: string;
    NamespacePrefix?: string;
    SystemModstamp?: string;
    WorkspaceImage?: ContentWorkspace;
}
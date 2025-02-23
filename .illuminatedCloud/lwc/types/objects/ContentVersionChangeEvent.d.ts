// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentVersionChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    ContentBody?: ContentBody;
    ContentBodyId?: string;
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentLocation?: string;
    ContentModifiedBy?: User;
    ContentModifiedById?: string;
    ContentModifiedDate?: string;
    ContentSize?: number;
    ContentUrl?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    ExternalDataSource?: ExternalDataSource;
    ExternalDataSourceId?: string;
    ExternalDocumentInfo1?: string;
    ExternalDocumentInfo2?: string;
    FeaturedContentBoost?: number;
    FeaturedContentDate?: Date;
    FileType?: string;
    FirstPublishLocation?: SObject;
    FirstPublishLocationId?: string;
    IsLatest?: boolean;
    IsMajorVersion?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NegativeRatingCount?: number;
    Network?: Network;
    NetworkId?: string;
    Origin?: string;
    Owner?: User;
    OwnerId?: string;
    PathOnClient?: string;
    PositiveRatingCount?: number;
    PublishStatus?: string;
    RatingCount?: number;
    ReasonForChange?: string;
    ReplayId?: string;
    SharingOption?: string;
    SharingPrivacy?: string;
    TextPreview?: string;
    Title?: string;
    VersionNumber?: string;
}
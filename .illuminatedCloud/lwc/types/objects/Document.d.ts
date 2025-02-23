// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Document extends SObject 
{
    AssetSource?: CustomBrandAsset;
    Author?: User;
    AuthorId?: string;
    Body?: string;
    BodyLength?: number;
    ContentType?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    Document?: DocumentAttachmentMap;
    EmailFooterLogo?: Network;
    Folder?: SObject;
    FolderId?: string;
    IsBodySearchable?: boolean;
    IsDeleted?: boolean;
    IsInternalUseOnly?: boolean;
    IsPublic?: boolean;
    Keywords?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    NamespacePrefix?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
    Url?: string;
}
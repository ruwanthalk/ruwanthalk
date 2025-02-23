// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountBrand extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Address?: Address;
    AttachedContentDocuments?: AttachedContentDocument[];
    City?: string;
    CombinedAttachments?: CombinedAttachment[];
    CompanyName?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Email?: string;
    FirstPublishLocation?: ContentVersion;
    GeocodeAccuracy?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Latitude?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Logo?: ContentAsset;
    LogoId?: string;
    LogoUrl?: string;
    Longitude?: number;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Phone?: string;
    PostalCode?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: AccountBrandShare[];
    State?: string;
    Street?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Website?: string;
}
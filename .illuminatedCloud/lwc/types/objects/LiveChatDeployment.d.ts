// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatDeployment extends SObject 
{
    Branding?: StaticResource;
    BrandingId?: string;
    ConnectionTimeoutDuration?: number;
    ConnectionWarningDuration?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Deployment?: LiveChatButtonDeployment;
    DeveloperName?: string;
    Domains?: string;
    HasTranscriptSave?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LiveChatDeployment?: LiveChatTranscriptChangeEvent;
    LiveChatTranscripts?: LiveChatTranscript[];
    MasterLabel?: string;
    MobileBranding?: StaticResource;
    MobileBrandingId?: string;
    OptionsHasPrechatApi?: boolean;
    Site?: Site;
    SiteId?: string;
    SystemModstamp?: string;
    WindowTitle?: string;
}
// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FileEventStore extends SObject 
{
    CanDownloadPdf?: boolean;
    ContentSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Document?: ContentDocument;
    DocumentId?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    FileAction?: string;
    FileName?: string;
    FileSource?: string;
    FileType?: string;
    IsLatestVersion?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    ProcessDuration?: number;
    RelatedEventIdentifier?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    SystemModstamp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    Version?: ContentVersion;
    VersionId?: string;
    VersionNumber?: string;
}
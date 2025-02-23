// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FileEvent extends SObject 
{
    CanDownloadPdf?: boolean;
    ContentSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DocumentId?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    FileAction?: string;
    FileName?: string;
    FileSource?: string;
    FileType?: string;
    IsLatestVersion?: boolean;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    ProcessDuration?: number;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    VersionId?: string;
    VersionNumber?: string;
}
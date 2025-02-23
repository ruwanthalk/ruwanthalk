// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NamedCredential extends SObject 
{
    AuthProvider?: AuthProvider;
    AuthProviderId?: string;
    AuthTokenEndpointUrl?: string;
    CalloutOptionsAllowMergeFieldsInBody?: boolean;
    CalloutOptionsAllowMergeFieldsInHeader?: boolean;
    CalloutOptionsGenerateAuthorizationHeader?: boolean;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomHttpHeaders?: CustomHttpHeader[];
    DeveloperName?: string;
    Endpoint?: string;
    IsDeleted?: boolean;
    JwtAudience?: string;
    JwtFormulaSubject?: string;
    JwtIssuer?: string;
    JwtTextSubject?: string;
    JwtValidityPeriodSeconds?: number;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamedCredential?: ExternalDataSource;
    NamespacePrefix?: string;
    PrincipalType?: string;
    SetupEntityAccessItems?: SetupEntityAccess[];
    SystemModstamp?: string;
    UserAuths?: ExternalDataUserAuth[];
}
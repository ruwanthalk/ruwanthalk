// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FieldDefinition extends SObject 
{
    BusinessOwner?: SObject;
    BusinessOwnerId?: string;
    BusinessStatus?: string;
    ComplianceGroup?: string;
    ControllingFieldDefinition?: FieldDefinition;
    ControllingFieldDefinitionId?: string;
    DataType?: string;
    Description?: string;
    DeveloperName?: string;
    DurableId?: string;
    EntityDefinition?: EntityDefinition;
    EntityDefinitionId?: string;
    ExtraTypeInfo?: string;
    IsApiFilterable?: boolean;
    IsApiGroupable?: boolean;
    IsApiSortable?: boolean;
    IsCalculated?: boolean;
    IsCompactLayoutable?: boolean;
    IsCompound?: boolean;
    IsFieldHistoryTracked?: boolean;
    IsHighScaleNumber?: boolean;
    IsHtmlFormatted?: boolean;
    IsIndexed?: boolean;
    IsListFilterable?: boolean;
    IsListSortable?: boolean;
    IsListVisible?: boolean;
    IsNameField?: boolean;
    IsNillable?: boolean;
    IsPolymorphicForeignKey?: boolean;
    IsSearchPrefilterable?: boolean;
    IsWorkflowFilterable?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Length?: number;
    MasterLabel?: string;
    NamespacePrefix?: string;
    Precision?: number;
    Publisher?: Publisher;
    PublisherId?: string;
    QualifiedApiName?: string;
    ReferenceTargetField?: string;
    ReferenceTo?: Object;
    RelationshipName?: string;
    RunningUserFieldAccess?: UserFieldAccess;
    RunningUserFieldAccessId?: string;
    Scale?: number;
    SecurityClassification?: string;
    ServiceDataType?: DataType;
    ServiceDataTypeId?: string;
    ValueType?: DataType;
    ValueTypeId?: string;
}
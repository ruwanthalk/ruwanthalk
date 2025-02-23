// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListView extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefaultListView?: NavigationMenuItem;
    DeveloperName?: string;
    IsSoqlCompatible?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    ListEmailRecipientSources?: ListEmailRecipientSource[];
    ListView?: ListViewEvent;
    ListViewContext?: ListViewChartInstance;
    ListViewFilter?: CalendarView;
    Name?: string;
    NamespacePrefix?: string;
    Publisher?: CalendarView;
    SystemModstamp?: string;
}
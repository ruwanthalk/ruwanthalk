// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventBusSubscriber extends SObject 
{
    ExternalId?: string;
    IsPartitioned?: boolean;
    LastError?: string;
    Name?: string;
    Position?: number;
    Retries?: number;
    Status?: string;
    Tip?: number;
    Topic?: string;
    Type?: string;
}
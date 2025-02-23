// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2 extends SObject 
{
    AccountAccessLevel?: string;
    AccountUserTerritory2Views?: AccountUserTerritory2View[];
    CaseAccessLevel?: string;
    ContactAccessLevel?: string;
    Description?: string;
    DeveloperName?: string;
    ForecastUser?: User;
    ForecastUserId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ObjectTerritory2Access?: Territory2ObjSharingConfig[];
    ObjectTerritory2Associations?: ObjectTerritory2Association[];
    ObjectUserTerritory2Views?: ObjectUserTerritory2View[];
    OpportunityAccessLevel?: string;
    ParentTerritory2?: Territory2;
    ParentTerritory2Id?: string;
    Related?: Group;
    RuleTerritory2Associations?: RuleTerritory2Association[];
    SystemModstamp?: string;
    Territory2?: Opportunity;
    Territory2Model?: Territory2Model;
    Territory2ModelId?: string;
    Territory2ObjectExclusions?: Territory2ObjectExclusion[];
    Territory2Type?: Territory2Type;
    Territory2TypeId?: string;
    UserTerritory2Associations?: UserTerritory2Association[];
}
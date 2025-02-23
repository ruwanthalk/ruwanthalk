// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Skill extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    LiveChatTrancriptSkills?: LiveChatTranscriptSkill[];
    LiveChatTranscripts?: LiveChatTranscript[];
    MasterLabel?: string;
    Skill?: LiveChatButton;
    SupervisorDefaultSkill?: LiveChatUserConfig;
    SystemModstamp?: string;
    Type?: SkillType;
    TypeId?: string;
}
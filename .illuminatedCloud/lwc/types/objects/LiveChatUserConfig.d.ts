// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatUserConfig extends SObject 
{
    AutoGreeting?: string;
    Capacity?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CriticalWaitTime?: number;
    CustomAgentName?: string;
    DeveloperName?: string;
    HasLogoutSound?: boolean;
    HasNotifications?: boolean;
    HasRequestSound?: boolean;
    HasSneakPeek?: boolean;
    HasTransferConferenceGreeting?: boolean;
    IsAutoAwayOnDecline?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LiveChatUserConfig?: LiveChatUserConfigProfile;
    MasterLabel?: string;
    OptionsHasAgentFileTransfer?: boolean;
    OptionsHasAgentSneakPeek?: boolean;
    OptionsHasAssistanceFlag?: boolean;
    OptionsHasChatConferencing?: boolean;
    OptionsHasChatMonitoring?: boolean;
    OptionsHasChatTransferToAgent?: boolean;
    OptionsHasChatTransferToButton?: boolean;
    OptionsHasChatTransferToSkill?: boolean;
    OptionsHasTransferConferenceGreeting?: boolean;
    OptionsHasVisitorBlocking?: boolean;
    OptionsHasWhisperMessage?: boolean;
    OptionsIsAutoAwayOnPushTimeout?: boolean;
    SupervisorDefaultAgentStatus?: string;
    SupervisorDefaultButton?: LiveChatButton;
    SupervisorDefaultButtonId?: string;
    SupervisorDefaultSkill?: Skill;
    SupervisorDefaultSkillId?: string;
    SystemModstamp?: string;
}
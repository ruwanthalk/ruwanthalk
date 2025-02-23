// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyVersion extends SObject 
{
    ActiveVersion?: Survey;
    BrandingSet?: BrandingSet;
    BrandingSetId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LatestVersion?: Survey;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Survey?: Survey;
    SurveyId?: string;
    SurveyPages?: SurveyPage[];
    SurveyQuestions?: SurveyQuestion[];
    SurveyQuestionScores?: SurveyQuestionScore[];
    SurveyResponses?: SurveyResponse[];
    SurveyStatus?: string;
    SurveyVersion?: SurveyPageChangeEvent;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    VersionNumber?: number;
}
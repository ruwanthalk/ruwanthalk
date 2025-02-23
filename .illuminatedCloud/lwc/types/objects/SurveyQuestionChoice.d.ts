// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestionChoice extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    IsDeprecated?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Question?: SurveyQuestion;
    QuestionChoice?: SurveyQuestionResponse;
    QuestionId?: string;
    RelatedRecord?: FlowRecordRelation;
    SurveyQuestionScores?: SurveyQuestionScore[];
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TopicAssignments?: TopicAssignment[];
}
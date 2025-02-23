// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SurveyQuestion extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    IsDeleted?: boolean;
    IsDeprecated?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OpenActivities?: OpenActivity[];
    PageDisplayOrder?: number;
    PageName?: string;
    Question?: SurveyQuestionChoiceChangeEvent;
    QuestionChoiceCount?: number;
    QuestionChoices?: SurveyQuestionChoice[];
    QuestionName?: string;
    QuestionOrder?: number;
    QuestionType?: string;
    RelatedRecord?: FlowRecordRelation;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    SurveyPage?: SurveyPage;
    SurveyPageId?: string;
    SurveyQuestion?: SurveyVersionAddlInfo;
    SurveyQuestionResponses?: SurveyQuestionResponse[];
    SurveyQuestionScores?: SurveyQuestionScore[];
    SurveyVersion?: SurveyVersion;
    SurveyVersionId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    ValidationType?: string;
    What?: EventChangeEvent;
}
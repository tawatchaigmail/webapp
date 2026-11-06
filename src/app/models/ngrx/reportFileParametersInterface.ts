export interface ReportFileParameters {
      SEQ_NO    : number;
      REPORT_ID : string;
      PARAMETER_NAME   : string;
      INITIAL_VALUE    : string;
      INITIAL_VALUE_TO : string;
      DESCRIPTION     : string;
      RG_TEXT         : string;
      RG_TEXT2        : string;
      DATA_TYPE       : string;
      UPDATED_ALLOWED : string;
      MUTI_FLAG       : string;      
}

export interface ReportFileParametersForms {
      seqNo    : number;
      reportId : number;
      parameterName  : string;
      initialValue   : string;
      initialValueTo : string;
      description    : string;
      rgText         : string;
      rgText2        : string;
      dataType       : string;
      updatedAllowed : string;
      multiFlag      : string;      
}

export interface Response { results: ReportFileParametersForms[] } 

export interface ReportFileParametersFormsId {
      seqNo    : number;
      reportId : number;
}

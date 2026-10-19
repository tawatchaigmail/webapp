export interface ReportFileMasters {

      REPORT_ID : string;
      REPORT_NAME : string;
      FILENAME : string;
      REPORT_GROUP : string;
      DESCRIPTION : string;
      FLAG_LOG_FILE : string;
      ORIENTATION : string;
      PAPER_SIZE : string;
      SHOW_FOOTER : string;
      FORM_FOOTER : string;
      CTRL_DOC_NUMBER : string;
}

export interface ReportFileMastersForms {
    reportId    : string;
    fileName    : string;
    description : string;
    reportGroup : string;
    orantation  : string;
    ctrlDocNo   : string;
    flagLogFile : string;
    paperSize   : string;
}

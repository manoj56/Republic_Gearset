export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"hassan.ahmed@cognizant.com","userId":"005WF000003BKRXYA4","userCurrencyCode":"USD","timeStamp":"2024-07-24T11:43:43.730Z","sOmniScriptId":"0jNWF0000001OLF2A2","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"ttlMinutes":5,"trackingCustomData":{},"rollbackOnError":false,"relationshipFieldsMap":[],"queueableChainableQueriesLimit":120,"queueableChainableHeapSizeLimit":6,"queueableChainableCpuLimit":40000,"nameColumn":"","mockResponseMap":{},"linkToExternalObject":"","labelSingular":"","labelPlural":"","includeAllActionsInResponse":false,"description":"","columnsPropertyMap":[],"chainableSoslQueriesLimit":null,"chainableQueryRowsLimit":null,"chainableQueriesLimit":50,"chainableHeapSizeLimit":null,"chainableDMLStatementsLimit":null,"chainableDMLRowsLimit":null,"chainableCpuLimit":2000,"chainableActualTimeLimit":null,"additionalChainableResponse":{}},"prefillJSON":"{}","lwcId":"9c0e98f8-dec2-4867-d6b1-5780163b4e28","labelMap":{"ResponseAction":"ResponseAction","DRLoadOffersToInactiveOnLDetChng":"DRLoadOffersToInactiveOnLDetChng","IP_CreateVersionOnLoanDetailsChangeAction":"IP_CreateVersionOnLoanDetailsChangeAction","DRExtractInProAndApprvdOffers":"DRExtractInProAndApprvdOffers","DRPostCreateCalloutLog":"DRPostCreateCalloutLog","IP_RecallGetPayOffQuoteData":"IP_RecallGetPayOffQuoteData","HTTPActionABSCall":"HTTPActionABSCall","SVPayload":"SVPayload","DRExtractABSCalcPart1InputOnLDetChnge":"DRExtractABSCalcPart1InputOnLDetChnge","DMABSStateIDMatrix":"DMABSStateIDMatrix"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Matrix Action","propSetMap":{"useFormulas":true,"show":null,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","remoteOptions":{"matrixName":"RFABSStateIDMatrix"},"matrix Input Parameters":[{"value":"State","name":"ECOAState"}],"label":"DecisionMatrixAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"defaultMatrixResult":{},"chainOnStep":false,"additionalOutput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DMABSStateIDMatrix","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bMatrixAction":true,"JSONPath":"DMABSStateIDMatrix","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorExtractAction1","ignoreCache":false,"failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"ApplicationId","element":"ApplicationId"},{"inputParam":"AppStateId","element":"DMABSStateIDMatrix|1:StateID"}],"chainOnStep":false,"bundle":"RFExtractABSCalcPart1InputOnLDetChnge","additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRExtractABSCalcPart1InputOnLDetChnge","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DRExtractABSCalcPart1InputOnLDetChnge","lwcId":"lwc1"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues1","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","elementValueMap":{"namesId":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:namesId%","calculateAndStoreContractRate":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:calculateAndStoreContractRate%","Term":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:Term%","StateId":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:StateId%","SpouseID":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:SpouseID%","PaymentsPerYear":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:PaymentsPerYear%","PaymentAmount":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:PaymentAmount%","MakerDOB":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:MakerDOB%","LoanRule":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LoanRule%","LoanDate":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LoanDate%","LoanComakers":"=IF(ISBLANK(%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LoanComakers|1:ComakerId%),LIST(),LIST(%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LoanComakers%))","LoanClass":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LoanClass%","LoanCharges":"=LIST()","LifeDisbJointInsured":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LifeDisbJointInsured%","LifeDisbInsured":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:LifeDisbInsured%","IUIJointInsured":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:IUIJointInsured%","IUIInsured":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:IUIInsured%","FirstPaymentDate":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:FirstPaymentDate%","FederalRate":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:FederalRate%","ContractRate":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:ContractRate%","CoMakerDOB":"=IF(ISNOTBLANK(%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CoMakerDOB%),%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CoMakerDOB%,'')","Co-BorrowerDOB":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:Co-BorrowerDOB%","CashAdvance":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CashAdvance%","CarClubInsured":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CarClubInsured%","CarClubAssociateLast":"=IF(ISNOTBLANK(%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CarClubAssociateLast%),%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CarClubAssociateLast%,\"\")","CarClubAssociateFirst":"=IF(ISNOTBLANK(%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CarClubAssociateFirst%),%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CarClubAssociateFirst%,\"\")","CalcType":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:CalcType%","BranchId":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:BranchId%","AmountFinanced":"=%DRExtractABSCalcPart1InputOnLDetChnge:APIInput:AmountFinanced%"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVPayload","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVPayload","lwcId":"lwc2"},{"type":"Rest Action","propSetMap":{"useFormulas":true,"type":"Integration","show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"SVPayload","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"retryCount":0,"restPath":"","restOptions":{"xmlEscapeResponse":false,"timeout":100000,"sendBody":true,"params":{},"isCompressed":false,"headers":{},"clientCertificateName":""},"restMethod":"POST","responseJSONPath":"","responseJSONNode":"","preActionLogging":"%endpoint%","postActionLogging":"","namedCredential":"RF_AbsCalcApi","label":"HTTPAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"HTTPActionABSCall","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bHttpAction":true,"JSONPath":"HTTPActionABSCall","lwcId":"lwc3"},{"type":"Integration Procedure Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","remoteOptions":{"useFuture":true},"label":"IntegrationProcedureAction2","integrationProcedureKey":"RFIP_RecallGetPayOffQuoteData","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"IF(%IsLoanDateChanged% == \"Yes\", true, false)","disableChainable":false,"disOnTplt":false,"chainOnStep":false,"additionalOutput":{},"additionalInput":{"CoApplicantAccountId":"%DRExtractABSCalcPart1InputOnLDetChnge:CoApplicantAccountId%","ApplicationId":"%ApplicationId%","ApplicantAccountId":"%DRExtractABSCalcPart1InputOnLDetChnge:ApplicantAccountId%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"IP_RecallGetPayOffQuoteData","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IP_RecallGetPayOffQuoteData","lwcId":"lwc4"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadCreateCalloutLogOnCalculate","additionalOutput":{},"additionalInput":{"Type":"INFO","ResponseBody":"%HTTPActionABSCall%","RequestBody":"=%SVPayload%","IPName":"RFIP_ReCallABSCalcPart1","HTTPStatusCode":"%HTTPActionABSCall:response:status%","EndPoint":"RF_AbsCalcApi","ApplicationId":"%ApplicationId%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRPostCreateCalloutLog","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRPostCreateCalloutLog","lwcId":"lwc5"},{"type":"DataRaptor Extract Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorExtractAction2","ignoreCache":false,"failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"ApplicationId","element":"ApplicationId"}],"chainOnStep":false,"bundle":"RFExtractInProAndApprvdOffers","additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRExtractInProAndApprvdOffers","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DRExtractInProAndApprvdOffers","lwcId":"lwc6"},{"type":"Integration Procedure Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","remoteOptions":{},"label":"IntegrationProcedureAction2","integrationProcedureKey":"RFIP_CreateVersionOnLoanDetailsChange","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disableChainable":false,"disOnTplt":false,"chainOnStep":false,"additionalOutput":{},"additionalInput":{"Offers":"%DRExtractInProAndApprvdOffers%","HTTPActionABSCall":"%HTTPActionABSCall%","CoApplicantAccountId":"%DRExtractABSCalcPart1InputOnLDetChnge:CoApplicantAccountId%","ApplicantAccountId":"%DRExtractABSCalcPart1InputOnLDetChnge:ApplicantAccountId%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"IP_CreateVersionOnLoanDetailsChangeAction","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IP_CreateVersionOnLoanDetailsChangeAction","lwcId":"lwc7"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"%DRExtractInProAndApprvdOffers%","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction2","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadOffersToInactiveOnLDetChng","additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRLoadOffersToInactiveOnLDetChng","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRLoadOffersToInactiveOnLDetChng","lwcId":"lwc8"},{"type":"Response Action","propSetMap":{"vlcResponseHeaders":{},"useFormulas":true,"show":null,"sendJSONPath":"","sendJSONNode":"","returnOnlyAdditionalOutput":false,"returnFullDataJSON":true,"responseJSONPath":"","responseJSONNode":"","responseFormat":"JSON","responseDefaultData":{},"label":"ResponseAction1","executionConditionalFormula":"","disOnTplt":false,"additionalOutput":{},"aggElements":{}},"offSet":0,"name":"ResponseAction","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"JSONPath":"ResponseAction","lwcId":"lwc9"}],"bReusable":false,"bpVersion":3,"bpType":"RFIP","bpSubType":"ReCallABSCalcPart1","bpLang":"Procedure","bHasAttachment":false,"lwcVarMap":{}};
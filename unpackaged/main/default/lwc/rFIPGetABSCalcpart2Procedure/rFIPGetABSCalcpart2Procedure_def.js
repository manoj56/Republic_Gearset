export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"hassan.ahmed@cognizant.com","userId":"005WF000003BKRXYA4","userCurrencyCode":"USD","timeStamp":"2024-07-24T11:43:38.327Z","sOmniScriptId":"0jNWF0000001OJd2AM","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"ttlMinutes":5,"trackingCustomData":{},"rollbackOnError":false,"relationshipFieldsMap":[],"queueableChainableQueriesLimit":120,"queueableChainableHeapSizeLimit":6,"queueableChainableCpuLimit":40000,"nameColumn":"","mockResponseMap":{},"linkToExternalObject":"","labelSingular":"","labelPlural":"","includeAllActionsInResponse":false,"description":"","columnsPropertyMap":[],"chainableSoslQueriesLimit":null,"chainableQueryRowsLimit":null,"chainableQueriesLimit":50,"chainableHeapSizeLimit":null,"chainableDMLStatementsLimit":null,"chainableDMLRowsLimit":null,"chainableCpuLimit":2000,"chainableActualTimeLimit":null,"additionalChainableResponse":{}},"prefillJSON":"{}","lwcId":"21062087-928b-c5d6-b3d6-9994f76aa05d","labelMap":{"ResponseAction":"ResponseAction","SetValuesGetAmountFinanceCharge":"SetValuesGetAmountFinanceCharge","SetValuesGetList":"SetValuesGetList","DRLoadNeedsReviewToOffer":"DRLoadNeedsReviewToOffer","DRLoadABSResponseToOffer":"DRLoadABSResponseToOffer","DRLoadPart2ResponseToLCAndABSCalc":"DRLoadPart2ResponseToLCAndABSCalc","SVSUMSType2AndCarClub":"SVSUMSType2AndCarClub","SVSummaryType2AndCarClub":"SVSummaryType2AndCarClub","ListAction":"ListAction","SVRoundAndLoanCharge":"SVRoundAndLoanCharge","DRExtractAppendLoanChargeIds":"DRExtractAppendLoanChargeIds","DRPostCreateCalloutLogForRounded":"DRPostCreateCalloutLogForRounded","DRPostCreateCalloutLog":"DRPostCreateCalloutLog","HTTPActionForRounding":"HTTPActionForRounding","SVRoundPayload":"SVRoundPayload","SVPaymentInCents":"SVPaymentInCents","HTTPActionABSCall":"HTTPActionABSCall","SVPayload":"SVPayload","DRExtractCollateralAutoRefinaceForCalculate":"DRExtractCollateralAutoRefinaceForCalculate","DRExtractLoanChargesForABSCalcInput":"DRExtractLoanChargesForABSCalcInput","DMABSStateIdMatrix":"DMABSStateIdMatrix"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Matrix Action","propSetMap":{"useFormulas":true,"show":null,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","remoteOptions":{"matrixName":"RFABSStateIDMatrix"},"matrix Input Parameters":[{"value":"State","name":"AppState"}],"label":"DecisionMatrixAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"defaultMatrixResult":{},"chainOnStep":false,"additionalOutput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DMABSStateIdMatrix","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bMatrixAction":true,"JSONPath":"DMABSStateIdMatrix","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorExtractAction1","ignoreCache":false,"failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"OfferId","element":"OfferId"},{"inputParam":"ApplicationId","element":"ApplicationId"},{"inputParam":"AppStateId","element":"DMABSStateIdMatrix|1:StateID"},{"inputParam":"PayOffTotal","element":"PayOffTotal"}],"chainOnStep":false,"bundle":"RFExtractLoanChargesForABSCalcInput","additionalOutput":{"FRenewals":"=IF(%DRExtractLoanChargesForABSCalcInput:IsDebtInfoBlank%,LIST(),LIST(%DRExtractLoanChargesForABSCalcInput:Renewals%))"},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRExtractLoanChargesForABSCalcInput","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DRExtractLoanChargesForABSCalcInput","lwcId":"lwc1"},{"type":"DataRaptor Extract Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorExtractAction3","ignoreCache":false,"failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"OfferId","element":"OfferId"}],"chainOnStep":false,"bundle":"RFExtractCollateralAutoRefinaceForCalculate","additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRExtractCollateralAutoRefinaceForCalculate","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DRExtractCollateralAutoRefinaceForCalculate","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues8","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","elementValueMap":{"namesId":"%DRExtractLoanChargesForABSCalcInput:NamesID%","calculateAndStoreContractRate":"=%DRExtractLoanChargesForABSCalcInput:calculateAndStoreContractRate%","Term":"%DRExtractLoanChargesForABSCalcInput:Term%","StateId":"%DRExtractLoanChargesForABSCalcInput:StateId%","SpouseID":"=%DRExtractLoanChargesForABSCalcInput:SpouseID%","Renewals":"%DRExtractLoanChargesForABSCalcInput:FRenewals%","PaymentsPerYear":"%DRExtractLoanChargesForABSCalcInput:PaymentsPerYear%","PaymentAmount":"%DRExtractLoanChargesForABSCalcInput:PaymentAmount%","MakerDOB":"%DRExtractLoanChargesForABSCalcInput:MakerDOB%","LoanRule":"%DRExtractLoanChargesForABSCalcInput:LoanRule%","LoanDate":"%DRExtractLoanChargesForABSCalcInput:LoanDate%","LoanComakers":"=IF(ISBLANK(%DRExtractLoanChargesForABSCalcInput:LoanComakers|1:ComakerId%),LIST(),LIST(%DRExtractLoanChargesForABSCalcInput:LoanComakers%))","LoanClass":"%DRExtractLoanChargesForABSCalcInput:LoanClass%","LoanCharges":"%DRExtractLoanChargesForABSCalcInput:LoanCharges%","LifeDisbJointInsured":"=%DRExtractLoanChargesForABSCalcInput:LifeDisbJointInsured%","LifeDisbInsured":"=%DRExtractLoanChargesForABSCalcInput:LifeDisbInsured%","IUIJointInsured":"=%DRExtractLoanChargesForABSCalcInput:IUIJointInsured%","IUIInsured":"=%DRExtractLoanChargesForABSCalcInput:IUIInsured%","FirstPaymentDate":"%DRExtractLoanChargesForABSCalcInput:FirstPaymentDate%","FederalRate":"%DRExtractLoanChargesForABSCalcInput:FederalRate%","ContractRate":"=%DRExtractLoanChargesForABSCalcInput:ContractRate%","CoMakerDOB":"%DRExtractLoanChargesForABSCalcInput:CoMakerDOB%","Co-BorrowerDOB":"%DRExtractLoanChargesForABSCalcInput:Co-BorrowerDOB%","CashAdvance":"%DRExtractLoanChargesForABSCalcInput:CashAdvance%","CarClubInsured":"=%DRExtractLoanChargesForABSCalcInput:CarClubInsured%","CarClubAssociateLast":"=IF(ISNOTBLANK(%DRExtractLoanChargesForABSCalcInput:CarClubAssociateLast%),%DRExtractLoanChargesForABSCalcInput:CarClubAssociateLast%,\"\")","CarClubAssociateFirst":"=IF(ISNOTBLANK(%DRExtractLoanChargesForABSCalcInput:CarClubAssociateFirst%),%DRExtractLoanChargesForABSCalcInput:CarClubAssociateFirst%,\"\")","CalcType":"%DRExtractLoanChargesForABSCalcInput:CalcType%","BranchId":"%DRExtractLoanChargesForABSCalcInput:BranchId%","AmountFinanced":"%DRExtractLoanChargesForABSCalcInput:AmountFinanced%"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVPayload","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVPayload","lwcId":"lwc3"},{"type":"Rest Action","propSetMap":{"useFormulas":true,"type":"Integration","show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"SVPayload","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"retryCount":0,"restPath":"","restOptions":{"xmlEscapeResponse":false,"timeout":100000,"sendBody":true,"params":{},"isCompressed":false,"headers":{},"clientCertificateName":""},"restMethod":"POST","responseJSONPath":"","responseJSONNode":"","preActionLogging":"%endpoint%","postActionLogging":"","namedCredential":"RF_AbsCalcApi","label":"HTTPAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"HTTPActionABSCall","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bHttpAction":true,"JSONPath":"HTTPActionABSCall","lwcId":"lwc4"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues1","failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"","elementValueMap":{"RoundedPayment":"=IF(%PregenOffer% == true,ROUND(%HTTPActionABSCall:response:result:regularPaymentAmt%,0,FLOOR),ROUND(%HTTPActionABSCall:response:result:regularPaymentAmt%,0,CEILING))","PaymentInCents":"=IF(((%HTTPActionABSCall:response:error% == null || %HTTPActionABSCall:response:error% == '') && %HTTPActionABSCall% != '') ,IF(SUBSTRING(TOSTRING(%HTTPActionABSCall:response:result:regularPaymentAmt%),\".\") != \"0\" && SUBSTRING(TOSTRING(%HTTPActionABSCall:response:result:regularPaymentAmt%),\".\") != \".00\" && SUBSTRING(TOSTRING(%HTTPActionABSCall:response:result:regularPaymentAmt%),\".\") != \"0.0\" && SUBSTRING(TOSTRING(%HTTPActionABSCall:response:result:regularPaymentAmt%),\".\") != '', \"Yes\", \"No\"), \"No\")","CentsValue":"=SUBSTRING(TOSTRING(%HTTPActionABSCall:response:result:regularPaymentAmt%),\".\")"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVPaymentInCents","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVPaymentInCents","lwcId":"lwc5"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues2","failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"IF(%SVPaymentInCents:PaymentInCents% == \"Yes\",true,false)","elementValueMap":{"namesId":"%DRExtractLoanChargesForABSCalcInput:NamesID%","calculateAndStoreContractRate":"=%DRExtractLoanChargesForABSCalcInput:calculateAndStoreContractRate%","Term":"%DRExtractLoanChargesForABSCalcInput:Term%","StateId":"%DRExtractLoanChargesForABSCalcInput:StateId%","SpouseID":"=%DRExtractLoanChargesForABSCalcInput:SpouseID%","Renewals":"%DRExtractLoanChargesForABSCalcInput:FRenewals%","PaymentsPerYear":"%DRExtractLoanChargesForABSCalcInput:PaymentsPerYear%","PaymentAmount":"%SVPaymentInCents:RoundedPayment%","MakerDOB":"%DRExtractLoanChargesForABSCalcInput:MakerDOB%","LoanRule":"%DRExtractLoanChargesForABSCalcInput:LoanRule%","LoanDate":"%DRExtractLoanChargesForABSCalcInput:LoanDate%","LoanComakers":"=IF(ISBLANK(%DRExtractLoanChargesForABSCalcInput:LoanComakers|1:ComakerId%),LIST(),LIST(%DRExtractLoanChargesForABSCalcInput:LoanComakers%))","LoanClass":"%DRExtractLoanChargesForABSCalcInput:LoanClass%","LoanCharges":"%DRExtractLoanChargesForABSCalcInput:LoanCharges%","LifeDisbJointInsured":"=%DRExtractLoanChargesForABSCalcInput:LifeDisbJointInsured%","LifeDisbInsured":"=%DRExtractLoanChargesForABSCalcInput:LifeDisbInsured%","IUIJointInsured":"=%DRExtractLoanChargesForABSCalcInput:IUIJointInsured%","IUIInsured":"=%DRExtractLoanChargesForABSCalcInput:IUIInsured%","HomeState":"=IF(%DRExtractLoanChargesForABSCalcInput:HomeState% == '','',%DRExtractLoanChargesForABSCalcInput:HomeState%)","HomeCity":"=IF(%DRExtractLoanChargesForABSCalcInput:HomeCity% == '','',%DRExtractLoanChargesForABSCalcInput:HomeCity%)","FirstPaymentDate":"%DRExtractLoanChargesForABSCalcInput:FirstPaymentDate%","FederalRate":"%DRExtractLoanChargesForABSCalcInput:FederalRate%","ContractRate":"%DRExtractLoanChargesForABSCalcInput:ContractRate%","CoMakerDOB":"=IF(%DRExtractLoanChargesForABSCalcInput:CoMakerDOB% == '','',%DRExtractLoanChargesForABSCalcInput:CoMakerDOB%)","Co-BorrowerDOB":"=IF(%DRExtractLoanChargesForABSCalcInput:Co-BorrowerDOB% == '','',%DRExtractLoanChargesForABSCalcInput:Co-BorrowerDOB%)","CashAdvance":"%DRExtractLoanChargesForABSCalcInput:CashAdvance%","CarClubInsured":"=%DRExtractLoanChargesForABSCalcInput:CarClubInsured%","CarClubAssociateLast":"=IF(ISNOTBLANK(%DRExtractLoanChargesForABSCalcInput:CarClubAssociateLast%),%DRExtractLoanChargesForABSCalcInput:CarClubAssociateLast%,\"\")","CarClubAssociateFirst":"=IF(ISNOTBLANK(%DRExtractLoanChargesForABSCalcInput:CarClubAssociateFirst%),%DRExtractLoanChargesForABSCalcInput:CarClubAssociateFirst%,\"\")","CalcType":"PAYMENT","BranchId":"%DRExtractLoanChargesForABSCalcInput:BranchId%","AmountFinanced":"%DRExtractLoanChargesForABSCalcInput:AmountFinanced%"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVRoundPayload","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVRoundPayload","lwcId":"lwc6"},{"type":"Rest Action","propSetMap":{"useFormulas":true,"type":"Integration","show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"SVRoundPayload","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"retryCount":0,"restPath":"","restOptions":{"xmlEscapeResponse":false,"timeout":100000,"sendBody":true,"params":{},"isCompressed":false,"headers":{},"clientCertificateName":""},"restMethod":"POST","responseJSONPath":"","responseJSONNode":"","preActionLogging":"%endpoint%","postActionLogging":"","namedCredential":"RF_AbsCalcApi","label":"HTTPAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"IF(%SVPaymentInCents:PaymentInCents% == \"Yes\", true, false)","disOnTplt":false,"chainOnStep":false,"additionalOutput":{},"additionalInput":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"HTTPActionForRounding","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bHttpAction":true,"JSONPath":"HTTPActionForRounding","lwcId":"lwc7"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadCreateCalloutLogOnCalculate","additionalOutput":{},"additionalInput":{"Type":"INFO","ResponseBody":"=%HTTPActionABSCall%","RequestBody":"=%SVPayload%","IPName":"RFIP_GetABSCalcPart2","HTTPStatusCode":"=%HTTPActionABSCall:response:status%","EndPoint":"RF_AbsCalcApi"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRPostCreateCalloutLog","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRPostCreateCalloutLog","lwcId":"lwc8"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction1","failureResponse":{},"failureConditionalFormula":"","failOnStepError":false,"executionConditionalFormula":"IF(%SVPaymentInCents:PaymentInCents% == \"Yes\", true, false)","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadCreateCalloutLogOnCalculate","additionalOutput":{},"additionalInput":{"Type":"INFO","ResponseBody":"=%HTTPActionForRounding%","RequestBody":"=%SVRoundPayload%","IPName":"RFIP_GetABSCalcPart2","HTTPStatusCode":"=%HTTPActionForRounding:response:status%","EndPoint":"RF_AbsCalcApi"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRPostCreateCalloutLogForRounded","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRPostCreateCalloutLogForRounded","lwcId":"lwc9"},{"type":"DataRaptor Extract Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorExtractAction2","ignoreCache":false,"failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":" ","disOnTplt":false,"dataRaptor Input Parameters":[],"chainOnStep":false,"bundle":"RFExtractAppendLoanChargeIds","additionalOutput":{},"additionalInput":{"OfferId":"%OfferId%","ApplicationId":"%ApplicationId%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRExtractAppendLoanChargeIds","level":0,"indexInParent":10,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DRExtractAppendLoanChargeIds","lwcId":"lwc10"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues3","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","elementValueMap":{"HTTP":"=IF(%SVPaymentInCents:PaymentInCents% == \"Yes\",%HTTPActionForRounding%,%HTTPActionABSCall%)"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVRoundAndLoanCharge","level":0,"indexInParent":11,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVRoundAndLoanCharge","lwcId":"lwc11"},{"type":"List Merge Action","propSetMap":{"useFormulas":true,"updateFieldValue":{},"sortInDescendingOrder":false,"sortBy":[],"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","primaryListKey":"","mergeListsOrder":["SVRoundAndLoanCharge:HTTP:response:result:computedLoanCharges","DRExtractAppendLoanChargeIds:LC"],"mergeFields":["SVRoundAndLoanCharge:HTTP:response:result:computedLoanCharges:rateCode","DRExtractAppendLoanChargeIds:LC:rateCode"],"label":"ListAction1","hasPrimary":false,"filterListFormula":"","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","dynamicOutputFields":"","disOnTplt":false,"chainOnStep":false,"allowMergeNulls":true,"advancedMergeMap":[],"advancedMerge":false,"additionalOutput":{},"additionalInput":{},"additionalChainableResponse":{},"actionMessage":"","aggElements":{}},"offSet":0,"name":"ListAction","level":0,"indexInParent":12,"bHasAttachment":false,"bEmbed":false,"JSONPath":"ListAction","lwcId":"lwc12"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues5","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","elementValueMap":{"ListLCSummaryType2":"=FILTER(LIST(%ListAction%),'summaryType == \"2\" && included == \"default\"')","ListLCCarClub":"=FILTER(LIST(%ListAction%),'summaryType != \"2\" && description LIKE \"Car Club\"')"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVSummaryType2AndCarClub","level":0,"indexInParent":13,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVSummaryType2AndCarClub","lwcId":"lwc13"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues5","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","elementValueMap":{"SUMSType2":"=SUM(%SVSummaryType2AndCarClub:ListLCSummaryType2:amount%)","SUMCarClub":"=IF((%AppState% == \"MO\" || %AppState% == \"FL\" || %AppState% == \"SC\" || %AppState% == \"VA\"),SUM(%ListLCCarClub:amount%),0)"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SVSUMSType2AndCarClub","level":0,"indexInParent":14,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SVSUMSType2AndCarClub","lwcId":"lwc14"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":false,"sendJSONPath":"SVRoundAndLoanCharge:HTTP","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction2","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"IF(%HTTPActionABSCall:response:error%  == \"null\" || %HTTPActionABSCall:response:error%  == \"\",true,false)","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadPart2ResponseToLCAndABSCalc","additionalOutput":{},"additionalInput":{"results":"=%ListAction%","SumNonRFDebts":"=%DRExtractLoanChargesForABSCalcInput:SumNonRFDebts%","SUMSType2":"=%SVSUMSType2AndCarClub:SUMSType2%","SUMRFAndINCDebt":"=%DRExtractLoanChargesForABSCalcInput:SUMRFAndINCDebt%","SUMCarClub":"=%SVSUMSType2AndCarClub:SUMCarClub%","OfferId":"=%OfferId%","CoApplicantAccountId":"=%DRExtractAppendLoanChargeIds:CoApplicantAccountId%","ApplicationId":"%ApplicationId%","ApplicantAccountId":"=%DRExtractAppendLoanChargeIds:ApplicantAccountId%","ABSId":"=%DRExtractAppendLoanChargeIds:ABSId%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRLoadPart2ResponseToLCAndABSCalc","level":0,"indexInParent":15,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRLoadPart2ResponseToLCAndABSCalc","lwcId":"lwc15"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction4","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadABSResponseToOffer","additionalOutput":{},"additionalInput":{"Term":"=%SVRoundAndLoanCharge:HTTP:response:result:term%","Payment":"=%SVRoundAndLoanCharge:HTTP:response:result:regularPaymentAmt%","PayOffTotal":"=%PayOffTotal%","OfferId":"=%OfferId%","LoanAmount":"=%SVRoundAndLoanCharge:HTTP:response:result:cashToCustomer% - %DRExtractLoanChargesForABSCalcInput:SumNonRFDebts% + %PayOffTotal%","FirstPayment":"=%SVRoundAndLoanCharge:HTTP:response:result:firstPaymentAmount%","EnableDEButton":"=IF((%HTTPActionABSCall:response:error%  == \"null\" || %HTTPActionABSCall:response:error%  == \"\") && %DRExtractLoanChargesForABSCalcInput:PPorDebtBChanged%,true,%DRExtractLoanChargesForABSCalcInput:EnableFinalDE%)","CollateralCode":"=%DRExtractCollateralAutoRefinaceForCalculate:CollateralCode%","CashToCustomer":"=%SVRoundAndLoanCharge:HTTP:response:result:cashToCustomer% - %DRExtractLoanChargesForABSCalcInput:SumNonRFDebts%"},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRLoadABSResponseToOffer","level":0,"indexInParent":16,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRLoadABSResponseToOffer","lwcId":"lwc16"},{"type":"DataRaptor Post Action","propSetMap":{"useFormulas":true,"show":null,"sendOnlyAdditionalInput":true,"sendJSONPath":"","sendJSONNode":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"responseJSONPath":"","responseJSONNode":"","label":"DataRaptorPostAction3","failureResponse":{},"failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"","disOnTplt":false,"chainOnStep":false,"bundle":"RFLoadNeedsReviewToOffer","additionalOutput":{},"additionalInput":{"OfferId":"=%OfferId%","NRfromUI":false},"actionMessage":"","aggElements":{}},"offSet":0,"name":"DRLoadNeedsReviewToOffer","level":0,"indexInParent":17,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DRLoadNeedsReviewToOffer","lwcId":"lwc17"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues5","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"IF(AppState == \"KY\",true,false)","elementValueMap":{"ListLoanCharges":"=FILTER(LIST(%ListAction%),'rateCode == \"66\" && included == \"default\" || rateCode == \"11\" && included == \"default\"')"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SetValuesGetList","level":0,"indexInParent":18,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValuesGetList","lwcId":"lwc18"},{"type":"Set Values","propSetMap":{"show":null,"responseJSONPath":"","responseJSONNode":"","label":"SetValues5","failureConditionalFormula":"","failOnStepError":true,"executionConditionalFormula":"IF(%AppState% == \"KY\",true,false)","elementValueMap":{"FinalAmountFinanceCharge":"=SUM(%SetValuesGetList:ListLoanCharges:amount%)"},"disOnTplt":false,"chainOnStep":false,"actionMessage":"","aggElements":{}},"offSet":0,"name":"SetValuesGetAmountFinanceCharge","level":0,"indexInParent":19,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValuesGetAmountFinanceCharge","lwcId":"lwc19"},{"type":"Response Action","propSetMap":{"vlcResponseHeaders":{},"useFormulas":true,"show":null,"sendJSONPath":"","sendJSONNode":"","returnOnlyAdditionalOutput":true,"returnFullDataJSON":false,"responseJSONPath":"","responseJSONNode":"","responseFormat":"JSON","responseDefaultData":{},"label":"ResponseAction1","executionConditionalFormula":"","disOnTplt":false,"additionalOutput":{"TotalNote":"=%SVRoundAndLoanCharge:HTTP:response:result:totalNote%","TotalFinanceCharge":"=IF(%AppState% == \"KY\",%SetValuesGetAmountFinanceCharge:FinalAmountFinanceCharge%,%SVRoundAndLoanCharge:HTTP:response:result:totalFinanceCharge%)","Term":"=%SVRoundAndLoanCharge:HTTP:response:result:term%","StateAPR":"=%SVRoundAndLoanCharge:HTTP:response:result:stateAPR%","PaymentDiff":"=%DRExtractLoanChargesForABSCalcInput:CurrentPayment% - %SVRoundAndLoanCharge:HTTP:response:result:regularPaymentAmt%","PaymentAmount":"=%SVRoundAndLoanCharge:HTTP:response:result:regularPaymentAmt%","LoanAmount":"=%SVRoundAndLoanCharge:HTTP:response:result:cashToCustomer% - %DRExtractLoanChargesForABSCalcInput:SumNonRFDebts% + %PayOffTotal%","IsCalculateClicked":true,"FirstPayment":"=%SVRoundAndLoanCharge:HTTP:response:result:firstPaymentAmount%","FederalAPR":"=%SVRoundAndLoanCharge:HTTP:response:result:federalAPR%","Error":"=IF(%SVRoundAndLoanCharge:HTTP:response:error% == null || %SVRoundAndLoanCharge:HTTP:response:error% == '','',%SVRoundAndLoanCharge:HTTP:response:error%)","EnableFinalDE":"=IF((%HTTPActionABSCall:response:error%  == \"null\" || %HTTPActionABSCall:response:error%  == \"\") && %DRExtractLoanChargesForABSCalcInput:PPorDebtBChanged%,true,%DRExtractLoanChargesForABSCalcInput:EnableFinalDE%)","ContractRate":"=%DRExtractLoanChargesForABSCalcInput:ContractRate%","CashToCustomer":"=%SVRoundAndLoanCharge:HTTP:response:result:cashToCustomer% - %DRExtractLoanChargesForABSCalcInput:SumNonRFDebts%","AmountFinanced":"=(%SVRoundAndLoanCharge:HTTP:response:result:cashToCustomer% - %DRExtractLoanChargesForABSCalcInput:SumNonRFDebts%) + %SVSUMSType2AndCarClub:SUMSType2% + %SVSUMSType2AndCarClub:SUMCarClub% + %DRExtractLoanChargesForABSCalcInput:SUMRFAndINCDebt%","APIErrorMsg":"=IF(%SVRoundAndLoanCharge:HTTP:response:error% == null || %SVRoundAndLoanCharge:HTTP:response:error% == '',\"Please refresh the page and try again.If this issue persists, please contact technical support\",%SVRoundAndLoanCharge:HTTP:response:error%)","APIError":"=IF(%SVRoundAndLoanCharge:HTTP%,\"No\",\"Yes\")"},"aggElements":{}},"offSet":0,"name":"ResponseAction","level":0,"indexInParent":20,"bHasAttachment":false,"bEmbed":false,"JSONPath":"ResponseAction","lwcId":"lwc20"}],"bReusable":false,"bpVersion":3,"bpType":"RFIP","bpSubType":"GetABSCalcpart2","bpLang":"Procedure","bHasAttachment":false,"lwcVarMap":{}};
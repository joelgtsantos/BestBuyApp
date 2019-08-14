//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "JoelAjucumCert",
    appName: "JoelAjucumCert",
    appVersion: "1.0.0",
    isturlbase: "https://coned-dev.konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "95292094aa004e6178a2bd8f4831a986",
    appSecret: "7d2c07552ed0f550b3b6d77b1ebf0bda",
    serviceUrl: "https://100020297.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100020297.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://coned-dev.konycloud.com/services/IST",
            "BestBuyJAPI": "https://coned-dev.konycloud.com/services/BestBuyJAPI"
        },
        "service_doc_etag": "0000016C918CDA58",
        "appId": "be253bf6-8541-4327-960f-3c9982138fd9",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "TestAPI",
        "reportingsvc": {
            "session": "https://coned-dev.konycloud.com/services/IST",
            "custom": "https://coned-dev.konycloud.com/services/CMS"
        },
        "baseId": "b6e915ff-fc0d-4050-9eb9-8ddb3ee50bbe",
        "app_default_version": "1.0",
        "services_meta": {
            "BestBJAPI": {
                "offline": false,
                "metadata_url": "https://coned-dev.konycloud.com/services/metadata/v1/BestBJAPI",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://coned-dev.konycloud.com/services/data/v1/BestBJAPI"
            },
            "BestBuyJAPI": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://coned-dev.konycloud.com/services/BestBuyJAPI"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8400
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: applicationController.postAppInitCallBack,
        showstartupform: function() {
            new kony.mvc.Navigation("frmMain").navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;
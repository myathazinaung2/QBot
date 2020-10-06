export const environment = {
    production: false,
    apiBaseUrl: "https://qbotestalfa.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotestalfa-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "aa81ea33-cf73-444b-b305-006b188a8fb4",
        clientId: "7be31db2-3861-4ff1-8038-7fcbf7eea125",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};

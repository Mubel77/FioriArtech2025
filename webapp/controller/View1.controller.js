sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("claseaboutme.controller.View1", {
        onInit() {
            // Cargar datos personales desde JSON
            const oModel = new JSONModel("model/personal.json");
            this.getView().setModel(oModel, "personal");
            
            // También se puede acceder al modelo i18n
            const i18nModel = this.getOwnerComponent().getModel("i18n");
            if (i18nModel) {
                this.getView().setModel(i18nModel, "i18n");
            }
        }
    });
});
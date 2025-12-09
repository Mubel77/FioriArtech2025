sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (BaseController, JSONModel) => {
  "use strict";

  return BaseController.extend("claseaboutme.controller.App", {
      onInit() {
        // El modelo personal ya está cargado en el Component
        // Pero lo aseguramos aquí también
        let oComponent = this.getOwnerComponent();
        let oPersonalModel = oComponent.getModel("personal");
        
        if (!oPersonalModel) {
          oPersonalModel = new JSONModel("model/personal.json");
          oComponent.setModel(oPersonalModel, "personal");
        }
        
        // Asegurar que el modelo i18n está disponible
        let oI18nModel = oComponent.getModel("i18n");
        if (oI18nModel) {
          this.getView().setModel(oI18nModel, "i18n");
        }
      }
  });
});
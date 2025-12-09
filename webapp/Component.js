sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("claseaboutme.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Llamar al init del componente padre
            UIComponent.prototype.init.apply(this, arguments);

            // Cargar modelo de datos personales
            var oPersonalModel = new JSONModel("model/personal.json");
            this.setModel(oPersonalModel, "personal");

            // El modelo i18n se carga automáticamente desde manifest.json
            // Crear la vista raíz
            this.getRouter().initialize();
        },

        getContentDensityClass: function () {
            if (!this._sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});

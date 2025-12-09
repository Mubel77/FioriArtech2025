sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("claseaboutme.controller.AboutHeader", {

        onInit: function () {
            // El modelo personal es heredado del componente padre
        },

        onOpenEmail: function () {
            var email = this.getView().getModel("personal").getProperty("/correo");
            window.open("mailto:" + email);
        },

        onOpenPortfolio: function () {
            var url = this.getView().getModel("personal").getProperty("/portfolio");
            window.open(url, "_blank");
        },

        onOpenLinkedIn: function () {
            var url = this.getView().getModel("personal").getProperty("/linkedin");
            window.open(url, "_blank");
        },

        onOpenGithub: function () {
            var url = this.getView().getModel("personal").getProperty("/github");
            window.open(url, "_blank");
        }

    });
});

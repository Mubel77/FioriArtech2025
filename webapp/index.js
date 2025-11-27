sap.ui.define([], function () {
    "use strict";
    // alert("Hola Mundo Fiori");

    // new sap.m.Text({
    //     text: "Hola Mundo Fiori"
    // }).placeAt("content");

jQuery.sap.includeStyleSheet("css/styles.css");
    sap.ui.core.mvc.XMLView.create({
        viewName: "clase2fiori.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    })
});
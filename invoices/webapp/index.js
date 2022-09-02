// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer
     */
    function (ComponentContainer) {
        new ComponentContainer({
            name: "dtt.invoices",
            settings : {id:"invoices"},
            async: true
        }).placeAt("contenido");
    });
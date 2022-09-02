
sap.ui.define([
    "dtt/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (Models, ResourceModel, UIComponent) {
        return UIComponent.extend("dtt.invoices.Component", {
            metadata: {
                manifest: "json"
                
            },
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                var i18nModel = new ResourceModel({ bundleName: "dtt.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n")

            }
        })
    })
sap.ui.controller("com.mhp.integration.hr.mhpintegrationcockpit.controller.ExtendedAnalytical",{onAfterRendering:function(){var t=this.getView();t&&!t.hasStyleClass("mhpintegrationcockpit")&&t.addStyleClass("mhpintegrationcockpit");try{t.byId("table").se+
tShowTablePersonalisation(!1)}catch(t){}},onListNavigationExtension:function(t){var e=t.getSource().getBindingContext();return sap.ushell.Container.getServiceAsync("CrossApplicationNavigation").then(function(t){var n=t.hrefForExternal({target:{semanticOb+
ject:"HR_INT_COCKPIT",action:"maintain"}})||"",i=e.getObject(),a=this.getOwnerComponent().getModel("integrationService"),o=a.createKey("/IntegrationRunSet",{IntRun:i.INT_RUN,CloudId:i.CLOUD_ID||"",SapId:i.SAP_ID||"00000000"});t.toExternal({target:{shellH+
ash:n+"&/"+o}})}.bind(this)),!0}});
//# sourceMappingURL=../maps/controller/ExtendedAnalytical.controller.js.map


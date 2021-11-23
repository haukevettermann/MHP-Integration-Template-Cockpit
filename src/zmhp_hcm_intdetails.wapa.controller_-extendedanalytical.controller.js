sap.ui.controller("com.mhp.integration.hr.mhpintegrationmaintain.controller.ExtendedAnalytical",{onAfterRendering:function(){var e=this.extensionAPI.getTransactionController(),s=sap.ui.getCore().getMessageManager(),t=this.getView().byId("showMessages"),i+
=sap.ui.getVersionInfo("sap.m"),n=!1;t&&i&&i.version&&i.version.startsWith("1.6")&&(n=!0),e.attachAfterSave(function(e){n&&(t.setVisible(!1),s.removeAllMessages()),e.saveEntityPromise.then(function(){this.extensionAPI.refresh()}.bind(this),function(e){if+
(n){var i=this.getView().getBindingContext().getPath();if(!i.startsWith("/FieldChangeSet")){JSON.parse(e.response.responseText).error.innererror.errordetails.forEach(function(e){s.addMessages(new sap.ui.core.message.Message({type:sap.ui.core.MessageType.+
Error,message:e.message,code:e.code,target:i}))},this),t.setVisible(!0),jQuery.sap.delayedCall(500,this,function(){t.firePress()})}}}.bind(this))}.bind(this))}});
//# sourceMappingURL=../maps/controller/ExtendedAnalytical.controller.js.map


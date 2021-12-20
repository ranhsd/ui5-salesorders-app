sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
], function (BaseController, JSONModel) {
    "use strict";
    return BaseController.extend("com.company.salesorderapp.salesorderapp.controller.Order", {

        onInit: function () {
            var viewModel = new JSONModel({
                objectId: "",
                orderId: ""
            });

            this.setModel(viewModel, "orderView");

            this.getRouter().getRoute("order").attachPatternMatched(this._onOrderRouteMatched, this);
        },

        onBeforeRendering: function () {
        },

        onAfterRendering: function () {
        },

        onExit: function () {
        },

        _onOrderRouteMatched: function(oEvent){
            var sObjectId =  oEvent.getParameter("arguments").objectId;
            var sOrderId =  oEvent.getParameter("arguments").orderId;
            this.getModel("orderView").setProperty("/objectId", "Customer ID: " + sObjectId);
            this.getModel("orderView").setProperty("/orderId", "Order ID: " + sOrderId);
        }

    });

});
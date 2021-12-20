/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/company/salesorderapp/salesorderapp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
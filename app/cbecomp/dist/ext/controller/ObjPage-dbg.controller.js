sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('cbecomp.ext.controller.ObjPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf cbecomp.ext.controller.ObjPage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onAfterBinding: async function(oBindingContext){
					debugger
					let oHbox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent()
					oHbox.getItems()[0].addStyleClass('BorderClass')
					// oHbox.getItems()[1].addStyleClass('BorderClass')
					let oTablesHbox = oHbox.getItems()[1].getContent()[0].getItems()[0].getItems()[1];
					let oTablesHbox1 = oHbox.getItems()[1].getContent()[0].getItems()[1].getItems()[1];
					let oTablesHbox2 = oHbox.getItems()[1].getContent()[0].getItems()[2].getItems()[1];
					let oTablesHbox3 = oHbox.getItems()[1].getContent()[0].getItems()[3].getItems()[1];
					let oTablesHbox4 = oHbox.getItems()[1].getContent()[0].getItems()[4].getItems()[1];
					// oTablesHbox.getItems().forEach(tab=>{
					// 	tab.addStyleClass("BorderClass")
					// })
					let oTotalColumn = oTablesHbox.getItems()[2].getItems()[5].getColumns()[2];
					let oTotalColumn1 = oTablesHbox1.getItems()[1].getItems()[5].getColumns()[2];
					let oTotalColumn2 = oTablesHbox2.getItems()[1].getItems()[5].getColumns()[2];
					let oTotalColumn3 = oTablesHbox3.getItems()[1].getItems()[5].getColumns()[2];
					let oTotalColumn4 = oTablesHbox4.getItems()[1].getItems()[5].getColumns()[2];
					oTablesHbox.getItems()[2].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox.getItems()[2].getItems()[5].getColumns()[1].setVisible(false);
					oTablesHbox.getItems()[0].setVisible(false);
					oTablesHbox.getItems()[1].setVisible(false);

					oTablesHbox1.getItems()[0].setVisible(false);
					oTablesHbox1.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox1.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox2.getItems()[0].setVisible(false);
					oTablesHbox2.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox2.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox3.getItems()[0].setVisible(false);
					oTablesHbox3.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox3.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox4.getItems()[0].setVisible(false);
					oTablesHbox4.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox4.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					 $.ajax({
						url: "",
						success: function(data){
							debugger
							// let oIcon = new sap.ui.core.IconPool.getIconURI("expand"); 
							oTotalColumn.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"12px"
							}))
							let oHeaderContainer = oTotalColumn.getHeader();
							oHeaderContainer.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn.oParent.oParent.oParent.getItems()[1].setVisible(true);
										oTotalColumn.oParent.getColumns()[0].setVisible(true);
										oTotalColumn.oParent.getColumns()[1].setVisible(true);
									} else {
										oTotalColumn.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn.oParent.oParent.oParent.getItems()[1].setVisible(false);
										oTotalColumn.oParent.getColumns()[0].setVisible(false);
										oTotalColumn.oParent.getColumns()[1].setVisible(false);
									}
									
								}
							}))
						

							// second vendor


							oTotalColumn1.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"12px"
							}))
							let oHeaderContainer1 = oTotalColumn1.getHeader();
							oHeaderContainer1.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer1.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn1.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn1.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn1.oParent.getColumns()[0].setVisible(true);
										oTotalColumn1.oParent.getColumns()[1].setVisible(true);
									} else {
										oTotalColumn1.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn1.oParent.getColumns()[0].setVisible(false);
										oTotalColumn1.oParent.getColumns()[1].setVisible(false);
									}
									
								}
							}))

							// third vendor

							oTotalColumn2.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"12px"
							}))
							let oHeaderContainer2 = oTotalColumn2.getHeader();
							oHeaderContainer2.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer2.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn2.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn2.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn2.oParent.getColumns()[0].setVisible(true);
										oTotalColumn2.oParent.getColumns()[1].setVisible(true);
									} else {
										oTotalColumn2.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn2.oParent.getColumns()[0].setVisible(false);
										oTotalColumn2.oParent.getColumns()[1].setVisible(false);
									}
									
								}
							}))


							// fourth vendor

							oTotalColumn3.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"12px"
							}))
							let oHeaderContainer3 = oTotalColumn3.getHeader();
							oHeaderContainer3.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer3.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn3.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn3.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn3.oParent.getColumns()[0].setVisible(true);
										oTotalColumn3.oParent.getColumns()[1].setVisible(true);
									} else {
										oTotalColumn3.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn3.oParent.getColumns()[0].setVisible(false);
										oTotalColumn3.oParent.getColumns()[1].setVisible(false);
									}
									
								}
							}))


							// fifth vendor

							oTotalColumn4.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"12px"
							}))
							let oHeaderContainer4 = oTotalColumn4.getHeader();
							oHeaderContainer4.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer4.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn4.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn4.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn4.oParent.getColumns()[0].setVisible(true);
										oTotalColumn4.oParent.getColumns()[1].setVisible(true);
									} else {
										oTotalColumn4.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn4.oParent.getColumns()[0].setVisible(false);
										oTotalColumn4.oParent.getColumns()[1].setVisible(false);
									}
									
								}
							}))

						}
						
					})
			}
		}
		}
	});
});

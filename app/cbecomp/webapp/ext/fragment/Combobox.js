sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onChangefun: function (oEvent) {
            debugger
        },
        collapseFunD:function (oEvent) {
            debugger
            var excel_d_group = oEvent.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[8];

            var oTablesHbox = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];
            var oTablesHbox1 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];
            var oTablesHbox2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];
            var oTablesHbox3 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];
            var oTablesHbox4 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];

            var oVbox = oTablesHbox.getParent().getItems()[2].mAggregations.items[1];
            var oVbox1 = oTablesHbox1.getParent().getItems()[2].mAggregations.items[1];
            var oVbox2 = oTablesHbox2.getParent().getItems()[2].mAggregations.items[1];
            var oVbox3 = oTablesHbox3.getParent().getItems()[2].mAggregations.items[1];
            var oVbox4 = oTablesHbox4.getParent().getItems()[2].mAggregations.items[1];


            if (excel_d_group.getVisible()==true) {
                excel_d_group.setVisible(false);


                oEvent.getSource().mProperties.src = "sap-icon://navigation-right-arrow"
                // Vendor1
					let tabitems
					let tabfrag = oTablesHbox.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(false)
							}
						})
					})

					// Vendor 2

					tabfrag = oTablesHbox1.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(false)
							}
						})
					})

					// Vendor 3

					tabfrag = oTablesHbox2.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(false)
							}
						})
					})

					// Vendor 4

					tabfrag = oTablesHbox3.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(false)
							}
						})
					})


					//Vendor 5

					tabfrag = oTablesHbox4.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(false)
							}
						})
					})
                
            }
            else
            {
                excel_d_group.setVisible(true);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-up-arrow"
                // Vendor1
					let tabitems
					let tabfrag = oTablesHbox.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(true)
							}
						})
					})

					// Vendor 2

					tabfrag = oTablesHbox1.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(true)
							}
						})
					})

					// Vendor 3

					tabfrag = oTablesHbox2.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(true)
							}
						})
					})

					// Vendor 4

					tabfrag = oTablesHbox3.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(true)
							}
						})
					})


					//Vendor 5

					tabfrag = oTablesHbox4.getItems();
					tabfrag.forEach((frag)=>{
						tabitems = frag.getItems()[5].getItems();
						tabitems.forEach((item,index)=>{
							// if(index == 15 ){
							// 	item.setVisible(false)
							// } else 
							if(index >= 9 && index <=13){
								item.setVisible(true)
							}
						})
					})
            }
        },
        collapseFunG: function (oEvent) {
            var oTablesHbox = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[0].mAggregations.items[1];
            var oTablesHbox1 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[1].mAggregations.items[1];
            var oTablesHbox2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[2].mAggregations.items[1];
            var oTablesHbox3 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[3].mAggregations.items[1];
            var oTablesHbox4 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().mAggregations.items[1].getContent()[0].mAggregations.items[4].mAggregations.items[1];

            var oVbox = oTablesHbox.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox1 = oTablesHbox1.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox2 = oTablesHbox2.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox3 = oTablesHbox3.getParent().getItems()[2];//.mAggregations.items[1];
            var oVbox4 = oTablesHbox4.getParent().getItems()[2];//.mAggregations.items[1];

            debugger
            var excel_g_group = oEvent.getSource().getParent().getParent().getParent().getParent().mAggregations.formElements[14];

            if(excel_g_group.getVisible()==true){
                excel_g_group.setVisible(false);
                oVbox.setVisible(false);
                oVbox1.setVisible(false);
                oVbox2.setVisible(false);
                oVbox3.setVisible(false);
                oVbox4.setVisible(false);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-right-arrow"
            }else
            {
                excel_g_group.setVisible(true);
                oVbox.setVisible(true);
                oVbox1.setVisible(true);
                oVbox2.setVisible(true);
                oVbox3.setVisible(true);
                oVbox4.setVisible(true);
                oEvent.getSource().mProperties.src = "sap-icon://navigation-down-arrow"
            }
        }
    };
});

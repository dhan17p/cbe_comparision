sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("cbecomp.ext.controller.ObjPage",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(e){debugger;let t=this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent();t.getItems()[0].addStyleClass("BorderClass");let s=t.getItems()[1].getContent()[0].getItems()[0].getItems()[1];let n=t.getItems()[1].getContent()[0].getItems()[1].getItems()[1];let o=t.getItems()[1].getContent()[0].getItems()[2].getItems()[1];let a=t.getItems()[1].getContent()[0].getItems()[3].getItems()[1];let r=t.getItems()[1].getContent()[0].getItems()[4].getItems()[1];let l=s.getItems()[2].getItems()[5].getColumns()[2];let i=n.getItems()[1].getItems()[5].getColumns()[2];let g=o.getItems()[1].getItems()[5].getColumns()[2];let m=a.getItems()[1].getItems()[5].getColumns()[2];let u=r.getItems()[1].getItems()[5].getColumns()[2];s.getItems()[2].getItems()[5].getColumns()[0].setVisible(false);s.getItems()[2].getItems()[5].getColumns()[1].setVisible(false);s.getItems()[0].setVisible(false);s.getItems()[1].setVisible(false);n.getItems()[0].setVisible(false);n.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);n.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);o.getItems()[0].setVisible(false);o.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);o.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);a.getItems()[0].setVisible(false);a.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);a.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);r.getItems()[0].setVisible(false);r.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);r.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);$.ajax({url:"",success:function(e){debugger;l.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"12px"}));let t=l.getHeader();t.addContent(new sap.m.Label({text:"Total Amount (INR)"}));t.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(l.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){l.oParent.oParent.oParent.getItems()[0].setVisible(true);l.oParent.oParent.oParent.getItems()[1].setVisible(true);l.oParent.getColumns()[0].setVisible(true);l.oParent.getColumns()[1].setVisible(true)}else{l.oParent.oParent.oParent.getItems()[0].setVisible(false);l.oParent.oParent.oParent.getItems()[1].setVisible(false);l.oParent.getColumns()[0].setVisible(false);l.oParent.getColumns()[1].setVisible(false)}}}));i.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"12px"}));let s=i.getHeader();s.addContent(new sap.m.Label({text:"Total Amount (INR)"}));s.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(i.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){i.oParent.oParent.oParent.getItems()[0].setVisible(true);i.oParent.getColumns()[0].setVisible(true);i.oParent.getColumns()[1].setVisible(true)}else{i.oParent.oParent.oParent.getItems()[0].setVisible(false);i.oParent.getColumns()[0].setVisible(false);i.oParent.getColumns()[1].setVisible(false)}}}));g.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"12px"}));let n=g.getHeader();n.addContent(new sap.m.Label({text:"Total Amount (INR)"}));n.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(g.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){g.oParent.oParent.oParent.getItems()[0].setVisible(true);g.oParent.getColumns()[0].setVisible(true);g.oParent.getColumns()[1].setVisible(true)}else{g.oParent.oParent.oParent.getItems()[0].setVisible(false);g.oParent.getColumns()[0].setVisible(false);g.oParent.getColumns()[1].setVisible(false)}}}));m.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"12px"}));let o=m.getHeader();o.addContent(new sap.m.Label({text:"Total Amount (INR)"}));o.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(m.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){m.oParent.oParent.oParent.getItems()[0].setVisible(true);m.oParent.getColumns()[0].setVisible(true);m.oParent.getColumns()[1].setVisible(true)}else{m.oParent.oParent.oParent.getItems()[0].setVisible(false);m.oParent.getColumns()[0].setVisible(false);m.oParent.getColumns()[1].setVisible(false)}}}));u.setHeader(new sap.m.HeaderContainer({showDividers:false,height:"12px"}));let a=u.getHeader();a.addContent(new sap.m.Label({text:"Total Amount (INR)"}));a.addContent(new sap.ui.core.Icon({src:"sap-icon://expand",color:"darkblue",hoverColor:"red",activeColor:"darkgreen",size:"12px",press:function(e){debugger;if(u.oParent.oParent.oParent.getItems()[0].mProperties.visible==false){u.oParent.oParent.oParent.getItems()[0].setVisible(true);u.oParent.getColumns()[0].setVisible(true);u.oParent.getColumns()[1].setVisible(true)}else{u.oParent.oParent.oParent.getItems()[0].setVisible(false);u.oParent.getColumns()[0].setVisible(false);u.oParent.getColumns()[1].setVisible(false)}}}))}})}}}})});
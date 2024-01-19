sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cbecomp/test/integration/FirstJourney',
		'cbecomp/test/integration/pages/ItemList',
		'cbecomp/test/integration/pages/ItemObjectPage',
		'cbecomp/test/integration/pages/supplierObjectPage'
    ],
    function(JourneyRunner, opaJourney, ItemList, ItemObjectPage, supplierObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cbecomp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheItemList: ItemList,
					onTheItemObjectPage: ItemObjectPage,
					onThesupplierObjectPage: supplierObjectPage
                }
            },
            opaJourney.run
        );
    }
);
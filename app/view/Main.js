Ext.define("MobileReadings.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    xtype:'mainView',

    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Inicio',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Mobile Readings'
                },
                
                xtype: 'listContracts',
            },
            {
                title: 'Contratos',
                iconCls: 'compose',
            
                xtype: 'formContractsNew',
            }

        ]
    }
});
Ext.define("MobileReadings.store.Contracts", {
    requires: ['Ext.data.proxy.LocalStorage'],
    extend: "Ext.data.Store",
    config: {
        model: 'MobileReadings.model.Contract',
        /*proxy: {
                type: 'ajax',
                url : 'http://localhost/contracts.html',
                reader: {
                    type: 'json'
                }
            },

        autoLoad: true*/

        proxy: {
            type: 'localstorage',
            id: 'mobileReadings4'
        },
        autoLoad: true,
        autoSync: true
    }

});
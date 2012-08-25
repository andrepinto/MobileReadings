Ext.define('MobileReadings.model.Contract', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
        	{name: 'id'},
            {name: 'nome'},
            {name: 'email'},
            {name: 'descricao'},
            {name: 'cil'}
        ]
    }
});
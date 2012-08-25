Ext.define('MobileReadings.view.ReadingsView',{

	extend: 'Ext.Panel',
	xtype: 'readingsView',
	requires: ['Ext.form.FieldSet','Ext.field.Email'],
	config: {
		layout: 'vbox',
		items:[
			{
		        docked: 'top',
	            xtype: 'toolbar',
	            title: 'Leituras',
	            itemId: 'toolbarOptions',
	            items: [
	                {
	                    xtype: 'button',
	                    ui: 'back',
	                    action: 'returnContractsList',
	                    text: 'voltar'
	                }
	            ]
	        },
			{
	        	xtype: 'fieldset',
	        	title: 'Dados',
	        	items: [
	        		{
	        			xtype: 'textfield',
	        			name: 'cil',
	        			label: 'Cil',
	        			itemId:'lbCilSend',
	        			disabled :true
	        			
	        		}
	        	],
				margin: '10 10 10 10',
				height: '40px',
			},

			{
	        	xtype: 'fieldset',
	        	title: 'Dados a enviar',
	        	items: [
	        	{
	        			xtype: 'textfield',
	        			name: 'leitura',
	        			label: 'Leitura'
	        	}
	        			
	        	],

				margin: '40 10 10 10',
				height: '150px',
			},

			
		]
	}


});
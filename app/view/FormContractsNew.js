Ext.define('MobileReadings.view.FormContractsNew',{

     extend: 'Ext.form.Panel',
     xtype: 'formContractsNew',

    config: {
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            title: 'Novo Contrato',
	            itemId: 'toolbarFormContato',
	           
	        },
	        {
	        	xtype: 'fieldset',
	        	title: 'Dados do Cliente',
	        	items: [
	        		{
	        			xtype: 'textfield',
	        			name: 'nome',
	        			label: 'Nome'
	        		},
	        		{
	        			xtype: 'emailfield',
	        			name: 'email',
	        			label: 'Email'
	        		}
	        	]
	        },

	         {
	        	xtype: 'fieldset',
	        	title: 'Detalhes do Contrato',
	        	items: [

	        		{
	        			xtype: 'textfield',
	        			name: 'descricao',
	        			label: 'Desc.'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'cil',
	        			label: 'Cil'
	        		}
	        	]
	        },
	        {
	        	xtype: 'button',
	        	action: 'saveContract',
	        	ui: 'confirm',
	        	text: 'Criar'
	        },
	       
		]
	}
});


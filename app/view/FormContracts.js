Ext.define('MobileReadings.view.FormContracts',{

     extend: 'Ext.form.Panel',
     xtype: 'formContracts',

    config: {
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            title: 'Contrato',
	            itemId: 'toolbarFormContato',
	            items: [
	                {
	                    xtype: 'button',
	                    ui: 'back',
	                    action: 'returnContractsList',
	                    text: 'voltar'
	                },
	                {
               xtype   : 'spacer'
           },
           {
               ui: 'decline',
               text    : 'eliminar',
               action: 'deleteContract'
           }
	            ]
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
	        	action: 'updateContract',
	        	ui: 'confirm',
	        	text: 'Gravar'
	        },
	        {
	        	xtype: 'container',
	        	height: 20	
	        },
	        {
	        	xtype: 'button',
	        	action: 'deletarContato',
	        	ui: 'action',
	        	text: 'Eliminar',
	        	hidden: true
	        }
		]
	}
});


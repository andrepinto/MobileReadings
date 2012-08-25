Ext.define('MobileReadings.view.OptionsView', {

	extend: 'Ext.Panel',
	xtype: 'optionsView',
	requires: ['Ext.form.FieldSet', 'Ext.field.Email'],
	config: {
		layout: 'vbox',
		items: [{
			docked: 'top',
			xtype: 'toolbar',
			//title: 'Contrato',
			itemId: 'toolbarOptions',
			items: [{
				xtype: 'button',
				ui: 'back',
				action: 'returnContractsList',
				text: 'voltar'
			}]
		}, {
			xtype: 'fieldset',
			title: 'Contrato Seleccionado',
			items: [{
				xtype: 'textfield',
				name: 'cil',
				label: 'Cil',
				itemId: 'lbCil',
				disabled: true

			}],
			margin: '10 10 10 10',
			height: '40px',
		},

		{
			xtype: 'fieldset',
			title: 'Operações',
			items: [{
				xtype: 'button',
				ui: 'confirm',
				margin: '10 10 10 10',
				text: 'Enviar Leitura',
				action: 'sendReading'
			}, {
				xtype: 'button',

				margin: '10 10 10 10',
				text: 'Editar Dados',
				action: 'editContract'

			}],

			margin: '40 10 10 10',
			height: '150px',
		},


		]
	}


});
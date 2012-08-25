Ext.define('MobileReadings.controller.AppCtrl',{
	extend: 'Ext.app.Controller',
	config: {

	/*	routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList'
		},*/

		refs: {
			mainView: {
				xtype: 'mainView',
				selector: 'mainView',
				autoCreate: true
			},

			formContracts: {
				xtype: 'formContracts',
				selector: 'formContracts',
				autoCreate: true
			},

			formContractsNew: {
				xtype: 'formContractsNew',
				selector: 'formContractsNew',
				autoCreate: true
			},

			optionsView: {
				xtype: 'optionsView',
				selector: 'optionsView',
				autoCreate: true
			},

			readingsView: {
				xtype: 'readingsView',
				selector: 'readingsView',
				autoCreate: true
			},

			listContracts: {
				xtype: 'listContracts',
				selector: 'listContracts',
				autoCreate: true
			},			

			toolbarOptions: '#toolbarOptions',
			
			lbCil: '#lbCil',

			lbCilSend: '#lbCilSend'

		},

		control: {
			
			'button[action=returnContractsList]' : {
				tap: 'viewContractList'
			},

			'button[action=saveContract]' : {
				tap: 'saveContract'
			},

			'button[action=updateContract]' : {
				tap: 'updateContract'
			},

			'button[action=deleteContract]' : {
				tap: 'deleteContract'
			},
			
			'button[action=editContract]' : {
				tap: 'editContract'
			},

			'button[action=sendReading]' : {
				tap: 'sendReading'
			},
			

			listContracts: {
				itemtap: 'viewCntractForm'
			},

		
		},

		selectRecord:'',
	},

	

	viewContractList: function(){
		Ext.Viewport.setActiveItem(this.getMainView());

	},

	viewCntractForm: function(view, index, target, record, evt, opts){
		
		Ext.Viewport.setActiveItem(this.getOptionsView());
		this.getToolbarOptions().setTitle(record.get('descricao'));
		this.getLbCil().setValue(record.get('cil'));
		this.selectRecord=record;

		console.log(this.selectRecord);
	},

	editContract:function(){
		var record = this.selectRecord;
		if(record && record.data){
			this.getFormContracts().setRecord(record);	
		
		}
		console.log(record);
		Ext.Viewport.setActiveItem(this.getFormContracts());
	},


	saveContract: function(){

		var form 	= this.getFormContractsNew();
		contract = Ext.create('MobileReadings.model.Contract', form.getValues()),
		store	= Ext.getStore('Contracts');

		store.add(contract);
		console.log('New contract');

		this.getFormContractsNew().reset();
		this.getFormContractsNew().setRecord(null);

		this.getMainView().setActiveItem(0);
	},

	sendReading: function(){
		Ext.Viewport.setActiveItem(this.getReadingsView());
		this.getLbCilSend().setValue(this.selectRecord.get('cil'));
	},

	updateContract: function(){
		var form 	= this.getFormContracts();
		store	= Ext.getStore('Contracts');
		
		if(form.getRecord() !== null){
			var record = store.findRecord('id', form.getRecord().getId());
			record.set(form.getValues());
			console.log('Contract Save');
		}

		//this.viewContractList();
		Ext.Viewport.setActiveItem(this.getMainView());
		this.getListContracts().refresh();

	},

	deleteContract: function(){
		Ext.Msg.confirm(
			'Eliminar',
			'Eliminar contrato?',
			function(btn){
				if(btn == 'yes'){
					Ext.getStore('Contracts').remove(this.getFormContracts().getRecord());
					this.viewContractList();
				}
			},
			this

			
		);
	}
});
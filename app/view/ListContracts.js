Ext.define("MobileReadings.view.ListContracts",{
	extend: 'Ext.List',
	xtype: 'listContracts',

	config:{
			store: 'Contracts',
			//itemTpl: '<div><strong>{descricao}</strong></div>',
			itemTpl: "<div class='user-slug'>"+ 
                        "<img alt='' class='slug-avatar' src='resources/images/engine.png'>"+
                        "<ul class='last-col'>"+
                          "<li class='slug-name'>{descricao}</li>"+
                          "<li class='slug-status online'>{cil}</li>"+
                        "</ul>"+
                      "</div>",
			onItemDisclosure : true
	}

});
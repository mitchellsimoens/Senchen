Ext.define('Senchen.view.region.Main', {
    extend : 'Ext.panel.Panel',
    alias  : 'widget.region-main',

    requires : [
        'Senchen.view.region.AccountOverview',
        'Senchen.view.region.LeftDock',
        'Senchen.view.region.Overview'
    ],

    border      : false,
    frame       : true,
    layout      : {
        type : 'hbox'
    },
    padding     : 20,

    items       : [
        { xtype : 'region-overview'        },
        { xtype : 'region-accountoverview' }
    ]
});

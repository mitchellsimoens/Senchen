Ext.define('Senchen.view.region.Main', {
    extend : 'Ext.container.Container',
    alias  : 'widget.region-main',

    requires : [
        'Senchen.view.region.AccountOverview',
        'Senchen.view.region.Overview'
    ],

    cls         : 'main-panel',
    frame       : true,
    layout      : {
        type  : 'hbox',
        align : 'stretch'
    },
    padding     : 20,

    items       : [
        { xtype : 'region-overview'        },
        { xtype : 'region-accountoverview' }
    ]
});

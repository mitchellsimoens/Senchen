Ext.define('Senchen.view.Viewport', {
    extend : 'Ext.container.Viewport',

    requires: [
        'Senchen.view.region.Main'
    ],

    layout : 'fit',

    items  : [
        {
            xtype       : 'panel',
            border      : false,
            frame       : true,
            layout      : 'fit',
            padding     : 0,

            dockedItems : [
                { xtype : 'region-leftdock' }
            ],

            items       : [
                {
                    xtype : 'region-main'
                }
            ]
        }
    ]
});

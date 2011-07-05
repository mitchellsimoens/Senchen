Ext.define('Senchen.view.Viewport', {
    extend : 'Ext.container.Viewport',

    requires: [
        'Senchen.view.region.BottomDock',
        'Senchen.view.region.LeftDock',
        'Senchen.view.region.Main',

        'Senchen.view.form.AddAccount'
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
                { xtype : 'region-bottomdock' },
                { xtype : 'region-leftdock'   }
            ],

            items       : [
                {
                    xtype : 'region-main'
                }
            ]
        }
    ]
});

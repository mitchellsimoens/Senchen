Ext.define('Senchen.view.region.AccountOverview', {
    extend : 'Ext.container.Container',
    alias  : 'widget.region-accountoverview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems()
        });

        me.callParent();
    },

    buildItems: function() {
        var me = this;

        return {
            xtype   : 'panel',
            border  : false,
            cls     : 'account-overview',
            height  : 400,
            layout  : 'fit',
            margin  : '10 0 0 0',
            padding : '5 10',
            title   : 'Your Accounts',
            width   : 300,
            items   : me.buildDataView()
        };
    },

    buildDataView: function() {
        return {
            xtype : 'dataview',
            tpl   : new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="account-item">{accountName}</div>',
                '</tpl>'
            )
        };
    }
});

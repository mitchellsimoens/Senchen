Ext.define('Senchen.view.region.Overview', {
    extend : 'Ext.panel.Panel',
    alias  : 'widget.region-overview',

    border  : false,
    cls     : 'overview',
    padding : '5 10',
    title   : 'Overview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems()
        });

        me.callParent();
    },

    buildItems: function() {
        return [
            {
                xtype  : 'container',
                height : 400,
                width  : 600
            }
        ];
    }
});

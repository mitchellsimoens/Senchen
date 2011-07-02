Ext.define('Senchen.controller.Base', {
    extend : 'Ext.app.Controller',

    init: function() {
        var me = this;

        me.control({
            'region-leftdock dataview' : {
                itemclick : me.handleLeftDockDataViewItemClick
            }
        });
    },

    handleLeftDockDataViewItemClick: function(dv, rec, node) {
    }
});

Ext.define('Senchen.view.region.LeftDock', {
    extend : 'Ext.container.Container',
    alias  : 'widget.region-leftdock',

    cls     : 'left-dock',
    dock    : 'left',
    padding : '10 0 0 0',
    width   : 250,

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items : me.buildItems()
        });

        me.callParent();
    },

    buildItems: function() {
        var me = this;

        return [
            {
                xtype       : 'fieldset',
                collapsible : true,
                title       : 'TOOLS',
                items       : me.buildDataView('Tool')
            },
            {
                xtype       : 'fieldset',
                collapsible : true,
                title       : 'ACCOUNT',
                items       : me.buildAccountDataView()
            },
            {
                xtype       : 'fieldset',
                collapsible : true,
                title       : 'REPORTS',
                items       : me.buildDataView('Report')
            }
        ];
    },

    buildAccountDataView: function() {
        return {
            xtype        : 'dataview',
            itemSelector : 'div.left-dock-item',
            tpl          : new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="left-dock-item">{accountName}</div>',
                '</tpl>'
            )
        };
    },

    buildDataView: function(type) {
        var me = this;

        return {
            xtype        : 'dataview',
            itemSelector : 'div.left-dock-item',
            tpl          : new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="left-dock-item">{name}</div>',
                '</tpl>'
            ),
            store        : Ext.create('Ext.data.Store', {
                fields : ['name'],
                data   : me['get' + type + 'Data']()
            })
        };
    },

    getToolData: function() {
        return [
            { name : 'Overview'               },
            { name : 'Transactions'           },
            { name : 'Scheduled Transactions' },
            { name : 'Last Download'          },
            { name : 'Category Explorer'      },
            { name : 'Accounts Summary'       }
        ];
    },

    getReportData: function() {
        return [
            { name : 'Spending Cloud'     },
            { name : 'Category Summary'   },
            { name : 'This Month'         },
            { name : 'Last Month'         },
            { name : 'Spending Over Time' },
            { name : 'Tax Schedule'       }
        ];
    }
});

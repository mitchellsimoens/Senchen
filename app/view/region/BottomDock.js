Ext.define('Senchen.view.region.BottomDock', {
    extend : 'Ext.toolbar.Toolbar',
    alias  : 'widget.region-bottomdock',

    requires : [
        'Ext.button.Split',
        'Ext.menu.Menu'
    ],

    cls      : 'bottom-dock',
    defaults : {
        height : 40
    },
    dock     : 'bottom',
    height   : 50,

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
                xtype : 'splitbutton',
                text  : 'Add This',
                menu  : Ext.create('Ext.menu.Menu', {
                    items : [
                        { text : 'Checking',     type : 'checking' },
                        { text : 'Cash',         type : 'cash'     },
                        { text : 'Money Market', type : 'money market' },
                        { text : 'Savings',      type : 'savings' },
                        { text : 'Credit Card',  type : 'credit card' },
                        { text : 'Line of Credit' },
                        { text : 'Asset'          },
                        { text : 'Liability'      },
                        {
                            text : 'Investment',
                            menu : {
                                items : [
                                    { text : '529'       },
                                    { text : 'Brokerage' },
                                    { text : 'Other'     },
                                    { text : 'Trust'     },
                                    { text : 'UGMA'      },
                                    { text : '401(k)'    },
                                    { text : '403(b)'    },
                                    { text : 'IRA'       },
                                    { text : 'KEOGH'     },
                                    { text : 'SEP'       },
                                    { text : 'SIMPLE'    }
                                ]
                            }
                        },
                        { text : 'Budget'         }
                    ]
                })
            },
            {
                text : 'Show/Hide Left Dock',
                handler : function() {
                    var panel    = me.up('panel'),
                        leftDock = panel.getDockedItems('container[dock=left]')[0];

                    if (leftDock.hidden) {
                        leftDock.show();
                    } else {
                        leftDock.hide();
                    }

                    panel.doComponentLayout();
                }
            },
            {
                text : 'Refresh Accounts'
            }
        ];
    }
});

sap.ui.define( [
    "sap/ui/core/mvc/Controller"
],
    function( Controller ) {
        "use strict";

        return Controller.extend( "project2.controller.View1", {
            onInit: function() {
            },

            onPress: function() {
                var item = this.byId( "myInput" );
                item.fireSubmit();

            },
            onSubmit: function() {
                alert( "Submit event fired!" );
            }

        } );
    } );

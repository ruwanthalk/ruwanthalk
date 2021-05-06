/**
 * Created by Ruwantha.Lankathilak on 7/18/2017.
 */
({
    handleClick:function(Component,event,helper){
        var buttonOb = event.getSource();
        var labelValue = buttonOb.get("v.label");

        Component.set('v.message',labelValue);
    },

    handleClick2 : function(component,event,helper){

        var btnLabel = event.getSource().get("v.label");
        console.log('handleClick2 message ' + btnLabel);
        component.set("v.message",btnLabel);
    },
})
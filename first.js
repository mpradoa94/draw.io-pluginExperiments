/**
* A draw.io plugin trying to save a graph
*/
Draw.loadPlugin(function(ui) {
    
    // Adds resources for actions
    mxResources.parse('myFirstPlugin=Plu-Plugin Save');
    
    // Adds action : myFirstPlugin
    ui.actions.addAction('myFirstPlugin', function() {
        var encoder = new mxCodec();
        var node = encoder.encode(graph.getModel());
        mxUtils.popup(mxUtils.getPrettyXml(node), true);
    });
    
    // Adds menu
    ui.menubar.addMenu('My Save', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'myFirstPlugin');
    });

    // Reorders menubar
    ui.menubar.container
      .insertBefore(ui.menubar.container.lastChild,
                    ui.menubar.container.lastChild.previousSibling.previousSibling);
});
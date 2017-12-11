/**
* A draw.io plugin for inserting a custom text (or ellipse) element,
* either by keyboard Ctrl+Shift+T (or Ctrl+Shift+Q) or by menu
*/
Draw.loadPlugin(function(ui) {
    
    // Adds resources for actions
    mxResources.parse('myFirstPlugin=Plu-Plugin');
    
    // Adds action : myFirstPlugin
    ui.actions.addAction('myFirstPlugin', function() {
        alert("Hi there"); 
    });
    
    // Adds menu
    ui.menubar.addMenu('My Menu', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'myFirstPlugin');
    });

    // Reorders menubar
    ui.menubar.container
      .insertBefore(ui.menubar.container.lastChild,
                    ui.menubar.container.lastChild.previousSibling.previousSibling);
});
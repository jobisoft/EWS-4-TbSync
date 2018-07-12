//no need to create namespace, we are in a sandbox

Components.utils.import("resource://gre/modules/Services.jsm");

function install(data, reason) {
}

function uninstall(data, reason) {
}

function startup(data, reason) {
    //possible reasons: APP_STARTUP, ADDON_ENABLE, ADDON_INSTALL, ADDON_UPGRADE, or ADDON_DOWNGRADE.

    //set default prefs (examples)
    let branch = Services.prefs.getDefaultBranch("extensions.ews4tbsync.");
    branch.setIntPref("synclimit", 7);
    branch.setIntPref("maxitems", 50);
    branch.setCharPref("clientID.type", "TbSync");
    branch.setCharPref("clientID.useragent", "Thunderbird Exchange WebServices");    
    
    //during APP_STARTUP, TbSync will find auto load all active providers, if this provider gets enabled later, load it dynamically 
    if (reason != APP_STARTUP) {
        Services.obs.notifyObservers(null, "tbsync.addProvider", "ews");
    }
}

function shutdown(data, reason) {
    //unload this provider from TbSync
    Services.obs.notifyObservers(null, "tbsync.removeProvider", "ews");
    Services.obs.notifyObservers(null, "chrome-flush-caches", null);
}

var actionPlugins = ConfigFile("plasma-org.kde.plasma.desktop-appletsrc", "ActionPlugins");
   
var actionPluginsDesktop = ConfigFile(actionPlugins,"0");
actionPluginsDesktop.writeEntry("MidButton;NoModifier", "org.kde.paste");
actionPluginsDesktop.writeEntry("RightButton;NoModifier", "org.kde.contextmenu");
actionPluginsDesktop.writeEntry("wheel:Vertical;NoModifier", "org.kde.switchdesktop");
   
var rightButton = ConfigFile(actionPluginsDesktop,"RightButton;NoModifier");
rightButton.writeEntry("_add panel", "true");
rightButton.writeEntry("_context", "true");
rightButton.writeEntry("_lock_screen", "false");
rightButton.writeEntry("_logout", "false");
rightButton.writeEntry("_run_command", "false");
rightButton.writeEntry("_sep1", "false");
rightButton.writeEntry("_sep2", "true");
rightButton.writeEntry("_sep3", "false");
rightButton.writeEntry("_wallpaper", "true");
rightButton.writeEntry("add sibling containment", "false");
rightButton.writeEntry("add widgets", "true");
rightButton.writeEntry("configure", "true");
rightButton.writeEntry("configure shortcuts", "false");
rightButton.writeEntry("lock widgets", "true");
rightButton.writeEntry("manage activities", "false");
rightButton.writeEntry("remove", "true");
rightButton.writeEntry("run associated application", "false");
   
delete rightButton;
delete actionPluginsDesktop;
delete actionPlugins; 

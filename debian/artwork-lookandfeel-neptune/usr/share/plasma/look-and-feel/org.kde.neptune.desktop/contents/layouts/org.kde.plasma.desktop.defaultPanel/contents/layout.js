var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 27
panel.formfactor = 2

var kicker = panel.addWidget("org.kde.plasma.excalibur")
kicker.currentConfigGroup = ["Shortcuts"]
kicker.writeConfig("global", "Alt+F1")

kicker.currentConfigGroup = ["General"]
kicker.writeConfig("icon", "/usr/share/pixmaps/start-kde-neptune.png")
kicker.writeConfig("favoriteApps", ["chromium.desktop","thunderbird.desktop","org.kde.dolphin.desktop","systemsettings.desktop","libreoffice-startcenter.desktop","gimp.desktop","vlc.desktop","org.kde.konsole.desktop","kde4-apper.desktop"])

pger = panel.addWidget("org.kde.plasma.pager")

var tm = panel.addWidget("org.kde.plasma.taskmanager")
tm.currentConfigGroup = ["Configuration", "General"]
tm.writeConfig("launchers" ,["file:///usr/share/applications/chromium.desktop","file:///usr/share/applications/thunderbird.desktop"])
tm.writeConfig("showOnlyCurrentDesktop", true)
tm.writeConfig("separateLaunchers", false)
tm.writeConfig("sortingStrategy", 1)

var systray = panel.addWidget("org.kde.plasma.systemtray")
var systrayContainmentId = systray.readConfig("SystrayContainmentId")
var systrayContainment = desktopById(systrayContainmentId)
systrayContainment.currentConfigGroup = ["General"]
systrayContainment.writeConfig("iconSize", 2)

panel.addWidget("org.kde.plasma.digitalclock")



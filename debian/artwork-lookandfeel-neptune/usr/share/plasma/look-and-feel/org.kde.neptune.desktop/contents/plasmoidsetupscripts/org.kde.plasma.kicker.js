applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("customButtonImage", "file:///usr/share/pixmaps/start-kde-neptune.png")
applet.writeConfig("favoriteApps", ["chromium.desktop","thunderbird.desktop","org.kde.dolphin.desktop","systemsettings.desktop","libreoffice-startcenter.desktop","gimp.desktop","vlc.desktop","org.kde.konsole.desktop","kde4-apper.desktop"])
applet.writeConfig("limitDepth", true)
applet.writeConfig("useCustomButtonImage", true)

applet.reloadConfig();

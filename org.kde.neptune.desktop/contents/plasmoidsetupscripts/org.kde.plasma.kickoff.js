applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "/usr/share/pixmaps/start-kde-neptune.png")
applet.writeConfig("favorites", ["chromium.desktop","thunderbird.desktop","org.kde.dolphin.desktop","systemsettings.desktop","libreoffice-startcenter.desktop","gimp.desktop","vlc.desktop","org.kde.konsole.desktop","kde4-apper.desktop"])

applet.reloadConfig();

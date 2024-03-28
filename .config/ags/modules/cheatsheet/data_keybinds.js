export const keybindList = [[
    {
        "icon": "pin_drop",
        "name": "Workspaces: navigation",
        "binds": [
            { "keys": ["", "+", "#"], "action": "Go to workspace #" },
            { "keys": ["", "+", "Tab"], "action": "Toggle special workspace" },
            { "keys": ["", "+", "(Scroll ↑↓)"], "action": "Go to workspace -1/+1" },
            { "keys": ["Ctrl", "", "+", "←"], "action": "Go to workspace on the left" },
            { "keys": ["Ctrl", "", "+", "→"], "action": "Go to workspace on the right" },
            { "keys": ["", "Shift", "+", "PageUp"], "action": "Go to workspace on the left" },
            { "keys": ["", "Shift", "+", "PageDown"], "action": "Go to workspace on the right" }
        ],
        "id": 1
    },
    {
        "icon": "overview_key",
        "name": "Workspaces: management",
        "binds": [
            { "keys": ["", "Shift", "+", "#"], "action": "Move window to workspace #" },
            { "keys": ["", "Shift", "+", "Tab"], "action": "Move window to special workspace" },
            { "keys": ["", "Alt", "+", "PageUp"], "action": "Move window to workspace on the left" },
            { "keys": ["", "Alt", "+", "PageDown"], "action": "Move window to workspace on the right" }
        ],
        "id": 2
    },
    {
        "icon": "move_group",
        "name": "Windows",
        "binds": [
            { "keys": ["", "+", "←↑→↓"], "action": "Focus window in direction" },
            { "keys": ["", "Shift", "+", "←↑→↓"], "action": "Swap window in direction" },
            { "keys": ["", "+", ";"], "action": "Split ratio -" },
            { "keys": ["", "+", "'"], "action": "Split ratio +" },
            { "keys": ["", "+", "Lmb"], "action": "Move window" },
            { "keys": ["", "+", "Mmb"], "action": "Move window" },
            { "keys": ["", "+", "Rmb"], "action": "Resize window" },
            { "keys": ["", "+", "F"], "action": "Fullscreen" },
            { "keys": ["", "Alt", "+", "F"], "action": "Fake fullscreen" }
        ],
        "id": 3
    }
],
[
    {
        "icon": "widgets",
        "name": "Widgets (AGS)",
        "binds": [
            { "keys": ["", "+", "D"], "action": "Toggle overview/launcher" },
            { "keys": ["Ctrl", "", "+", "R"], "action": "Restart AGS" },
            { "keys": ["", "+", "/"], "action": "Toggle this cheatsheet" },
            { "keys": ["", "+", "N"], "action": "Toggle system sidebar" },
            { "keys": ["", "+", "B", "OR", "", "+", "O"], "action": "Toggle utilities sidebar" },
            { "keys": ["", "+", "K"], "action": "Toggle virtual keyboard" },
            { "keys": ["Alt", "+", "F4"], "action": "Power/Session menu" },

            { "keys": ["Esc"], "action": "Exit a window" },
            { "keys": ["rightCtrl"], "action": "Dismiss/close sidebar" },

            { "keys": ["Ctrl", "", "+", "T"], "action": "Change wallpaper+colorscheme" },

            // { "keys": ["", "+", "B"], "action": "Toggle left sidebar" },
            // { "keys": ["", "+", "N"], "action": "Toggle right sidebar" },
            // { "keys": ["", "+", "G"], "action": "Toggle volume mixer" },
            // { "keys": ["", "+", "M"], "action": "Toggle useless audio visualizer" },
            // { "keys": ["(right)Ctrl"], "action": "Dismiss notification & close menus" }
        ],
        "id": 4
    },
    {
        "icon": "construction",
        "name": "Utilities",
        "binds": [
            { "keys": ["", "Shift", "+", "S"], "action": "Screen snip  >>  clipboard" },
            { "keys": ["", "Ctrl", "+", "S"], "action": "Screen snip focused window  >>  clipboard" },
            { "keys": ["", "+", "S"], "action": "Screen snip region  >>  clipboard" },
            { "keys": ["", "Shift", "+", "T"], "action": "Image to text  >>  clipboard" },
            { "keys": ["", "Shift", "+", "C"], "action": "Color picker" },
            { "keys": ["", "Alt", "+", "R"], "action": "Record region" },
            { "keys": ["Ctrl", "Alt", "+", "R"], "action": "Record screen without sound" },
            { "keys": ["", "Shift", "Alt", "+", "R"], "action": "Record screen with sound" }
        ],
        "id": 5
    },
],
[
    {
        "icon": "apps",
        "name": "Apps",
        "binds": [
            { "keys": ["", "+", "Enter"], "action": "Launch terminal: Alacritty" },
            { "keys": ["", "Shift", "+", "Enter"], "action": "Launch terminal: Alacritty (floating)" },
            { "keys": ["", "+", "W"], "action": "Launch browser: Brave" },
            { "keys": ["", "+", "E"], "action": "Launch file manager: Dolphin" },
            { "keys": ["", "+", "I"], "action": "Launch settings: GNOME Control center" }
        ],
        "id": 6
    },
    {
        "icon": "keyboard",
        "name": "Typing",
        "binds": [
            { "keys": ["", "Shift", "+", "C"], "action": "Clipboard history  >>  clipboard" },
            { "keys": ["", "+", "."], "action": "Emoji picker  >>  clipboard" },
        ],
        "id": 7
    },
    {
        "icon": "terminal",
        "name": "Launcher actions",
        "binds": [
            { "keys": [">raw"], "action": "Toggle mouse acceleration" },
            { "keys": [">img"], "action": "Select wallpaper and generate colorscheme" },
            { "keys": [">light"], "action": "Switch to light theme" },
            { "keys": [">dark"], "action": "Switch to dark theme" },
            { "keys": [">badapple"], "action": "Apply black n' white colorscheme" },
            { "keys": [">color"], "action": "Pick acccent color" },
            { "keys": [">todo"], "action": "Type something after that to add a To-do item" },
        ],
        "id": 8
    }
]];

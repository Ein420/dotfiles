function fish_prompt -d "Write out the prompt"
    # This shows up as USER@HOST /home/user/ >, with the directory colored
    # $USER and $hostname are set by fish, so you can just use them
    # instead of using `whoami` and `hostname`
    printf '%s@%s %s%s%s > ' $USER $hostname \
        (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
end

# WAYLAND
if [ -z $DISPLAY ] && [ "$(tty)" = /dev/tty1 ]
    exec Hyprland & disown
end

#function sxhkd
#      set -Ux SXHKD_SHELL '/bin/sh'
#end 


## Start X at login
#  if status is-login
#        if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
#            exec startx --keeptty
#        end
#    end

function cp
    rsync -rahv --mkpath --info=progress2 $argv
end

function mv
    rsync -rahv --mkpath --remove-source-files --info=progress2 $argv
end

function d
    yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 -o "%(title)s.%(ext)s" $argv
end

function get --wraps 'pacman -S'
    sudo pacman -S $argv
end

function v
    nvim $argv
end

function dv
    yt-dlp --audio-format mp3 --audio-quality 0 -o "%(title)s.%(ext)s" $argv
end
function up
    sudo pacman -Syu $argv
end
function i3conf
    nvim ~/.config/i3/config $argv
end
function hconf
    nvim ~/.config/hypr/hyprland.conf $argv
end
function aconf
    nvim ~/.config/awesome/rc.lua $argv
end
function atheme
    nvim ~/.config/awesome/themes/powerarrow-dark/theme.lua $argv
end
function upa
    yay -Syu $argv
end
function rem --wraps 'pacman -R'
    sudo pacman -R $argv
end

function test-awesome
    Xephyr :5 & sleep 1
    DISPLAY=:5 awesome $argv
end

function s
    sr $argv
end
function g
    gallery-dl $argv
end


if status is-interactive
    # Commands to run in interactive sessions can go here
    set fish_greeting

end

starship init fish | source
if test -f ~/.cache/ags/user/generated/terminal/sequences.txt
    cat ~/.cache/ags/user/generated/terminal/sequences.txt
end

alias pamcan=pacman

# function fish_prompt
#   set_color cyan; echo (pwd)
#   set_color green; echo '> '
# end

-- /home fs
I.disk = wibox.widget.imagebox(beautiful.monitor_disk)

W.disk_bar = wibox.widget {
    forced_height    = dpi(1),
    forced_width     = dpi(59),
    color            = theme.fg_normal,
    background_color = theme.bg_normal,
    margins          = 1,
    paddings         = 1,
    ticks            = true,
    ticks_size       = dpi(6),
    widget           = wibox.widget.progressbar,
}

W.disk_margin = wibox.layout.margin(W.disk_bar, 2, 7)
W.disk_margin:set_top(6)
W.disk_margin:set_bottom(9)

W.disk_bar_widget = wibox.widget.background(W.disk_margin)
W.disk_bar_widget:set_bgimage(beautiful.bar_bg_copland)

W.disk_bg = wibox.container.background(
  W.disk_bar, gmc.color['grey500'], gears.shape.rectangle)
W.disk_bar_widget = wibox.container.margin(
  W.disk_bg, dpi(2), dpi(7), dpi(6), dpi(6))

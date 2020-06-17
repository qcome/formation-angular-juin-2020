# text in button

user @Input() label: string

# links

user @Input() route: string if redirect to internal route
user @Input() href: string if redirect to external route

# action

user @Input() action: string if create a button action

# text color in button

use @Input() color; string to change default color
default: $dark-color
if @Input() color = 'light-color' = $light-color
if @Input() color = 'color1' = $color1
if @Input() color = 'color2' = $color2
if @Input() color = 'color3' = $color3
if @Input() color = 'color-error' = $color-error
if @Input() color = 'color-success' = $color-success

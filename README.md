# Celstomp v1

a site where you could animate on (vibecoded help)

I'd like to preface by saying that this site was vibecoded.

I'm by no means in any way a traditional programmer, but I had just wanted to make animation more accessible and intuitive.
Therefore I'm including all the messy comments the AI had wrote, as I understand that it may be helpful for some trying to navigate around the horrendous code. (I apologize for this)

I come from an art background, but I'm interested in learning code.
I'm a bit ashamed of using vibecoding to create this, so any feedback about this will be greatly appreciated as I'm trying to learn along the way. Thank you!

You can access it here:

- https://ginyo.space/celstomp/

## Main features

- Canvas
- Timeline
- Celstomp window
  - Color wheel
  - Tools
  - Layer system
- Drawing

---

## Canvas

The canvas (16/9) is on top of a stage that can be zoomed or panned.
The canvas should be able to zoom by scroll / finger pinching.

## Timeline

It is a table with rows and columns, the columns representing the "cels".
The cels can be dragged around. To select multiple cels, drag to select it as a group on the timeline.

## Celstomp window

On the cel stomp window there is a side panel where you can find settings to:

- Save
- Load
- Fill current cel
- Fill all cels
- Autofill on draw
- Recenter canvas
- Export MP4
- Export as IMG SEQ

Color wheel on the top left.

Tools on the top right:

- Brush
- Eraser
- Fill brush
- Fill eraser
- Lasso brush
- Laso eraser

Layer system at the bottom of the panel:

- LINE
- SHADE
- COLOR
- FILL
- PAPER

For each layer you should be able to hide it with the eye icon.
When you draw a specific color on a selected layer, a color swatch should appear on the right of the layer.
You can right click a specific layer to adjust its opacity, or clip to the layer below.
The layering of the swatches works so that the one on the right is the most on top.
You can drag the swatches to reorder them all over the layer system.
You can right click the swatches to change the color of all the cels in the timeline.

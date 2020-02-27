# Notes

## Rectangle and Ellipse

### Functions

- `arc` | (x, y, radius, startAngle, endAngle, antiClockwise)
- `arcTo` | (x1, y1, x2, y2, radius)
- `clearRect` | (x, y, w, h)
- `fill`
- `fillRect` | (x, y, w, h)
- `rect` | (x, y, w, h)
- `stroke` |
- `strokeRect` | (x, y, w, h)

### Properties

- `fillStyle` |
- `strokeStyle` |

The order initially to create an element is to define a color (stroke or fill), create the element, then fill/stroke it with the color selected

```
ctx.fillStyle = 'green'
ctx.strokeStyle = 'black'
ctx.rect(10, 50, 100, 200)
ctx.fill()
ctx.stroke()
```
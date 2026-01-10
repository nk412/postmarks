# Postmarks API

Base URL: `https://postmarks.nk412.workers.dev`

## Parameters

| Parameter | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `city` | string | `London` | any | City name |
| `country` | string | `United Kingdom` | any | Country name |
| `native` | string | `` | any | Native script text (optional) |
| `symbol` | string | `compass` | see below | Icon symbol |
| `palette` | integer | `0` | `0-23` | Color palette index |
| `wear` | integer | `50` | `0-100` | Wear/aging intensity |
| `sticker` | boolean | `false` | `true`, `1` | Add sticker backing |
| `style` | string | `postmark` | `postmark`, `envelope`, `label` | Output style |
| `rotation` | integer | `0` | `-30` to `30` | Rotation in degrees |

## Palettes (0-23)

0. Classic (red/navy), 1. Airmail (red/blue/white), 2. Sepia (brown), 3. Navy (navy/gold), 4. Forest (green/brown), 5. Burgundy (wine/charcoal), 6. Slate (gray/blue), 7. Terracotta (rust/brown), 8. Ocean (blue), 9. Sunset (orange/maroon), 10. Olive (green), 11. Ink (black/gray), 12. Teal, 13. Lavender (purple), 14. Mustard (yellow/brown), 15. Rose (pink), 16. Copper, 17. Sage (green), 18. Plum (purple), 19. Sand (tan), 20. Nordic (blue-gray), 21. Postal (green), 22. Rust, 23. Midnight (dark blue)

## Symbols

`compass`, `plane`, `anchor`, `mountain`, `wave`, `leaf`, `sun`, `star`, `globe`, `envelope`, `bird`, `heart`, `moon`, `camera`, `coffee`, `none`

## Examples

```
# Basic postmark
https://postmarks.nk412.workers.dev?city=London&country=United%20Kingdom&symbol=compass&palette=0&wear=50

# Worn envelope
https://postmarks.nk412.workers.dev?city=Paris&country=France&symbol=plane&palette=1&wear=75&style=envelope

# Label with native text
https://postmarks.nk412.workers.dev?city=Tokyo&country=Japan&native=東京&symbol=sun&palette=8&wear=40&style=label&rotation=15

# Sticker backing
https://postmarks.nk412.workers.dev?city=Berlin&country=Germany&symbol=mountain&palette=12&wear=30&sticker=1
```

## Notes

- Returns SVG (image/svg+xml)
- CORS enabled
- Cached (max-age=31536000)
- Wear effects are deterministic based on city name

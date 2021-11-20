---
sidebar_position: 1
---

# Margins

Margins are created in the form of utility classes for all the dimensions (all-sides, top, bottom, right, left.)

## How it's working?

All the units for margins are generated with {base-value}*{1.618}, where {1.618} is the golden ratio.
The range of values for margins goes from 1 to 100 "eccentric touch" units.

### How to implement?

#### General Margins

| Margin type | Syntax | Example |
|-------------|--------|---------|
| All sides | `m-value` | `m-3`, `m-12`, `m-56`, `m-auto` |
| Right | `m-right-value` | `m-right-3`, `m-right-12`, `m-right-56`, `m-right-auto` |
| Left | `m-left-value` | `m-left-3`, `m-left-12`, `m-left-56`, `m-left-auto` |
| Top | `m-top-value` | `m-top-3`, `m-top-12`, `m-top-56`, `m-top-auto` |
| Bottom | `m-bottom-value` | `m-bottom-3`, `m-bottom-12`, `m-bottom-56`, `m-bottom-auto` |

#### Using decimal values in margins

Syntax to add decimal based margin values is `m-[type]-{base-value}-point-{decimal-value}`, where `{decimal-value}` should be of length unity. Like, `m-2-point-6`, `m-right-56-point-7`, and `m-top-46-point-8` for **margin(2.6) from all sides**, **margin(56.7) from right side**, and **margin(46.8) from top side**, respectively.


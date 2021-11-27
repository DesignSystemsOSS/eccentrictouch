---
sidebar_position: 2
---

# Paddings

Paddings are created in the form of utility classes for all the dimensions (all-sides, top, bottom, right, left.)

## How it's working?

All the units for paddings are generated with {base-value}*{1.618}, where {1.618} is the golden ratio.
The range of values for margins goes from 1 to 100 "eccentric touch" units.

### How to implement?

#### General Paddings

| Padding type | Syntax | Example |
|--------------|--------|---------|
| All sides    | `p-value` | `p-3`, `p-12`, `p-56`, `p-auto` |
| Right    | `p-right-value` | `p-right-3`, `p-right-12`, `p-right-56`, `p-right-auto` |
| Left    | `p-left-value` | `p-left-3`, `p-left-12`, `p-left-56`, `p-left-auto` |
| Top    | `p-top-value` | `p-top-3`, `p-top-12`, `p-top-56`, `p-top-auto` |
| Bottom    | `p-bottom-value` | `p-bottom-3`, `p-bottom-12`, `p-bottom-56`, `p-bottom-auto` |

- For Adding horizontal padding-auto to an element, we can use `p-x-auto` (x representing horizontal side) whereas, to add vertical paddings to an element, we can use `p-y-auto` (and of-course, y representing vertical side)


#### Using decimal values paddings

Syntax to add decimal based padding values is `p-[type]-{base-value}-point-{decimal-value}`, where `{decimal-value}` should be of length unity. Like, `p-2-point-6`, `p-right-56-point-7`, and `p-top-46-point-8` for **padding(2.6) from all sides**, **padding(56.7) from right side**, and **padding(46.8) from top side**, respectively.
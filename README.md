# Shopify Developer Test Assigment
## Planning & Specification (15 minutes)

After reviewing the Figma design, I planned the data mapping by analyzing the data structure in `collection.json` to determine which data fields to use.
I then mapped each element to its corresponding data as shown in the image below for development.

![[Pasted image 20251205020651.png]]

### Special Considerations

When data didn't match one-to-one with Figma design elements or required processing, I handled them as follows:

**1. tags**
When the `tags` array contains multiple elements, I prioritized displaying "Best Seller" using the following logic:

- If "Best Seller" exists in the tags array, display it; otherwise, display another tag.

**2. metafields**
I extracted the following keys from `metafields` to create assigned values for display in the USP List.
`product_excerpt` was excluded from the USP List as it's a product excerpt rather than a single-word feature suitable for the list format.

- `protein_per_serving`
  - Extracted the value '30g' and appended 'Protein' text in Liquid to create the phrase '30g Protein'.
- `low_calories`, `low_sugar`
  - Since these are `boolean` types, values that are `false` are not displayed based on conditional logic.
  - Currently, `low_sugar` is `false` in the data and won't display, but will appear if changed to `true` in the future.

<br />

## The Build (3 hours)

### Shopify Liquid Native Features

Implemented rendering logic using the following flow syntax:

**Loop Structures:**

- `{% for ... in ... %}`
  - Used to dynamically render data extracted from collection.json

**Conditional Logic:**

- `{% if %}`, `{% elsif %}`, `{% endif %}`
  - Used for handling multiple conditions such as `metafields`, `tags`, etc.

**Variable Assignment:**

- `{% assign %}`
  - Used to store and calculate specific values for `metafields`, `price`, etc.

**Shopify Filters:**

- `| money`
  - Converts prices to currency format, used for displaying `price`
- `| capitalize`
  - Capitalizes first letter, used for displaying `tags`
- `| minus`
  - Subtraction operation, used for displaying `saving money`

### Styling

Implemented styling using a combination of CSS and Tailwind:

- For the `main.css` file, primarily used CSS classes for reusability and code cleanliness.
- For responsive design and layout adjustments, applied Tailwind classes directly in the markup.

### Semantic Code Implementation

- Used `<article>` tags for product cards to represent independent content units.
- Used `<h2>` for product titles to maintain proper document structure.
- Added `aria-label` and `focus-visible` to interactive elements such as buttons.
- Implemented `alt` attributes on all images.

### Additional Feature Implementation

Implemented Quantity Selector functionality to display quantity changes when pressing the `-`, `+` buttons.

- When quantity is 1, the minus button is disabled and turns gray to prevent users from decreasing below 1.
- Added visual feedback with a shimmer effect when users click the `-`, `+` buttons for enhanced interactivity.

Enhanced visual elements by adding a smooth shine effect that sweeps across the Add To Cart button on hover.

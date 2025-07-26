# Main Heading (H1)

This is a paragraph with regular text. You can write multiple sentences here and they will be rendered with proper spacing and styling.

## Section Heading (H2)

Here's another paragraph demonstrating different text formatting options. You can use **bold text** to emphasize important points, and *italic text* for subtle emphasis.

### Subsection Heading (H3)

You can also use inline code like `const example = "hello world"` within your paragraphs. This is useful for mentioning variable names, functions, or short code snippets.

## Code Blocks

For larger code snippets, use fenced code blocks:

```javascript
function greeting(name) {
  return `Hello, ${name}!`;
}

const message = greeting("World");
console.log(message);
```

```python
def calculate_sum(a, b):
    return a + b

result = calculate_sum(10, 20)
print(f"The sum is: {result}")
```

## Lists

### Unordered Lists

- First item in the list
- Second item with some details
- Third item
  - Nested item
  - Another nested item
- Fourth item

### Ordered Lists

1. First step in the process
2. Second step with important information
3. Third step
   1. Nested numbered item
   2. Another nested numbered item
4. Final step

## Blockquotes

> This is a blockquote. It's perfect for highlighting important quotes, testimonials, or key insights. You can use it to draw attention to specific content.

> You can also have multiple paragraph blockquotes.
> 
> This is the second paragraph within the same blockquote.

## Links and Emphasis

You can create [external links](https://example.com) and use various emphasis styles:

- **Bold text** for strong emphasis
- *Italic text* for subtle emphasis  
- ***Bold and italic*** for maximum emphasis
- `inline code` for technical terms

## More Complex Examples

### Combining Elements

Here's a paragraph that combines multiple elements: you might need to use `Array.map()` method when working with **React components**, and you can learn more about it in the [React documentation](https://react.dev).

### Technical Content

When discussing APIs, you often work with endpoints like `/api/blogs/${slug}` and handle responses using:

```javascript
const response = await fetch(`/api/blogs/${params.slug}`);
if (response.ok) {
  const data = await response.json();
  setPost(data);
}
```

### Mixed Content

1. First, install the required packages: `npm install react-markdown`
2. Then, import it in your component:
   ```javascript
   import ReactMarkdown from 'react-markdown';
   ```
3. Finally, use it with custom components for styling

> **Pro Tip**: Always test your markdown content with different combinations of elements to ensure proper rendering.

## Final Notes

This template demonstrates all the major markdown elements supported by your ReactMarkdown setup with custom styling. Each element will be rendered with the specific classes and styles you've defined in your component configuration.
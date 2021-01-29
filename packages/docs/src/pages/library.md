---
title: Library
date: Last Modified
permalink: /library/index.html
---

Style guide and markdown documentation. See the official [markdown-it demo](https://markdown-it.github.io/) for more examples. 

## Text

```markdown
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
##### Heading 6
**bold**
*italic* 
[link](#)
> This is a blockquote
```

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
##### Heading 6
**bold**
*italic*
[link](#)
> This is a blockquote

---

## Images 

Add image content to `/static/`. The **markdown-it-linkify-images** plugin is used to automatically generate a link to a full-size version of the image. Images should be optimized before being added to the repository.

```markdown
![My image](/static/img/image-placeholder.svg)
```

![My image](/static/img/teamwork.svg)

---

## Lists

```markdown
* list item
* list item
  * Sub item
  * Sub item
* list item

1. Ordered item
  a. foo
  b. bar
2. Ordered item
3. Orderer item
```

* list item
* list item
  * Sub item
  * Sub item
* list item

1. Ordered item
  a. foo
  b. bar
2. Ordered item
3. Orderer itemm

---

## Code

Code blocks should include the language for syntax highlighting.

````markdown
```js
const x = 10;
```
````

```js
const x = 10;
```

---

## Footnotes

Inline footnotes link to footnotes that can be defined anywhere in the document, and which will be rendered at the bottom of the page.

```markdown
number finite but unbounded.[^first]...of our questions Drake Equation.[^second]

[^first]: Footnotes **can have markup** and multiple paragraphs.
[^second]: Footnote text
```

number finite but unbounded.[^first]...of our questions Drake Equation.[^second]

[^first]: Footnotes **can have markup** and multiple paragraphs.
[^second]: Footnote text

---

## Callouts

Use a special syntax to insert callout boxes like these within the flow of your text. Similar but different than a block quote, this can be used to call out or highlight a variety of things within your content.

```markdown
::: callout 
*callout: yellow is the default color for a callout*
:::

::: warning 
*warning: here be dragons*
:::
```

::: callout 
*callout: yellow is the default color for a callout*
:::

::: warning 
*warning: here be dragons*
:::

## Checklists

Display progress against tasks.

```markdown
- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [x] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Hale
```

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [x] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## Tables

Layout data in columns will headers and rows.

```markdown
| Option | Description |
| ------ | ----------- |
| data   | Description of data option |
| props  | Description of props option |
| state  | Description of state option |
```

| Option | Description |
| ------ | ----------- |
| data   | Description of data option |
| props  | Description of props option |
| state  | Description of state option |

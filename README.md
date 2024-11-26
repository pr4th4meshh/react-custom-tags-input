# React Custom Tags Input

A highly customizable and accessible React component for managing tags in your projects. Add, edit, and remove tags with ease while maintaining full control over styling and behavior.

![npm](https://img.shields.io/npm/v/react-tags-input) ![License](https://img.shields.io/npm/l/react-tags-input) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-tags-input)

---

## Installation

To install the package, run:

```bash
npm install react-custom-tags-input

or with Yarn:

yarn add react-custom-tags-input
```

## Usage

Import the component and use it in your project:

```jsx
import React, { useState } from "react";
import { TagsInput } from "react-tags-input";

const App = () => {
  const [tags, setTags] = useState(["example", "tags"]);

  return (
    <div>
      <h1>React Tags Input</h1>
      <TagsInput
        tags={tags}
        setTags={setTags}
        placeholder="Add a tag..."
        tagStyle={{
          backgroundColor: "#4CAF50",
          color: "#fff",
        }}
        inputStyle={{
          border: "1px solid #ddd",
          padding: "8px",
        }}
      />
    </div>
  );
};

export default App;
```

## Props

| **Prop Name**       | **Type**                  | **Default**        | **Description**                                      |
|----------------------|---------------------------|--------------------|------------------------------------------------------|
| `tags`              | `string[]`               | `[]`               | Array of tags to display.                           |
| `setTags`           | `(tags: string[]) => void`| `-`                | Function to update the array of tags.               |
| `placeholder`       | `string`                 | `"Add a tag..."`   | Placeholder text for the input field.               |
| `tagStyle`          | `React.CSSProperties`    | `{}`               | Inline styles for each tag.                         |
| `inputStyle`        | `React.CSSProperties`    | `{}`               | Inline styles for the input field.                  |
| `tagClassName`      | `string`                 | `""`               | CSS class name for each tag.                        |
| `inputClassName`    | `string`                 | `""`               | CSS class name for the input field.                 |
| `onTagAdd`          | `(tag: string) => void`  | `undefined`        | Callback when a new tag is added.                   |
| `onTagRemove`       | `(tag: string) => void`  | `undefined`        | Callback when a tag is removed.                     |
| `maxTags`           | `number`                | `Infinity`         | Maximum number of tags allowed.                     |
| `allowDuplicates`   | `boolean`               | `false`            | Whether to allow duplicate tags.                    |


## Features

- Fully customizable styling with tagStyle and inputStyle.
- Accessible and keyboard-friendly.
- Supports dynamic callbacks for adding/removing tags.
- Optional limit on the maximum number of tags.
- Lightweight and easy to use.

## Author
Developed by [pr4th4meshh](https://github.com/pr4th4meshh)

## License  
MIT License 

## Links
[NPM Package](https://www.npmjs.com/package/react-custom-tags-input)
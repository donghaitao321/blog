# Algorithm - JS

## 深比较

```js
const deepCompareEquals = (obj1, obj2) => {
  // Type check
  if (Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2)) {
    return false;
  }

  // For arrays and objects, compare lengths/keys
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Deep compare objects
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepCompareEquals(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  // Handle primitives and functions
  return obj1 === obj2;
};

const arePropsEqual = (prevProps, nextProps) => {
  // Use deepCompareEquals for deep comparison
  return deepCompareEquals(prevProps, nextProps);
};

// Usage with React.memo
const MyComponent = React.memo(SomeComponent, arePropsEqual);
```


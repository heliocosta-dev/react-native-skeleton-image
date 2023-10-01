# React Native Skeleton Image

Enhance React Native's Image component with skeleton placeholders, providing a seamless loading experience and improved user engagement during image retrieval.

<kbd>
  <img
    src="https://github.com/heliocosta-dev/react-native-skeleton-image/blob/master/assets/example.gif?raw=true"
    width="320"
    heigth="694"
    title="Image Skeleton Placeholder Demo"
  />
</kbd>

### Dependencies
#### react-native-skeleton-placeholder
This package has a dependency with [react-native-skeleton-placeholder](https://github.com/chramos/react-native-skeleton-placeholder). Please follow their installation instructions.

### Installation
Using yarn:

```bash
yarn add react-native-skeleton-image
```

Using npm:

```bash
npm install react-native-skeleton-image --save
```

### Usage

```typescript
import React from 'react';
import SkeletonImage from 'react-native-skeleton-image';

const App = () => {
  const uri = 'https://placehold.co/300x200.png';

  return (
    <SkeletonImage style={{ width: 300, height: 200 }} source={{ uri }} />
  );
};

export default App;
```

## License

MIT

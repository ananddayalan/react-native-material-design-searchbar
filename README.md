# react-native-material-design-searchbar
A React Native Material Design SearchBar

<img src='https://i.imgsafe.org/7bc0b5f6fc.png' height='60'>

<img src='https://i.imgsafe.org/7bc7f2a798.png' height='60'>

# Usage

Install the SearchBar from npm with `npm i -S react-native-material-design-searchbar`. Then, require it from your app's JavaScript files with `import SearchBar from 'react-native-material-design-searchbar'`.

All props are optional except height.

```js
import React, { Component } from 'react';
import SearchBar from 'react-native-material-design-searchbar';

export default class ExampleComponent extends Component {
  render() {
    return (
      <SearchBar
        onSearchChange={() => console.log('On Focus')}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search...'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
    );
  }
};

```

The React packager will include the SearchBar component in your app's JS package and make it available for your app to use.


# Contributing

Contributions are welcome.

# LICENSE

MIT

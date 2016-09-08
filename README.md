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

# Available Props

- `onSearchChange`: Callback on search change
- `iconCloseName`: Optional string, use it to customize the close icon
- `iconSearchName`: Optional string, use it to customize the search icon
- `iconBackName`: Optional string, use it to customize the back icon
- `iconColor`: Optional string, use it to define a different padding size, default is `#737373`
- `placeholder`: Optional string, use it to customize the placeholder text, default is `eSearch...`
- `placeholderColor`: Optional string, use it to define a different placeholder color, default is `#bdbdbd`
- `returnKeyType`: Optional string, use it to customize the return key type
- `padding`: Optional string, use it to define a different padding size, default is `5`
- `inputStyle`: Optional string, use it to pass your style to the `TextInput`


The React packager will include the SearchBar component in your app's JS package and make it available for your app to use.


# Contributing

Contributions are welcome.

# LICENSE

MIT

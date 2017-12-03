# react-native-material-design-searchbar
A React Native Material Design SearchBar

<img src='https://i1.wp.com/reactscript.com/wp-content/uploads/2016/12/React-Native-Material-Design-Searchbar-1.png' height='200'>


# Setup

Install the SearchBar from npm with `npm i -S react-native-material-design-searchbar`. Then, require it from your app's JavaScript files with `import SearchBar from 'react-native-material-design-searchbar'`.
This library depends on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). Please link it by following their installation guide.

# Usage

All props are optional except height.

```js
import React, { Component } from 'react';
import SearchBar from 'react-native-material-design-searchbar';

export default class ExampleComponent extends Component {
  render() {
    return (
      <SearchBar
        onSearchChange={() => console.log('On Search Change')}
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
- `onBackPress`: Optional function, Callback on back icon pressed
- `alwaysShowBackButton`: Optional bool, use if you want to always show the back button instead of search, default is `false`
- `iconCloseName`: Optional string, use it to customize the close icon
- `iconSearchName`: Optional string, use it to customize the search icon
- `iconBackName`: Optional string, use it to customize the back icon
- `iconCloseComponent`: Optional object, custom component for the close icon (overrides iconCloseName)
- `iconSearchComponent`: Optional object, custom component for the search icon (overrides iconSearchName)
- `iconBackComponent`: Optional object, custom component for the back icon (overrides iconBackName)
- `iconColor`: Optional string, use it to define a different padding size, default is `#737373`
- `placeholder`: Optional string, use it to customize the placeholder text, default is `eSearch...`
- `placeholderColor`: Optional string, use it to define a different placeholder color, default is `#bdbdbd`
- `returnKeyType`: Optional string, use it to customize the return key type
- `padding`: Optional string, use it to define a different padding size, default is `5`
- `inputStyle`: Optional string, use it to pass your style to the containing `View`
- `inputProps`: Optional object, use it to pass additional props to the `TextInput`, for example `{autoFocus: true}`
- `textStyle`: Optional string, use it to pass your style to the `TextInput`


The React packager will include the SearchBar component in your app's JS package and make it available for your app to use.


# Contributing

Contributions are welcome.

# LICENSE

MIT

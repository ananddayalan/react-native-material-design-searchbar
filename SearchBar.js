import React, {PropTypes} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#b6b6b6',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  searchBarInput: {
    flex: 1,
    fontWeight: 'normal',
    color: '#212121',
    backgroundColor: 'transparent',
  },
});

export default class SearchBar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    autoCorrect: PropTypes.bool,
    returnKeyType: PropTypes.string,
    onSearchChange: PropTypes.func,
    onEndEditing: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    placeholder: PropTypes.string,
    padding: PropTypes.number,
    inputStyle: PropTypes.object,
    iconCloseName: PropTypes.string,
    iconSearchName: PropTypes.string,
    iconBackName: PropTypes.string,
    placeholderColor: PropTypes.string,
    iconColor: PropTypes.string,
    textStyle: PropTypes.object,
    inputProps: PropTypes.object,
    onBackPress: PropTypes.func,
  };

  static defaultProps = {
    onSearchChange: () => {},
    onEndEditing: () => {},
    onSubmitEditing: () => {},
    inputStyle: {},
    iconCloseName: 'md-close',
    iconSearchName: 'md-search',
    iconBackName: 'md-arrow-back',
    placeholder: 'Search...',
    returnKeyType: 'search',
    padding: 5,
    placeholderColor: '#bdbdbd',
    iconColor: '#737373',
    textStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isOnFocus: false,
      wait: true,
    };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this._textInput.setNativeProps({text: ''});
    this.props.onSearchChange({nativeEvent: {text: ''}});
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  _onFocus() {
    this.setState({isOnFocus: true});
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onBlur() {
    this.setState({isOnFocus: false});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this._dismissKeyboard();
  }

  _dismissKeyboard() {
    dismissKeyboard();
  }
   
  _backPressed() {
    dismissKeyboard()
    if(this.props.onBackPress) {
      this.props.onBackPress()
    }
  }

  render() {
    const {
      height,
      autoCorrect,
      returnKeyType,
      onSearchChange,
      placeholder,
      padding,
      inputStyle,
      iconColor,
      iconBackName,
      iconSearchName,
      iconCloseName,
      placeholderColor,
      textStyle,
    } = this.props;

    let {iconSize} = this.props;

    iconSize = typeof iconSize !== 'undefined' ? iconSize : height * 0.5;

    return (
      <View
        onStartShouldSetResponder={this._dismissKeyboard}
        style={{padding: padding}}
      >
        <View
          style={[
            styles.searchBar,
            {
              height: height + 10,
              paddingLeft: height * 0.25,
            },
            inputStyle,
          ]}
        >
          {this.state.isOnFocus
            ? <TouchableOpacity onPress={this._backPressed.bind(this)}>
                <Icon
                  name={iconBackName}
                  size={height * 0.5}
                  color={iconColor}
                />
              </TouchableOpacity>
            : <Icon
                name={iconSearchName}
                size={height * 0.5}
                color={iconColor}
              />}
          <TextInput
            autoCorrect={autoCorrect === true}
            ref={c => this._textInput = c}
            returnKeyType={returnKeyType}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChangeText={onSearchChange}
            onEndEditing={this.props.onEndEditing}
            onSubmitEditing={this.props.onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            underlineColorAndroid="transparent"
            style={[
              styles.searchBarInput,
              {
                paddingLeft: height * 0.5,
                fontSize: height * 0.4,
              },
              textStyle,
            ]}
            {...this.props.inputProps}
          />
          {this.state.wait
            ? <ActivityIndicator size={'large'} />
            : <Text>
                this is result if  anybody search anything without press Enter
              </Text>}
          {this.state.isOnFocus
            ? <TouchableOpacity onPress={this._onClose}>
                <Icon
                  style={{paddingRight: height * 0.5}}
                  name={iconCloseName}
                  size={iconSize}
                  color={iconColor}
                />
              </TouchableOpacity>
            : null}
        </View>
      </View>
    );
  }
}

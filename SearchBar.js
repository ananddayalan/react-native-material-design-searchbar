import React from 'react';
import PropTypes from 'prop-types'
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
    inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconCloseComponent: PropTypes.object,
    iconSearchComponent: PropTypes.object,
    iconBackComponent: PropTypes.object,
    iconCloseName: PropTypes.string,
    iconSearchName: PropTypes.string,
    iconBackName: PropTypes.string,
    placeholderColor: PropTypes.string,
    iconColor: PropTypes.string,
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    inputProps: PropTypes.object,
    onBackPress: PropTypes.func,
    alwaysShowBackButton: PropTypes.bool,
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
    alwaysShowBackButton: false,
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
    this.props.onSearchChange('');
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

  setText(text, focus) {
    this._textInput.setNativeProps({ text: text });
    if (focus) {
      this._onFocus();
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
      iconCloseComponent,
      iconSearchComponent,
      iconBackComponent,
      iconBackName,
      iconSearchName,
      iconCloseName,
      placeholderColor,
      textStyle,
    } = this.props;

    let { iconSize, iconPadding } = this.props

    iconSize = typeof iconSize !== 'undefined' ? iconSize : height * 0.5
    iconPadding = typeof iconPadding !== 'undefined' ? iconPadding : height * 0.25

    return (
      <View
        onStartShouldSetResponder={this._dismissKeyboard}
        style={{padding: padding}}
      >
        <View
          style={
            [
              styles.searchBar,
              {
                height: height,
                paddingLeft: iconPadding
              },
              inputStyle
            ]
          }
        >
          {this.state.isOnFocus || this.props.alwaysShowBackButton
            ? <TouchableOpacity onPress={this._backPressed.bind(this)}>
                { iconBackComponent ?
                  iconBackComponent
                  :
                  <Icon
                    name={iconBackName}
                    size={height * 0.5}
                    color={iconColor}
                  />
                }
              </TouchableOpacity>
            :
            ( iconSearchComponent ?
              iconSearchComponent
              :
              <Icon
                name={iconSearchName}
                size={height * 0.5}
                color={iconColor}
              />
            )
          }
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
            style={
              [styles.searchBarInput,
                {
                  paddingLeft: iconPadding,
                  fontSize: height * 0.4,
                },
                textStyle
              ]
            }
            {...this.props.inputProps}
          />
          {this.state.isOnFocus ?
            <TouchableOpacity onPress={this._onClose}>
              { iconCloseComponent ?
                iconCloseComponent
                :
                <Icon
                  style={{paddingRight: iconPadding }}
                  name={iconCloseName} size={iconSize}
                  color={iconColor}
                />
              }
            </TouchableOpacity>
          : null
          }
        </View>
      </View>
    );
  }
}

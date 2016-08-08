import React, { PropTypes } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dismissKeyboard from 'dismissKeyboard';

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

class SearchBar extends React.Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    autoCorrect: PropTypes.bool,
    returnKeyType: PropTypes.string,
    onSearchChange: PropTypes.func,
    placeholder: PropTypes.string,
    padding: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOnFocus: false,
    };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this._textInput.setNativeProps({ text: '' });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  _onFocus() {
    this.setState({ isOnFocus: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onBlur() {
    this.setState({ isOnFocus: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    dismissKeyboard();
  }

  render() {
    const { height, autoCorrect, returnKeyType, onSearchChange, placeholder, padding } = this.props;
    const TouchableWrapperPadding = padding !== undefined ? padding : 5;
    return (
      <View
        onStartShouldSetResponder={() => dismissKeyboard()}
        style={{ padding: TouchableWrapperPadding }}
      >
        <View
          style={
            [styles.searchBar,
              {
                height: height + 10,
                paddingLeft: height * 0.25,
              },
            ]
          }
        >
          {this.state.isOnFocus ?
            <TouchableOpacity onPress={() => dismissKeyboard()}>
              <Icon
                name={"md-arrow-back"} size={height * 0.5}
                color="#737373"
              />
            </TouchableOpacity>
          :
            <Icon
              name={"md-search"} size={height * 0.5}
              color="#737373"
            />
          }
          <TextInput
            autoCorrect={autoCorrect === true}
            ref={(c) => (this._textInput = c)}
            returnKeyType={returnKeyType !== undefined ? returnKeyType : 'search'}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            onChange={onSearchChange !== undefined ? onSearchChange : undefined}
            placeholder={placeholder !== undefined ? placeholder : 'Search...'}
            placeholderTextColor="#bdbdbd"
            style={
              [styles.searchBarInput,
                {
                  paddingLeft: height * 0.5,
                  fontSize: height * 0.4,
                },
              ]
            }
          />
          {this.state.isOnFocus ?
            <TouchableOpacity onPress={this._onClose}>
              <Icon
                style={{ paddingRight: height * 0.5 }}
                name={"md-close"} size={height * 0.5}
                color="#737373"
              />
            </TouchableOpacity>
          : null
          }
        </View>
      </View>
    );
  }
}

module.exports = SearchBar;

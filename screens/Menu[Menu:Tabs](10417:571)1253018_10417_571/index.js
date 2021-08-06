import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10417_572}>
        <View style={styles.View_10417_573} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25ce/703a/dfd3302d67a1f57542bfc9c34e32c1d4"
          }}
          style={styles.ImageBackground_10417_574}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd7/9e01/5d2a384b5dc89e91e3943503f4449091"
          }}
          style={styles.ImageBackground_10417_575}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9cf/077c/ee0357a912797d6e3923287073443a12"
          }}
          style={styles.ImageBackground_10417_576}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0af/4234/097435c74e8fb53d40cc9feebe2a8404"
          }}
          style={styles.ImageBackground_10417_577}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df2/8570/3ffc811ea834b3ec0248b219cd402729"
          }}
          style={styles.ImageBackground_10417_578}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_585}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_586}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_321"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_587}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_588}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_84"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_589}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_65"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10417_572: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_573: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 251, 255, 1)"
  },
  ImageBackground_10417_574: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_10417_575: {
    width: wp("5.8662780761718745%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%")
  },
  ImageBackground_10417_576: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%")
  },
  ImageBackground_10417_577: {
    width: wp("6.4%"),
    height: hp("3.1947388675043493%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%")
  },
  ImageBackground_10417_578: {
    width: wp("6.4%"),
    height: hp("2.497438524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%")
  },
  TouchableOpacity_10417_585: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  TouchableOpacity_10417_586: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  TouchableOpacity_10417_587: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  TouchableOpacity_10417_588: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  TouchableOpacity_10417_589: {
    width: wp("14.933333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

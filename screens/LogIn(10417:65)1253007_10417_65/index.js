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
      <View style={styles.View_10417_66}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eaf/a0f6/4a365ee03a71e4b3206ee6d03054dcdd"
          }}
          style={styles.ImageBackground_10417_67}
        />
        <View style={styles.View_10417_68} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b132/b16a/858012c21782dbe8d19c5dbbc7280df2"
          }}
          style={styles.ImageBackground_10417_69}
        />
        <View style={styles.View_10417_70}>
          <View style={styles.View_10417_71} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af8/12a1/bd605205baca54d5006da202a06ad3b7"
            }}
            style={styles.ImageBackground_10417_72}
          />
          <View style={styles.View_10417_77}>
            <Text style={styles.Text_10417_77}>Log in with Google</Text>
          </View>
        </View>
        <View style={styles.View_10417_78}>
          <Text style={styles.Text_10417_78}>Log in to your account</Text>
        </View>
        <View style={styles.View_10417_79}>
          <Text style={styles.Text_10417_79}>
            Get the most of football, save your favorite articles, and be
            notified on top news
          </Text>
        </View>
        <View style={styles.View_10417_80}>
          <View style={styles.View_10417_81} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e577/ea99/00f2d1014512e3c5d85dd6329cde1123"
            }}
            style={styles.ImageBackground_10417_82}
          />
          <View style={styles.View_10417_83}>
            <Text style={styles.Text_10417_83}>Log in with Facebook</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10417_66: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_67: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_68: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5
  },
  ImageBackground_10417_69: {
    width: wp("29.06666666666667%"),
    height: hp("14.89071038251366%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%")
  },
  View_10417_70: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("58.606557377049185%")
  },
  View_10417_71: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_10417_72: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%")
  },
  View_10417_77: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_77: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_78: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("36.20218579234973%"),
    justifyContent: "center"
  },
  Text_10417_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_79: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_10417_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_80: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("68.0327868852459%")
  },
  View_10417_81: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(66, 103, 178, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_10417_82: {
    width: wp("3.4601674397786457%"),
    height: hp("3.278688524590164%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%")
  },
  View_10417_83: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

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
      <View style={styles.View_10417_385}>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_386}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b68/71be/ff21c8ae5b38e910f4361adb7814bf20"
            }}
            style={styles.ImageBackground_10417_387}
          />
          <View style={styles.View_10417_388} />
          <View style={styles.View_10417_389}>
            <Text style={styles.Text_10417_389}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_390}>
            <Text style={styles.Text_10417_390}>39m • Alden Johngon</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_391}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5181/47bb/28c42f60ac8dd71b1de267f90de57170"
            }}
            style={styles.ImageBackground_10417_392}
          />
          <View style={styles.View_10417_393}>
            <Text style={styles.Text_10417_393}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_394}>
            <Text style={styles.Text_10417_394}>39m • Alden Johngon</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_395}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_396} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df85/64d4/12a0e3015789dae66bb2ea42a55bde65"
            }}
            style={styles.ImageBackground_10417_397}
          />
          <View style={styles.View_10417_398}>
            <Text style={styles.Text_10417_398}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
          <View style={styles.View_10417_399}>
            <Text style={styles.Text_10417_399}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_400}>
            <Text style={styles.Text_10417_400}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_401}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_402} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_403}
          />
          <View style={styles.View_10417_404}>
            <Text style={styles.Text_10417_404}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_405}>
            <Text style={styles.Text_10417_405}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_406}>
            <Text style={styles.Text_10417_406}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_407}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_408} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_409}
          />
          <View style={styles.View_10417_410}>
            <Text style={styles.Text_10417_410}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_411}>
            <Text style={styles.Text_10417_411}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_412}>
            <Text style={styles.Text_10417_412}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_413}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_414} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_415}
          />
          <View style={styles.View_10417_416}>
            <Text style={styles.Text_10417_416}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_417}>
            <Text style={styles.Text_10417_417}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_418}>
            <Text style={styles.Text_10417_418}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_419}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_420} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_421}
          />
          <View style={styles.View_10417_422}>
            <Text style={styles.Text_10417_422}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_423}>
            <Text style={styles.Text_10417_423}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_424}>
            <Text style={styles.Text_10417_424}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_425}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_426} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_427}
          />
          <View style={styles.View_10417_428}>
            <Text style={styles.Text_10417_428}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_429}>
            <Text style={styles.Text_10417_429}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_430}>
            <Text style={styles.Text_10417_430}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_10417_431}>
        <View style={styles.View_10417_432}>
          <Text style={styles.Text_10417_432}>Feed</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_433}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_434} />
          <View style={styles.View_10417_435}>
            <Text style={styles.Text_10417_435}>News</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_436}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_442"))
          }
        >
          <View style={styles.View_10417_437} />
          <View style={styles.View_10417_438}>
            <Text style={styles.Text_10417_438}>Scores</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_439}>
          <View style={styles.View_10417_440} />
          <View style={styles.View_10417_441}>
            <Text style={styles.Text_10417_441}>Transfers</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("202.18579234972677%") },
  View_10417_385: {
    width: wp("100%"),
    height: hp("202.18579234972677%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_10417_386: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("21.03825136612022%")
  },
  ImageBackground_10417_387: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10417_388: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_389: {
    width: wp("83.17096354166667%"),
    minWidth: wp("83.17096354166667%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011458333333334%"),
    top: hp("14.61748633879781%"),
    justifyContent: "flex-end"
  },
  Text_10417_389: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_390: {
    width: wp("48.93982747395834%"),
    minWidth: wp("48.93982747395834%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011458333333334%"),
    top: hp("22.677595628415297%"),
    justifyContent: "flex-end"
  },
  Text_10417_390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_391: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("110.65573770491804%")
  },
  ImageBackground_10417_392: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_393: {
    width: wp("83.17096354166667%"),
    minWidth: wp("83.17096354166667%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011458333333334%"),
    top: hp("14.617486338797804%"),
    justifyContent: "flex-end"
  },
  Text_10417_393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_394: {
    width: wp("48.93982747395834%"),
    minWidth: wp("48.93982747395834%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011458333333334%"),
    top: hp("22.677595628415276%"),
    justifyContent: "flex-end"
  },
  Text_10417_394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_395: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("50%")
  },
  View_10417_396: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_397: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_398: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_398: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_399: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633881%"),
    justifyContent: "flex-end"
  },
  Text_10417_399: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_400: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185794%"),
    justifyContent: "flex-start"
  },
  Text_10417_400: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_401: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("70.21857923497268%")
  },
  View_10417_402: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_403: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_404: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_404: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_405: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633881%"),
    justifyContent: "flex-end"
  },
  Text_10417_405: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_406: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-start"
  },
  Text_10417_406: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_407: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("90.43715846994536%")
  },
  View_10417_408: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_409: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_410: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_410: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_411: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_411: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_412: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-start"
  },
  Text_10417_412: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_413: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("139.61748633879782%")
  },
  View_10417_414: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_415: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_416: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_416: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_417: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185773%"),
    justifyContent: "flex-start"
  },
  Text_10417_417: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_418: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_10417_418: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_419: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("159.8360655737705%")
  },
  View_10417_420: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_421: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_422: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_422: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_423: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_423: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_424: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185773%"),
    justifyContent: "flex-start"
  },
  Text_10417_424: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_425: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("180.05464480874315%")
  },
  View_10417_426: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_427: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_428: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.3224043715847245%"),
    justifyContent: "flex-start"
  },
  Text_10417_428: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_429: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179644756629819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633895%"),
    justifyContent: "flex-end"
  },
  Text_10417_429: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_430: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-start"
  },
  Text_10417_430: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_431: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 245, 249, 1)",
    overflow: "hidden"
  },
  View_10417_432: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("6.0109289617486334%"),
    justifyContent: "flex-end"
  },
  Text_10417_432: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_433: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("13.661202185792352%")
  },
  View_10417_434: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_435: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_436: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.858984375%"),
    top: hp("13.661202185792352%")
  },
  View_10417_437: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_438: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_439: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.5783203125%"),
    top: hp("13.661202185792352%")
  },
  View_10417_440: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_441: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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

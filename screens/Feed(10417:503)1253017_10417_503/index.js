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
      <View style={styles.View_10417_504}>
        <View style={styles.View_10417_505}>
          <View style={styles.View_10417_506} />
          <View style={styles.View_10417_507}>
            <Text style={styles.Text_10417_507}>0 : 2</Text>
          </View>
          <View style={styles.View_10417_508}>
            <Text style={styles.Text_10417_508}>Sweden</Text>
          </View>
          <View style={styles.View_10417_509}>
            <Text style={styles.Text_10417_509}>Liechtenstein</Text>
          </View>
          <View style={styles.View_10417_510}>
            <Text style={styles.Text_10417_510}>Latest match</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf72/42e6/44a6241648aced7325d4052ff570af37"
            }}
            style={styles.ImageBackground_10417_511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd5/0d09/1879223b90b8d30739fa7ca2cdd0929b"
            }}
            style={styles.ImageBackground_10417_512}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_513}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/570a/14c8/4e706cce5fa94a8cd7c64226b1d147fa"
            }}
            style={styles.ImageBackground_10417_514}
          />
          <View style={styles.View_10417_515} />
          <View style={styles.View_10417_516}>
            <Text style={styles.Text_10417_516}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_517}>
            <Text style={styles.Text_10417_517}>39m • Alden Johngon</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_518}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eed/290f/9043db94df1230698164f6a7b968e2c8"
            }}
            style={styles.ImageBackground_10417_519}
          />
          <View style={styles.View_10417_520}>
            <Text style={styles.Text_10417_520}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_521}>
            <Text style={styles.Text_10417_521}>39m • Alden Johngon</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_522}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_523} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_524}
          />
          <View style={styles.View_10417_525}>
            <Text style={styles.Text_10417_525}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
          <View style={styles.View_10417_526}>
            <Text style={styles.Text_10417_526}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_527}>
            <Text style={styles.Text_10417_527}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_528}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_529} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_530}
          />
          <View style={styles.View_10417_531}>
            <Text style={styles.Text_10417_531}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_532}>
            <Text style={styles.Text_10417_532}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_533}>
            <Text style={styles.Text_10417_533}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_534}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_535} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_536}
          />
          <View style={styles.View_10417_537}>
            <Text style={styles.Text_10417_537}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_538}>
            <Text style={styles.Text_10417_538}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_539}>
            <Text style={styles.Text_10417_539}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_540}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_541} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_542}
          />
          <View style={styles.View_10417_543}>
            <Text style={styles.Text_10417_543}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_544}>
            <Text style={styles.Text_10417_544}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_545}>
            <Text style={styles.Text_10417_545}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_546}>
          <Text style={styles.Text_10417_546}>View all</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_547}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_548} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_549}
          />
          <View style={styles.View_10417_550}>
            <Text style={styles.Text_10417_550}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_551}>
            <Text style={styles.Text_10417_551}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_552}>
            <Text style={styles.Text_10417_552}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_553}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_554} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_555}
          />
          <View style={styles.View_10417_556}>
            <Text style={styles.Text_10417_556}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_557}>
            <Text style={styles.Text_10417_557}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_558}>
            <Text style={styles.Text_10417_558}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_559}>
          <Text style={styles.Text_10417_559}>Champions League</Text>
        </View>
      </View>
      <View style={styles.View_10417_560}>
        <View style={styles.View_10417_561}>
          <Text style={styles.Text_10417_561}>Feed</Text>
        </View>
        <View style={styles.View_10417_562}>
          <View style={styles.View_10417_563} />
          <View style={styles.View_10417_564}>
            <Text style={styles.Text_10417_564}>News</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_565}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_442"))
          }
        >
          <View style={styles.View_10417_566} />
          <View style={styles.View_10417_567}>
            <Text style={styles.Text_10417_567}>Scores</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_568}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_384"))
          }
        >
          <View style={styles.View_10417_569} />
          <View style={styles.View_10417_570}>
            <Text style={styles.Text_10417_570}>Transfers</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("226.2295081967213%") },
  View_10417_504: {
    width: wp("100%"),
    height: hp("226.2295081967213%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_505: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("21.311475409836063%")
  },
  View_10417_506: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
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
  View_10417_507: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("4.918032786885249%"),
    justifyContent: "center"
  },
  Text_10417_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_508: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("6.557377049180328%"),
    justifyContent: "flex-end"
  },
  Text_10417_508: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_509: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("6.557377049180328%"),
    justifyContent: "flex-end"
  },
  Text_10417_509: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_510: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-end"
  },
  Text_10417_510: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_511: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_10417_512: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("3.278688524590166%")
  },
  TouchableOpacity_10417_513: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("34.83606557377049%")
  },
  ImageBackground_10417_514: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
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
  View_10417_515: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_10417_516: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("14.071038251366119%"),
    justifyContent: "flex-end"
  },
  Text_10417_516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_517: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("22.131147540983612%"),
    justifyContent: "flex-end"
  },
  Text_10417_517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_518: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("133.74316939890713%")
  },
  ImageBackground_10417_519: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_520: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("14.071038251366105%"),
    justifyContent: "flex-end"
  },
  Text_10417_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_521: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("22.13114754098359%"),
    justifyContent: "flex-end"
  },
  Text_10417_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_522: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("63.25136612021858%")
  },
  View_10417_523: {
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
  ImageBackground_10417_524: {
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
  View_10417_525: {
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
  Text_10417_525: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_526: {
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
  Text_10417_526: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_527: {
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
  Text_10417_527: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_528: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("83.46994535519126%")
  },
  View_10417_529: {
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
  ImageBackground_10417_530: {
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
  View_10417_531: {
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
  Text_10417_531: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_532: {
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
  Text_10417_532: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_533: {
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
  Text_10417_533: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_534: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("103.68852459016394%")
  },
  View_10417_535: {
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
  ImageBackground_10417_536: {
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
  View_10417_537: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_10417_537: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_538: {
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
  Text_10417_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_539: {
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
  Text_10417_539: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_540: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("162.1584699453552%")
  },
  View_10417_541: {
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
  ImageBackground_10417_542: {
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
  View_10417_543: {
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
  Text_10417_543: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_544: {
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
  Text_10417_544: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_545: {
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
  Text_10417_545: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_546: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("127.73224043715847%"),
    justifyContent: "flex-end"
  },
  Text_10417_546: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_547: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("182.37704918032787%")
  },
  View_10417_548: {
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
  ImageBackground_10417_549: {
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
  View_10417_550: {
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
  Text_10417_550: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_551: {
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
  Text_10417_551: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_552: {
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
  Text_10417_552: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_553: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("202.59562841530055%")
  },
  View_10417_554: {
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
  ImageBackground_10417_555: {
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
  View_10417_556: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.3224043715846676%"),
    justifyContent: "flex-start"
  },
  Text_10417_556: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_557: {
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
  Text_10417_557: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_558: {
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
  Text_10417_558: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_559: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("126.50273224043715%"),
    justifyContent: "flex-end"
  },
  Text_10417_559: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_560: {
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
  View_10417_561: {
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
  Text_10417_561: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_562: {
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
  View_10417_563: {
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
  View_10417_564: {
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
  Text_10417_564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_565: {
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
  View_10417_566: {
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
  View_10417_567: {
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
  Text_10417_567: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_568: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57830403645833%"),
    top: hp("13.661202185792352%")
  },
  View_10417_569: {
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
  View_10417_570: {
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
  Text_10417_570: {
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

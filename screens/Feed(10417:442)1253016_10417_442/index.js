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
      <View style={styles.View_10417_443}>
        <View style={styles.View_10417_444}>
          <View style={styles.View_10417_445} />
          <View style={styles.View_10417_446}>
            <Text style={styles.Text_10417_446}>0 : 2</Text>
          </View>
          <View style={styles.View_10417_447}>
            <Text style={styles.Text_10417_447}>Sheffield</Text>
          </View>
          <View style={styles.View_10417_448}>
            <Text style={styles.Text_10417_448}>Arsenal</Text>
          </View>
          <View style={styles.View_10417_449}>
            <Text style={styles.Text_10417_449}>9:00 PM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21cc/fc43/191bdcb7e4bfe4781b9818bcd8f36446"
            }}
            style={styles.ImageBackground_10417_450}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a9/9c89/65a7d9c6e1bb9ba51f645fe6e9bbe370"
            }}
            style={styles.ImageBackground_10417_451}
          />
        </View>
        <View style={styles.View_10417_452}>
          <View style={styles.View_10417_453} />
          <View style={styles.View_10417_454}>
            <Text style={styles.Text_10417_454}>0 : 2</Text>
          </View>
          <View style={styles.View_10417_455}>
            <Text style={styles.Text_10417_455}>Sheffield</Text>
          </View>
          <View style={styles.View_10417_456}>
            <Text style={styles.Text_10417_456}>Arsenal</Text>
          </View>
          <View style={styles.View_10417_457}>
            <Text style={styles.Text_10417_457}>9:00 PM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0550/d492/006b7e22bab84335f99ce3a29c5fd5f9"
            }}
            style={styles.ImageBackground_10417_458}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f58/1b05/a876407109a790fe4080350640b8dc31"
            }}
            style={styles.ImageBackground_10417_459}
          />
        </View>
        <View style={styles.View_10417_460}>
          <View style={styles.View_10417_461} />
          <View style={styles.View_10417_462}>
            <Text style={styles.Text_10417_462}>0 : 2</Text>
          </View>
          <View style={styles.View_10417_463}>
            <Text style={styles.Text_10417_463}>Sheffield</Text>
          </View>
          <View style={styles.View_10417_464}>
            <Text style={styles.Text_10417_464}>Arsenal</Text>
          </View>
          <View style={styles.View_10417_465}>
            <Text style={styles.Text_10417_465}>9:00 PM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e84/164e/8703c2193cdeecaf41454fd2cfb0555a"
            }}
            style={styles.ImageBackground_10417_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3da3/e705/124a7b25ad14712cf266729a28510e39"
            }}
            style={styles.ImageBackground_10417_467}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_468}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f8b/855d/329bc306b62e375de02169c9d77dfc23"
            }}
            style={styles.ImageBackground_10417_469}
          />
          <View style={styles.View_10417_470}>
            <Text style={styles.Text_10417_470}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_471}>
            <Text style={styles.Text_10417_471}>39m • Alden Johngon</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_472}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_473} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_474}
          />
          <View style={styles.View_10417_475}>
            <Text style={styles.Text_10417_475}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_476}>
            <Text style={styles.Text_10417_476}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_477}>
            <Text style={styles.Text_10417_477}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_478}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_479} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_480}
          />
          <View style={styles.View_10417_481}>
            <Text style={styles.Text_10417_481}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_482}>
            <Text style={styles.Text_10417_482}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_483}>
            <Text style={styles.Text_10417_483}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_484}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_373"))
          }
        >
          <View style={styles.View_10417_485} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_486}
          />
          <View style={styles.View_10417_487}>
            <Text style={styles.Text_10417_487}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_488}>
            <Text style={styles.Text_10417_488}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_489}>
            <Text style={styles.Text_10417_489}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_490}>
          <Text style={styles.Text_10417_490}>October 24</Text>
        </View>
        <View style={styles.View_10417_491}>
          <Text style={styles.Text_10417_491}>Highlights</Text>
        </View>
      </View>
      <View style={styles.View_10417_492}>
        <View style={styles.View_10417_493}>
          <Text style={styles.Text_10417_493}>Feed</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_494}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_495} />
          <View style={styles.View_10417_496}>
            <Text style={styles.Text_10417_496}>News</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_497}>
          <View style={styles.View_10417_498} />
          <View style={styles.View_10417_499}>
            <Text style={styles.Text_10417_499}>Scores</Text>
          </View>
        </View>
        <View style={styles.View_10417_500}>
          <View style={styles.View_10417_501} />
          <TouchableOpacity
            style={styles.TouchableOpacity_10417_502}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("10417_384"))
            }
          >
            <Text style={styles.Text_10417_502}>Transfers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("170.21857923497268%") },
  View_10417_443: {
    width: wp("100%"),
    height: hp("170.21857923497268%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_444: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("27.86885245901639%")
  },
  View_10417_445: {
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
  View_10417_446: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("4.918032786885245%"),
    justifyContent: "center"
  },
  Text_10417_446: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_447: {
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
  Text_10417_447: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_448: {
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
  Text_10417_448: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_449: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.27322404371584597%"),
    justifyContent: "flex-end"
  },
  Text_10417_449: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_450: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("2.595628415300549%")
  },
  ImageBackground_10417_451: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("2.595628415300549%")
  },
  View_10417_452: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("41.39344262295082%")
  },
  View_10417_453: {
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
  View_10417_454: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("4.918032786885242%"),
    justifyContent: "center"
  },
  Text_10417_454: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_455: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-end"
  },
  Text_10417_455: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_456: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-end"
  },
  Text_10417_456: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_457: {
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
  Text_10417_457: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_458: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("2.5956284153005456%")
  },
  ImageBackground_10417_459: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("2.5956284153005456%")
  },
  View_10417_460: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("54.91803278688525%")
  },
  View_10417_461: {
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
  View_10417_462: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("4.918032786885242%"),
    justifyContent: "center"
  },
  Text_10417_462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_463: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-end"
  },
  Text_10417_463: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_464: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-end"
  },
  Text_10417_464: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_465: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-end"
  },
  Text_10417_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_466: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("2.5956284153005456%")
  },
  ImageBackground_10417_467: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("2.5956284153005456%")
  },
  TouchableOpacity_10417_468: {
    width: wp("93.06666666666666%"),
    minWidth: wp("93.06666666666666%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("78.41530054644808%")
  },
  ImageBackground_10417_469: {
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
  View_10417_470: {
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
  Text_10417_470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_471: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("22.13114754098362%"),
    justifyContent: "flex-end"
  },
  Text_10417_471: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_472: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("106.83060109289617%")
  },
  View_10417_473: {
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
  ImageBackground_10417_474: {
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
  View_10417_475: {
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
  Text_10417_475: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_476: {
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
  Text_10417_476: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_477: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_10417_477: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_478: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("127.04918032786885%")
  },
  View_10417_479: {
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
  ImageBackground_10417_480: {
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
  View_10417_481: {
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
  Text_10417_481: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_482: {
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
  Text_10417_482: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_483: {
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
  Text_10417_483: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_484: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("147.26775956284152%")
  },
  View_10417_485: {
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
  ImageBackground_10417_486: {
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
  View_10417_487: {
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
  Text_10417_487: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_488: {
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
  Text_10417_488: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_489: {
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
  Text_10417_489: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_490: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("20.62841530054645%"),
    justifyContent: "flex-end"
  },
  Text_10417_490: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_491: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("71.17486338797814%"),
    justifyContent: "flex-end"
  },
  Text_10417_491: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_492: {
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
  View_10417_493: {
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
  Text_10417_493: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_494: {
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
  View_10417_495: {
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
  View_10417_496: {
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
  Text_10417_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_497: {
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
  View_10417_498: {
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
  View_10417_499: {
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
  Text_10417_499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_500: {
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
  View_10417_501: {
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
  TouchableOpacity_10417_502: {
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
  Text_10417_502: {
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

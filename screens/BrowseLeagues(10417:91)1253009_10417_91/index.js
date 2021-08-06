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
      <View style={styles.View_10417_92}>
        <View style={styles.View_10417_93}>
          <Text style={styles.Text_10417_93}>Browse Leagues</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_95}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_96}>
            <View style={styles.View_10417_97}>
              <Text style={styles.Text_10417_97}>English Premier League</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_98}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_100}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_101}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_102}>
            <View style={styles.View_10417_103}>
              <Text style={styles.Text_10417_103}>UEFA Champions League</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_104}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_106}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_107}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_108}>
            <View style={styles.View_10417_109}>
              <Text style={styles.Text_10417_109}>UEFA Europa League</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_110}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_112}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_113}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_114}>
            <View style={styles.View_10417_115}>
              <Text style={styles.Text_10417_115}>
                English League Championship
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_116}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_118}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_119}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_120}>
            <View style={styles.View_10417_121}>
              <Text style={styles.Text_10417_121}>
                Spanish Primera División
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_122}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_124}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_125}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_126}>
            <View style={styles.View_10417_127}>
              <Text style={styles.Text_10417_127}>English Carabao Cup</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_128}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_130}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_131}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_132}>
            <View style={styles.View_10417_133}>
              <Text style={styles.Text_10417_133}>German Bundesliga</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_134}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_136}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_137}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_138}>
            <View style={styles.View_10417_139}>
              <Text style={styles.Text_10417_139}>Italian Serie A</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_140}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_142}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_143}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        >
          <View style={styles.View_10417_144}>
            <View style={styles.View_10417_145}>
              <Text style={styles.Text_10417_145}>French Ligue 1</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ef/3ede/c007b1708a0f469adfef0767449ba9e5"
              }}
              style={styles.ImageBackground_10417_146}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
            }}
            style={styles.ImageBackground_10417_148}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f21c/eb31/b8a56511e96021b71636f24459cd5020"
          }}
          style={styles.ImageBackground_10417_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5157/80a5/c64697b52efa5484ff5fa27f68708663"
          }}
          style={styles.ImageBackground_10417_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52aa/1bdb/22a32463aa8b1fe67eac3461c8a4a0fb"
          }}
          style={styles.ImageBackground_10417_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e5/9dc6/09df6bfe49c24cadae238b02bb8eb6e2"
          }}
          style={styles.ImageBackground_10417_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6806/c186/d0d248c866b87293183c96babfdfc60e"
          }}
          style={styles.ImageBackground_10417_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/517c/6152624d354632cacdb971de0abde5cf"
          }}
          style={styles.ImageBackground_10417_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc0/b98d/6011830342358c8d43e3a92dce32b65f"
          }}
          style={styles.ImageBackground_10417_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ee0/3ea5/e878bd998266b28269541599ae855d65"
          }}
          style={styles.ImageBackground_10417_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5254/4927/ac15e2edcffc4a88c8935220f8f53c28"
          }}
          style={styles.ImageBackground_10417_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1b/7e74/3980dce8011f02746beba37df4ac4f68"
          }}
          style={styles.ImageBackground_10417_158}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8207/04df/a2a83d831f1d2defae2398b6a874047b"
          }}
          style={styles.TouchableOpacity_10417_159}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_161"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("120.62841530054644%") },
  View_10417_92: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("120.62841530054644%"),
    minHeight: hp("120.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_93: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("11.748633879781421%"),
    justifyContent: "flex-end"
  },
  Text_10417_93: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_95: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_96: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_97: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_97: {
    color: "rgba(206, 17, 39, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_98: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_100: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_101: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_102: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_103: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_103: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_104: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_106: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_107: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_108: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_109: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_110: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_112: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.377049180327866%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_114: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_115: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_116: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_118: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_119: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.30601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_120: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_121: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_121: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_122: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_124: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.23497267759562%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_126: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_127: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_127: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_128: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_130: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_132: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_133: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_133: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_134: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_136: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_137: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_138: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_139: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_139: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_140: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_142: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10417_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112.02185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_144: {
    width: wp("96%"),
    height: hp("4.918032786885246%"),
    top: hp("-0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  View_10417_145: {
    width: wp("82.13333333333334%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    justifyContent: "center"
  },
  Text_10417_145: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_146: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_148: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("7.516529521004088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10417_149: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.174863387978142%")
  },
  ImageBackground_10417_150: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_151: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.92896174863388%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_152: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.85792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_153: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.92349726775956%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_154: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("68.85245901639344%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_155: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("79.78142076502732%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_156: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("90.84699453551912%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_157: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("101.22950819672131%"),
    resizeMode: "cover"
  },
  ImageBackground_10417_158: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("112.43169398907105%"),
    resizeMode: "cover"
  },
  TouchableOpacity_10417_159: {
    width: wp("15.466666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

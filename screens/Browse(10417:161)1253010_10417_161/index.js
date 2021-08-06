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
      <View style={styles.View_10417_162}>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_163}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_164} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c3/fc6f/161c6dcd2e18a4e185d14030123729a3"
            }}
            style={styles.ImageBackground_10417_165}
          />
          <View style={styles.View_10417_166}>
            <Text style={styles.Text_10417_166}>Manchester United</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_167}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_168} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ba4/605f/155742ff05a92d39f94e38d0d38f0877"
            }}
            style={styles.ImageBackground_10417_169}
          />
          <View style={styles.View_10417_170}>
            <Text style={styles.Text_10417_170}>Arsenal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_171}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_172} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3145/685f/3d79930950527d2d8932d2dfc00d48f6"
            }}
            style={styles.ImageBackground_10417_173}
          />
          <View style={styles.View_10417_174}>
            <Text style={styles.Text_10417_174}>Aston Villa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_175}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_176} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd9b/eb02/26aaf22d766d6c4e1dfc4115bc87215a"
            }}
            style={styles.ImageBackground_10417_177}
          />
          <View style={styles.View_10417_178}>
            <Text style={styles.Text_10417_178}>Sheffield United</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_179}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_180} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22d0/1cae/3f392925675752c7f3c5eb3d1d979ce8"
            }}
            style={styles.ImageBackground_10417_181}
          />
          <View style={styles.View_10417_182}>
            <Text style={styles.Text_10417_182}>Chelsea</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_183}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_184} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e74/4bc2/edba5787d8303535477d086439995aa8"
            }}
            style={styles.ImageBackground_10417_185}
          />
          <View style={styles.View_10417_186}>
            <Text style={styles.Text_10417_186}>Leicester City</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_187}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_188} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdfc/2c92/776919678ef78b420ad3dfcf89c7570c"
            }}
            style={styles.ImageBackground_10417_189}
          />
          <View style={styles.View_10417_190}>
            <Text style={styles.Text_10417_190}>Liverpool</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_192} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5707/19ce/987a8d9ff9c6e968fd9da5c42fbc66d7"
            }}
            style={styles.ImageBackground_10417_193}
          />
          <View style={styles.View_10417_194}>
            <Text style={styles.Text_10417_194}>Manchester City</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_195}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_196} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/227c/f00b/44bba56dfe5ed1b4aa2a6fb0532ff3cd"
            }}
            style={styles.ImageBackground_10417_197}
          />
          <View style={styles.View_10417_198}>
            <Text style={styles.Text_10417_198}>Tottenham Hotspur</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_199}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_200} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9bb/4ecb/9cb139e4a9f2a7ad687ed05f19ebab48"
            }}
            style={styles.ImageBackground_10417_201}
          />
          <View style={styles.View_10417_202}>
            <Text style={styles.Text_10417_202}>Burnley</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_203}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_204} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0b8/b260/b525a17fe1eae33ac537dbf583fe08db"
            }}
            style={styles.ImageBackground_10417_205}
          />
          <View style={styles.View_10417_206}>
            <Text style={styles.Text_10417_206}>Newcastle United</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_207}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        >
          <View style={styles.View_10417_208} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/184e/b3de/2b6ccf7745bda060eb3345da0d81df6a"
            }}
            style={styles.ImageBackground_10417_209}
          />
          <View style={styles.View_10417_210}>
            <Text style={styles.Text_10417_210}>Watford</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_10417_211}>
        <View style={styles.View_10417_212}>
          <Text style={styles.Text_10417_212}>Browse</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_213}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_91"))
          }
        >
          <View style={styles.View_10417_214} />
          <View style={styles.View_10417_215}>
            <Text style={styles.Text_10417_215}>English Premier League</Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fa/a25c/a763535a77591c5d6e9612d329d397f0"
          }}
          style={styles.ImageBackground_10417_216}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("120.62841530054644%") },
  View_10417_162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("120.62841530054644%"),
    minHeight: hp("120.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_10417_163: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_164: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_165: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_166: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "flex-start"
  },
  Text_10417_166: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_167: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_168: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_169: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333333%"),
    resizeMode: "cover"
  },
  View_10417_170: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    justifyContent: "flex-start"
  },
  Text_10417_170: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_171: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_172: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_173: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_174: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    justifyContent: "flex-start"
  },
  Text_10417_174: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_175: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_176: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_177: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_178: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    justifyContent: "flex-start"
  },
  Text_10417_178: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_179: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_180: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_181: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333333%"),
    resizeMode: "cover"
  },
  View_10417_182: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    justifyContent: "flex-start"
  },
  Text_10417_182: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_183: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_184: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_185: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_186: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "flex-start"
  },
  Text_10417_186: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_187: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_188: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_189: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333333%"),
    resizeMode: "cover"
  },
  View_10417_190: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    justifyContent: "flex-start"
  },
  Text_10417_190: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_191: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_192: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_193: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_194: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "flex-start"
  },
  Text_10417_194: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_195: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_196: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_197: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_198: {
    width: wp("23.733333333333334%"),
    top: hp("16.530054644808757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    justifyContent: "flex-start"
  },
  Text_10417_198: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_199: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_200: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_201: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333333%"),
    resizeMode: "cover"
  },
  View_10417_202: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    justifyContent: "flex-start"
  },
  Text_10417_202: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_203: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_204: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_205: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_206: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "flex-start"
  },
  Text_10417_206: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_207: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_208: {
    width: wp("28.53333333333333%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_209: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    resizeMode: "cover"
  },
  View_10417_210: {
    width: wp("23.733333333333334%"),
    top: hp("16.53005464480873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    justifyContent: "flex-start"
  },
  Text_10417_210: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_211: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 251, 255, 1)",
    overflow: "hidden"
  },
  View_10417_212: {
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
  Text_10417_212: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_213: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("13.661202185792352%")
  },
  View_10417_214: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    borderColor: "rgba(206, 17, 39, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_215: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_216: {
    width: wp("2.444444783528646%"),
    height: hp("2.0491804581522293%"),
    top: hp("14.879328826737535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.3111328125%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

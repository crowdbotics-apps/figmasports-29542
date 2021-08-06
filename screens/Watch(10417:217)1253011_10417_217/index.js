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
      <View style={styles.View_10417_218}>
        <View style={styles.View_10417_219}>
          <View style={styles.View_10417_220} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c57/2826/91302005a69a2b4e6c2aabd6ca650893"
            }}
            style={styles.ImageBackground_10417_221}
          />
          <View style={styles.View_10417_222}>
            <Text style={styles.Text_10417_222}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_223}>
            <Text style={styles.Text_10417_223}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_224} />
          <View style={styles.View_10417_225}>
            <Text style={styles.Text_10417_225}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_226}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6e/7d0c/cf46a926ecffcf50be438ecd70f6610d"
            }}
            style={styles.ImageBackground_10417_227}
          />
          <View style={styles.View_10417_228}>
            <Text style={styles.Text_10417_228}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_229}>
            <Text style={styles.Text_10417_229}>2h • Champions League</Text>
          </View>
        </View>
        <View style={styles.View_10417_230}>
          <View style={styles.View_10417_231} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc1/1568/98f5c320474ef2152302685375bb3e1c"
            }}
            style={styles.ImageBackground_10417_232}
          />
          <View style={styles.View_10417_233}>
            <Text style={styles.Text_10417_233}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_234}>
            <Text style={styles.Text_10417_234}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_235} />
          <View style={styles.View_10417_236}>
            <Text style={styles.Text_10417_236}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_237}>
          <View style={styles.View_10417_238} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/750e/edf1/3713fdc2edb2debdbfad2286294f9660"
            }}
            style={styles.ImageBackground_10417_239}
          />
          <View style={styles.View_10417_240}>
            <Text style={styles.Text_10417_240}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_241}>
            <Text style={styles.Text_10417_241}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_242} />
          <View style={styles.View_10417_243}>
            <Text style={styles.Text_10417_243}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_244}>
          <View style={styles.View_10417_245} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1231/03ba/03c5c4090cd9fd63b3d9a4cecfab1a92"
            }}
            style={styles.ImageBackground_10417_246}
          />
          <View style={styles.View_10417_247}>
            <Text style={styles.Text_10417_247}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_248}>
            <Text style={styles.Text_10417_248}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_249} />
          <View style={styles.View_10417_250}>
            <Text style={styles.Text_10417_250}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_251}>
          <View style={styles.View_10417_252} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebae/8459/bb35f118d5accc6f94271ea790299981"
            }}
            style={styles.ImageBackground_10417_253}
          />
          <View style={styles.View_10417_254}>
            <Text style={styles.Text_10417_254}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_255}>
            <Text style={styles.Text_10417_255}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_256} />
          <View style={styles.View_10417_257}>
            <Text style={styles.Text_10417_257}>1:35</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_258}>
        <View style={styles.View_10417_259}>
          <Text style={styles.Text_10417_259}>Watch</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_260}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_321"))
          }
        >
          <View style={styles.View_10417_261} />
          <View style={styles.View_10417_262}>
            <Text style={styles.Text_10417_262}>News</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10417_263}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_269"))
          }
        >
          <View style={styles.View_10417_264} />
          <View style={styles.View_10417_265}>
            <Text style={styles.Text_10417_265}>Replay</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_10417_266}>
          <View style={styles.View_10417_267} />
          <View style={styles.View_10417_268}>
            <Text style={styles.Text_10417_268}>Series</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("119.53551912568305%") },
  View_10417_218: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("119.53551912568305%"),
    minHeight: hp("119.53551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_219: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("52.86885245901639%")
  },
  View_10417_220: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  ImageBackground_10417_221: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_10417_222: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.13661202185793542%"),
    justifyContent: "flex-end"
  },
  Text_10417_222: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_223: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-end"
  },
  Text_10417_223: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_224: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_225: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_226: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("30.191256830601095%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("20.62841530054645%")
  },
  ImageBackground_10417_227: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("30.191256830601095%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_228: {
    width: wp("81.86666666666666%"),
    minWidth: wp("81.86666666666666%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("17.759562841530048%"),
    justifyContent: "flex-end"
  },
  Text_10417_228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_229: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("26.50273224043716%"),
    justifyContent: "flex-end"
  },
  Text_10417_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_230: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("65.84699453551912%")
  },
  View_10417_231: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  ImageBackground_10417_232: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_10417_233: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_10417_233: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_234: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-end"
  },
  Text_10417_234: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_235: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_236: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_237: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("78.82513661202186%")
  },
  View_10417_238: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  ImageBackground_10417_239: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_10417_240: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.1366120218579141%"),
    justifyContent: "flex-end"
  },
  Text_10417_240: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_241: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-end"
  },
  Text_10417_241: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_242: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_243: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185787%"),
    justifyContent: "center"
  },
  Text_10417_243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_244: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("91.80327868852459%")
  },
  View_10417_245: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  ImageBackground_10417_246: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_10417_247: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_10417_247: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_248: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-end"
  },
  Text_10417_248: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_249: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_250: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_251: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("104.78142076502732%")
  },
  View_10417_252: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  ImageBackground_10417_253: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_10417_254: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_10417_254: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_255: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-end"
  },
  Text_10417_255: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_256: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_257: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_258: {
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
  View_10417_259: {
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
  Text_10417_259: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_260: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("13.661202185792352%")
  },
  View_10417_261: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
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
  View_10417_262: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10417_263: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.94895833333334%"),
    top: hp("13.661202185792352%")
  },
  View_10417_264: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
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
  View_10417_265: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_265: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_266: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.75914713541667%"),
    top: hp("13.661202185792352%")
  },
  View_10417_267: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
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
  View_10417_268: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_268: {
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

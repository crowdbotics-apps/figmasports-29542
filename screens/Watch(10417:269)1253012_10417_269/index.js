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
      <View style={styles.View_10417_270}>
        <View style={styles.View_10417_271}>
          <View style={styles.View_10417_272} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c57/2826/91302005a69a2b4e6c2aabd6ca650893"
            }}
            style={styles.ImageBackground_10417_273}
          />
          <View style={styles.View_10417_274}>
            <Text style={styles.Text_10417_274}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_275}>
            <Text style={styles.Text_10417_275}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_276} />
          <View style={styles.View_10417_277}>
            <Text style={styles.Text_10417_277}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_278}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/be40/7f5bb9d4b6aa81bc98219dac0866657c"
            }}
            style={styles.ImageBackground_10417_279}
          />
          <View style={styles.View_10417_280}>
            <Text style={styles.Text_10417_280}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_281}>
            <Text style={styles.Text_10417_281}>2h • Champions League</Text>
          </View>
        </View>
        <View style={styles.View_10417_282}>
          <View style={styles.View_10417_283} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc1/1568/98f5c320474ef2152302685375bb3e1c"
            }}
            style={styles.ImageBackground_10417_284}
          />
          <View style={styles.View_10417_285}>
            <Text style={styles.Text_10417_285}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_286}>
            <Text style={styles.Text_10417_286}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_287} />
          <View style={styles.View_10417_288}>
            <Text style={styles.Text_10417_288}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_289}>
          <View style={styles.View_10417_290} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/750e/edf1/3713fdc2edb2debdbfad2286294f9660"
            }}
            style={styles.ImageBackground_10417_291}
          />
          <View style={styles.View_10417_292}>
            <Text style={styles.Text_10417_292}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_293}>
            <Text style={styles.Text_10417_293}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_294} />
          <View style={styles.View_10417_295}>
            <Text style={styles.Text_10417_295}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_296}>
          <View style={styles.View_10417_297} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1231/03ba/03c5c4090cd9fd63b3d9a4cecfab1a92"
            }}
            style={styles.ImageBackground_10417_298}
          />
          <View style={styles.View_10417_299}>
            <Text style={styles.Text_10417_299}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_300}>
            <Text style={styles.Text_10417_300}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_301} />
          <View style={styles.View_10417_302}>
            <Text style={styles.Text_10417_302}>1:35</Text>
          </View>
        </View>
        <View style={styles.View_10417_303}>
          <View style={styles.View_10417_304} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebae/8459/bb35f118d5accc6f94271ea790299981"
            }}
            style={styles.ImageBackground_10417_305}
          />
          <View style={styles.View_10417_306}>
            <Text style={styles.Text_10417_306}>
              Who will qualify from the Champions League group stage?
            </Text>
          </View>
          <View style={styles.View_10417_307}>
            <Text style={styles.Text_10417_307}>2h • Champions League</Text>
          </View>
          <View style={styles.View_10417_308} />
          <View style={styles.View_10417_309}>
            <Text style={styles.Text_10417_309}>1:35</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_310}>
        <View style={styles.View_10417_311}>
          <Text style={styles.Text_10417_311}>Watch</Text>
        </View>
        <View style={styles.View_10417_312}>
          <View style={styles.View_10417_313} />
          <TouchableOpacity
            style={styles.TouchableOpacity_10417_314}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("10417_321"))
            }
          >
            <Text style={styles.Text_10417_314}>News</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_10417_315}>
          <View style={styles.View_10417_316} />
          <View style={styles.View_10417_317}>
            <Text style={styles.Text_10417_317}>Replay</Text>
          </View>
        </View>
        <View style={styles.View_10417_318}>
          <View style={styles.View_10417_319} />
          <TouchableOpacity
            style={styles.TouchableOpacity_10417_320}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("10417_217"))
            }
          >
            <Text style={styles.Text_10417_320}>Series</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("119.53551912568305%") },
  View_10417_270: {
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
  View_10417_271: {
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
  View_10417_272: {
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
  ImageBackground_10417_273: {
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
  View_10417_274: {
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
  Text_10417_274: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_275: {
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
  Text_10417_275: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_276: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_277: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_278: {
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
  ImageBackground_10417_279: {
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
  View_10417_280: {
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
  Text_10417_280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_281: {
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
  Text_10417_281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_282: {
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
  View_10417_283: {
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
  ImageBackground_10417_284: {
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
  View_10417_285: {
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
  Text_10417_285: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_286: {
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
  Text_10417_286: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_287: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_288: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_289: {
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
  View_10417_290: {
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
  ImageBackground_10417_291: {
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
  View_10417_292: {
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
  Text_10417_292: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_293: {
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
  Text_10417_293: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_294: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185787%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_295: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185787%"),
    justifyContent: "center"
  },
  Text_10417_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_296: {
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
  View_10417_297: {
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
  ImageBackground_10417_298: {
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
  View_10417_299: {
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
  Text_10417_299: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_300: {
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
  Text_10417_300: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_301: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_302: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_302: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_303: {
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
  View_10417_304: {
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
  ImageBackground_10417_305: {
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
  View_10417_306: {
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
  Text_10417_306: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_307: {
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
  Text_10417_307: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_308: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    backgroundColor: "rgba(0, 24, 72, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10417_309: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("7.513661202185801%"),
    justifyContent: "center"
  },
  Text_10417_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_310: {
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
  View_10417_311: {
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
  Text_10417_311: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_312: {
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
  View_10417_313: {
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
  TouchableOpacity_10417_314: {
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
  Text_10417_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_315: {
    width: wp("30.04085896809896%"),
    minWidth: wp("30.04085896809896%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.94894205729167%"),
    top: hp("13.661202185792352%")
  },
  View_10417_316: {
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
  View_10417_317: {
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
  Text_10417_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_318: {
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
  View_10417_319: {
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
  TouchableOpacity_10417_320: {
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
  Text_10417_320: {
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

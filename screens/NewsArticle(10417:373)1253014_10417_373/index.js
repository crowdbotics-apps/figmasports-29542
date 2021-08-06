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
      <View style={styles.View_10417_374}>
        <View style={styles.View_10417_375}>
          <Text style={styles.Text_10417_375}>
            Euro 2020 qualification latest: Italy clinch their spot
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21d3/d2f9/8d23efd1daf4e861b10d15cc60ad8749"
          }}
          style={styles.ImageBackground_10417_376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9c1/10dd/9db48903b17e9e6c29c61b48821f72d5"
          }}
          style={styles.ImageBackground_10417_377}
        />
        <View style={styles.View_10417_378}>
          <Text style={styles.Text_10417_378}>17 Oct 2019</Text>
        </View>
        <View style={styles.View_10417_379}>
          <Text style={styles.Text_10417_379}>
            The problem with qualifying in Europe, at least when it comes to the
            bigger countries, is that it&#39;s really difficult to have any sort
            of frame of reference of where these teams are. Take Joachim
            Low&#39;s new-look Germany. In theory, matters could have gotten
            interesting on Sunday night when they went a man down away to
            Estonia after just 14 minutes. A draw would have left them a single
            point clear of Northern Ireland, with the pair squaring off next
            month. But no. Even with the man advantage, Estonia retreated,
            leaving Germany to have 70% of the possession. Think about this for
            a minute. They&#39;re playing at home and they have an extra man,
            which means there is an Estonian player wide open at all times. And
            still, more than two-thirds of the possession goes to the visitors.
            Maybe that&#39;s why Low didn&#39;t bother sending on another
            central defender after Emre Can&#39;s misplaced tackle saw him earn
            his marching orders so early on. Already faced with limited options
            at the back -- Antonio Rudiger, Jonathan Tah, Matthias Ginter and
            Niklas Stark are all injured, while Mats Hummels and Jerome Boateng
            are no longer part of Low&#39;s plans -- it was unusual that you
            should play Can in the first place. He hadn&#39;t started a
            competitive game for club or country since May, and you can count
            one hand the number of times he&#39;s played at the back over the
            past few years. But that&#39;s what an injury crisis does. It
            wasn&#39;t just at the back that Low was short on numbers, either.
            Toni Kroos, Serge Gnabry and Leroy Sane were also unavailable. It
            took Germany nearly an hour but eventually they broke through with
            two Ilkay Gundogan strikes before Timo Werner added a third. What
            did we learn? Not much, other than the fact that Estonia are both
            extraordinarily poor, which we already knew. The much-hyped Kai
            Havertz had a quiet game, Germany&#39;s youngsters went through the
            motions, odds are this team will look rather different come the
            summer. Comparing qualifiers like this to league football is
            obviously silly, but if you simply juxtapose them with the UEFA
            Nations League 12 months ago, and the excitement and tension
            surrounding those matches, it might make you ponder a little. That
            was entertainment, an afternoon at the movies. This was a visit to
            the dentist: something you have to do, without much in the way of
            enjoyment.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b84/7ff6/3f77c5e0b8538292606ba2415aa3df9d"
          }}
          style={styles.ImageBackground_10417_380}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f4e/ca51/8726d296f5dfb4b018581ae13dc81975"
          }}
          style={styles.TouchableOpacity_10417_383}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_503"))
          }
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("250.95628415300547%") },
  View_10417_374: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("250.95628415300547%"),
    minHeight: hp("250.95628415300547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_375: {
    width: wp("88.8%"),
    minWidth: wp("88.8%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("42.759562841530055%"),
    justifyContent: "flex-end"
  },
  Text_10417_375: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_376: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.0327868852459%"),
    minHeight: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2.8688524590163933%")
  },
  ImageBackground_10417_377: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("7.233228839811731%"),
    minHeight: hp("7.233228839811731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("19.12568306010929%")
  },
  View_10417_378: {
    width: wp("80.80000000000001%"),
    minWidth: wp("80.80000000000001%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("55.60109289617486%"),
    justifyContent: "flex-start"
  },
  Text_10417_378: {
    color: "rgba(82, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_379: {
    width: wp("88.8%"),
    minWidth: wp("88.8%"),
    minHeight: hp("188.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("62.02185792349727%"),
    justifyContent: "flex-start"
  },
  Text_10417_379: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_380: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("37.97814207650273%")
  },
  TouchableOpacity_10417_383: {
    width: wp("2.933333333333333%"),
    height: hp("2.459016393442623%"),
    top: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

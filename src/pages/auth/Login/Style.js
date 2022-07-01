import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    maincontainer : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#ffffff',
        height:hp('90%')
    },
    infoText : {
        height:hp('10%'),
        width:wp('100%'),
        backgroundColor : '#ffffff',
        textAlign:'center',
        color : '#383838',
        fontSize : hp('2.2%'),
        fontFamily: 'Ubuntu-Regular',
    },
    langContainer:{
        backgroundColor : '#ffffff',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    lanTextAlign:{
        marginTop:hp('2%'),
        marginLeft:wp('3%'),
        fontFamily: 'Ubuntu-Regular',
    }
})
export default styles ;
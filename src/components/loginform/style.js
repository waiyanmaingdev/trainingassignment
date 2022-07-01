import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#ffffff',
        
    },
    title : {
        fontFamily: 'Ubuntu-Regular',
        fontSize : hp('5.2%'),
        fontWeight : '900',
        color : '#383838'
    },
    textboxStyle : {
        height : hp('7%'),
        width : wp ('90%'),
        marginHorizontal : wp('20%'),
        marginVertical : 10,
        borderRadius : 10 ,
        fontSize : hp('2.2%'),
        fontFamily: 'Ubuntu-Regular',
        color : '#383838',
        borderColor : '#383838',
        backgroundColor : '#f2f2f7'
        
    },
    btnStyle : {
        height : hp('7%'),
        width : wp ('90%'),
        marginHorizontal : wp('20%'),
        borderRadius : 10 ,
        marginTop : 10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#028fdd'
    },
    btntextStyle : {
        fontFamily: 'Ubuntu-Regular',
        fontSize : hp('2.2%'),
        color:'white',
        fontWeight:'300'
    },
    createTextStyle : {
        marginTop : hp('4%'),
        fontFamily: 'Ubuntu-Regular',
        fontSize : hp('2.2%'),
        color : '#383838'
    }
})
export default styles ;
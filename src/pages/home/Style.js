import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        height:'100%',
    },
    showInfo : {
        marginTop : hp('10%'),
        height:hp('30%'),
        width:wp('90%'),
        alignItems:'center',
        borderColor:'#fsfewe',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    title : {
        marginTop:hp('5%'),
        alignSelf:'flex-start',
        marginLeft:wp('10%'),
        color : '#383838',
        fontSize : hp('4%'),
        fontFamily: 'Ubuntu-Regular',
        fontWeight:'800',
    },
    nameText : {
        color : '#383838',
        fontSize : hp('2.2%'),
        fontFamily: 'Ubuntu-Regular',
        marginTop:hp('4%')
    },
    emailText : {
        color : '#383838',
        fontSize : hp('2.2%'),
        marginTop:hp('4%'),
        fontFamily: 'Ubuntu-Regular',
    },
    btnContainer : {
        marginTop:hp('35%'),
    },
    btnStyle : {
        backgroundColor:'#76b81f',
        width:wp('50%'),
        height:hp('5%'),
        alignSelf:'center',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    btnText : {
        color:'white',
        fontSize : hp('2.2%'),
        fontFamily: 'Ubuntu-Regular',
    }

})
export default styles ;
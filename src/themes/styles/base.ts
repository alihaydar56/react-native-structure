import { Dimensions, StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/screenResize';
import Colors from '../colors';

const baseStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.Background,
    },
    content: {
        flex: 1,
        backgroundColor: Colors.Background,
        justifyContent:"center"
    },
    centerView: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    header: {
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Background,
        paddingHorizontal: '5%',
        height: wp(14),
        justifyContent: 'space-between',
    },
    headerLeft: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerRight: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerLogo: {
        width: wp(28),
        aspectRatio: 2.8
    },
    headerTitle: {
        fontSize: wp(4.5)
    },
    modalView: {
        width: wp(90),
        height: 'auto',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 25,
        overflow: 'hidden',
        zIndex: 2000,
        maxHeight: hp(90)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0,
        padding: 50,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1
    },
    actionItem: {
        borderBottomColor: Colors.Grey,
        borderBottomWidth: 1,
        marginHorizontal: wp(15)
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingVertical: wp(2.65),
        width: wp(40),
    },
    actionsBox: {
        width: wp(90),
        maxHeight: wp(52),
        paddingVertical: wp(1),
        justifyContent: 'space-evenly',
        backgroundColor: Colors.White,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    flatListContent: {
        alignSelf: 'center',
        flex: 0
    },
    flatListItem: {
        alignSelf: 'center',
        paddingTop: wp(1),
    },
    backgroundImageContainer: {
  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default baseStyles;
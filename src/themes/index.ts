import Colors from './colors';

const Fonts = {
    Black: 'Poppins-Black',
    Bold: 'Poppins-Bold',
    ExtraBold: 'Poppins-ExtraBold',
    Light: 'Poppins-Light',
    Medium: 'Poppins-Medium',
    Regular: 'Poppins-Regular',
    SemiBold: 'Poppins-SemiBold',
    Montserrat:"Montserrat-Regular",
    MontserratBold:"Montserrat-Bold",
    MontserratBlack:"Montserrat-Black"
 
};

export type FontTypes = keyof (typeof Fonts)
export type ColorTypes = keyof (typeof Colors)

export {Colors, Fonts}
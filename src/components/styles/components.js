import styled from 'styled-components/native'
import Colors from './colors';
import px2vw  from './responsive.js';
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
  };
  
const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
  };
export const Container = styled.ScrollView`
    background-color: ${Colors.primary};
    flex: 1;
    padding: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.white};
    padding-bottom: 22px;
`;
export const Box = styled.View`
    flex-direction: column;
    margin:0;
`;
export const Welcome = styled.Text`
    font-size: ${widthPercentageToDP('4%')};
    color: ${Colors.white};
`;

export const User  = styled.Text`
    font-size: ${widthPercentageToDP('6.5%')};
    margin-top: 10px;   
    color: ${Colors.white};
    font-weight: 300;

`;

export const DateNow = styled.Text`
    font-size: ${widthPercentageToDP('3%')};
    align-self: flex-end;
    margin-top: 10px;
    color: ${Colors.white};
    font-weight: 300;
`;

export const BoxDebit = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 40px;
`;

export const Text = styled.Text`
    font-size: ${widthPercentageToDP('4%')};
    color: ${Colors.white};
    font-weight: 200;
    margin:0
`;

export const Value = styled.Text`
    font-size: ${widthPercentageToDP('4.5%')};
    color: ${Colors.white};
    font-weight: 500;
    letter-spacing: 1px;
    margin:0
`;

export const Button = styled.TouchableOpacity`
    background-color: ${Colors.secondary};
    height: ${heightPercentageToDP('5.2%')};
    width: ${widthPercentageToDP('22%')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin:0
`;

export const Historic = styled.ImageBackground`
    display: flex;
    flex-direction: column;
    width: ${widthPercentageToDP('90%')};
    align-self: center;
    border-radius: 30px;
    height:${heightPercentageToDP('21.8%')};
    padding-top:  ${heightPercentageToDP('3%')};
    padding-left: ${widthPercentageToDP('10%')};
    margin:0;
    margin-top: 40px;
    background-size: contain;
    
  
`;

export const Title = styled.Text`
    font-size: ${widthPercentageToDP('4%')};
    color: ${Colors.white};
    font-weight: 300;
`;

export const TextHistoric = styled.Text`
    font-size: ${widthPercentageToDP('4%')};
    color: ${Colors.white};
    font-weight: 200;
    margin-top: 8px;
`;

export const B = styled.Text`
    font-weight: 400;    
`;

export const LittleCar = styled.View`
    display: flex;
    flex-direction: column;
    width: ${widthPercentageToDP('83%')};
    align-self: center;
    border-radius: 30px;
    height:${heightPercentageToDP('21.8%')};
    margin:0;
    background-color: ${Colors.primaryLight};
    justify-content: center;
    align-items: center;
    elevation: 5;
`;

export const Register = styled.TouchableOpacity`
    background-color: ${Colors.green};
    height: ${heightPercentageToDP('5.2%')};
    width: ${widthPercentageToDP('30%')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    elevation: 1;
`;

export const Admin = styled.TouchableOpacity`
    background-color: ${Colors.secondaryDark};
    height: ${heightPercentageToDP('5.2%')};
    width: ${widthPercentageToDP('30%')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    elevation: 1;
    margin-top: 20px;
    
`;


export const Final = styled.TouchableOpacity`
    background-color: ${Colors.red};
    height: ${heightPercentageToDP('5.2%')};
    width: ${widthPercentageToDP('30%')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    elevation: 1;
`;

export const BoxButtons =   styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:  ${widthPercentageToDP('75%')};
    align-items: center;
    align-self: center;
    margin-top: ${heightPercentageToDP('3%')};
    
`;

export const HistoricPage = styled.ScrollView`

`;

export const BoxHistoric = styled.ImageBackground`
  flex:1;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  background-size: contain;
  height: ${heightPercentageToDP('21.8%')};
`

export const Modal = styled.Modal`
    position: absolute;
    bottom: 0;
`;

export const ModalContent = styled.View`
    align-self: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: auto;
    align-self: center;
    border-radius: 30px;
    background-color: ${Colors.primaryLight};
    padding: 10px;`;  

export const ButtonMenu = styled.TouchableOpacity`
    background-color: ${Colors.secondaryDark};
    height: ${heightPercentageToDP('5.2%')};
    width: ${widthPercentageToDP('45%')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top:30px
    
`;

export const  ContainerMenu = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${widthPercentageToDP('90%')};
    align-self: center;
`;
export const  ContainerMenu2 = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${widthPercentageToDP('100%')};
    align-self: center;
    background-color: ${Colors.primaryDark};
`;

export const InputSingUp = styled.TextInput`
    width: ${widthPercentageToDP('90%')};
    height: ${heightPercentageToDP('5.2%')};
    border-radius: 5px;
    background-color: ${Colors.primaryLight};
    elevation: 1;
    marginTop: 10px;
    color: ${Colors.white};
`;

export const Form = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${widthPercentageToDP('90%')};
    align-self: center;
`;

export const BoxClient = styled.View`
    width: ${widthPercentageToDP('90%')};
    align-self: center;
    background-color: ${Colors.primaryLight};
    border-radius: 30px;
    height:auto;
    padding: 20px;
    margin-bottom: 20px;
    elevation: 5;
`;
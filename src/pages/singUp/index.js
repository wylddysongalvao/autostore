import React, {useState} from 'react';
import {
    Container,
    Title,
    ContainerMenu,
    InputSingUp,
    Form,
    ButtonMenu,
    Text,
    Final
} from '../../components/styles/components';
import {Modal, TouchableHighlight, StatusBar, View} from 'react-native';
import Scann from '../../components/scann';
import LottieView from 'lottie-react-native';
import api from '../../api/index';
import Colors from '../../components/styles/colors.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function SingUp({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [qrCode, setQrCode] = useState('');
    const [name, setName] = useState('');
    const[lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        }
        const GetQR = async (e) => {
            setQrCode(e);
            setModalVisible(!modalVisible);
        }

        const sendSingUp = async () => {

            setLoading(true);

            const token = await AsyncStorage.getItem('@token');
            console.log(token)
      
            await api.post('/clients', {

                headers: {
                    Authorization: `Bearer ${token}`,
                },           
                body:{
                    name:name,
                    lastName:lastName,
                    qrcode: qrCode,
                    admin:false
                }
              
            }).then(() => {
                setSucess(true);

                setTimeout(() => {
                    setSucess(true);
                }, 1000);

                setTimeout(() => {
                    setLoading(false);
                    setSucess(false);
                    setName('');
                    setLastName('');
                    setQrCode('');
                }, 2000)


            }).catch(err => {
                console.log(err);
                setLoading(false);

            });
        }
    return (
        <>
        {loading ?
        <>
                   <StatusBar hidden  />
            {sucess ?
                        <LottieView style={{backgroundColor: Colors.primaryDark}} source={require('../../assets/sucess.json')} autoPlay loop />
                :
                <LottieView style={{backgroundColor: Colors.primaryDark}} source={require('../../assets/loading.json')} autoPlay loop />

        }
        </>
        :
        <>
                    <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', padding: 20, backgroundColor: Colors.primaryDark, width:'100%'}}>
                        <Title>Cadastro</Title>
                    </View>
        <Container>
        <Form>
           
            <ContainerMenu>
                <InputSingUp value={name} onChangeText={setName} placeholder="Nome"/>
            </ContainerMenu>
            <ContainerMenu>
                <InputSingUp value={lastName} onChangeText={setLastName} placeholder="Sobrenome"/>
            </ContainerMenu>
            <ContainerMenu> 
                <InputSingUp value={qrCode}  onFocus={() => {setModalVisible(true)}} placeholder="QRcode"/>
            </ContainerMenu>

            
                <ButtonMenu onPress={() => {sendSingUp()}}>
                    <Text>Cadastrar</Text>
                </ButtonMenu>
                <Final onPress={() => {navigation.navigate('Admin')}} style={{marginTop:20}}>
                    <Text>Cancelar</Text>
                </Final>
           
        </Form>

        <Modal
        animationType="slide"
              transparent={true}
              visible={modalVisible}
              statusBarTranslucent={true}
              onRequestClose={() => {
              
                setModalVisible(!modalVisible);
              }}>

            <Scann qrcode={e => {GetQR(e.data)}}/>
        </Modal>


    </Container> 
    </>}
    
        </>
    );
}


export default SingUp;
import React, {useEffect, useState, useCallback} from 'react';
import {View,
    StatusBar,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import BarScann from '../../components/scannBar/index';
import api from '../../api/index.js';
import {
    Container,
    Welcome,
    Header,
    Box,
    User,
    DateNow,
    BoxDebit,
    Text,
    Value,
    Button,
    Historic,
    TextHistoric,
    Title,
    B,
    Register,
    Final,
    BoxButtons,
    LittleCar,
    Modal,
    Admin
} from '../../components/styles/components';

import HistoricComponent from '../../components/historic/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const HistoricImg =  require('../../assets/historic.png')

function Sale({navigation}) {
 
    const week = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]

    const [littleCar, setLittleCar] = useState(false);
    const date = new Date().toLocaleDateString("pt-Br");
    const [hour, setHour] = useState('');
    const [name, setName] = useState('');
    const [lastMount, setLastMount] = useState('');
    const [lastSale, setLastSale] = useState('');
    const [total, setTotal] = useState('');
    const [pageHistoric, setPageHistoric] = useState(false);
    const [historic, setHistoric] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [admin, setAdmin] = useState(false);
    const getHistoric = async () => {
        
        try{
            const id = await AsyncStorage.getItem('@user_id');
            const userName = await AsyncStorage.getItem('@name');
            setName(userName);
            
            await api.get(`/puschases/user/${id}`,{
                headers: {
                    Authorization: 'Bearer ' + await AsyncStorage.getItem('@token')
                }
            }).then(response => {
                const value = response.data
                // const real = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

                const purchases = response.data.purchases;
                const  last = purchases.reverse();
                const lastValue =  last[0].total;
                
                setHistoric(purchases)
                setTotal(value.total);
                setLastSale(lastValue);
            }).catch(error => {
                console.log(error)
            });
        }catch(error){
            console.log(error)
        }
        
    }
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async() => {
        setRefreshing(true);
        setTimeout(() =>{
            getHistoric();
            setRefreshing(false);
        },2000)
      }, []);

      const getAdmin = async () => {
        try{
            const admin = await AsyncStorage.getItem('@admin');

            if(admin  === 'true'){
                setAdmin(true);
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect( () => {

            getAdmin();
            getHistoric();
            setInterval(() => {
                setHour(new Date().toLocaleTimeString("pt-Br"));
            }, 1000);
      
    },[])
    
    return(
        <>
            <StatusBar hidden  />
            <Container 
            refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> }>
                <Header>
                    <Box>
                        <Welcome>Bem vindo 👋</Welcome>
                        <User>{name}</User>
                    </Box>
                </Header>
                
            {pageHistoric?
            
            <HistoricComponent array={historic}/>
            :
            <>
            <DateNow>{date} - {hour}</DateNow>

                <BoxDebit>
                    <Box>
                        <Text>Debito atual</Text>
                        <Value>R${total}</Value>
                    </Box>
                    <Button >
                        <Text>Pagar</Text>
                    </Button>
                </BoxDebit>

                <TouchableOpacity onPress={() => {
                    setPageHistoric(true)
                }}>
                    <Historic source={HistoricImg}>
                        <Title>Veja seu histórico de compras</Title>

                        <Box style={{marginTop:10}}>
                            <TextHistoric>Total da última compra: <B> R${lastSale} </B></TextHistoric>
                            <TextHistoric>Total do último mês: <B> R$0 </B></TextHistoric>
                        </Box>
                    </Historic>
                </TouchableOpacity>

                <Text style={{alignSelf:"center", marginTop:10, marginBottom:10}}>Carrinho</Text>
                <LittleCar>

                    {littleCar ? null : <Text>Carrinho vazio</Text>}

                </LittleCar>

                <BoxButtons style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}} >
                        <Register onPress={() => {setModalVisible(true)}}>
                            <Text>Registrar</Text>
                        </Register>
                        <Final>
                            <Text>Finalizar</Text>
                        </Final>
                    </View>
                    {
                      admin?   
                      <Admin onPress={() => {navigation.navigate('Admin');}}>
                            <Text>Gerenciar</Text>
                        </Admin>
                      :null
                    }
                </BoxButtons>

               <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  statusBarTranslucent={true}
                  onRequestClose={() => {
                  
                    setModalVisible(!modalVisible);
                  }}>
                      <View style={{backgroundColor:Colors.primaryDark, width:"100%", height:'100%'}}>
                        <BarScann />
                      </View>
               </Modal>
            </>
        }
               
            </Container>
        </>
    )
}




export default Sale;
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import Colors from '../../components/styles/colors.js'

import {
    Container,
    Text,
    B,
    BoxClient,
    Final
} from '../../components/styles/components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import api from '../../api/index';

function AllClients({navigation}) {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadClients = async () => {

        setLoading(true);

        const token = await AsyncStorage.getItem('@token');
        
        await api.get('/clients', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            setClients(res.data.clients);
            setLoading(false);

        }).catch((err) => {
            setLoading(false);
            console.log(err);
        });
    };
    useEffect(() => {
        loadClients();
    }, []);

  return (
    <>
        {loading ? 
                        <LottieView style={{backgroundColor: Colors.primaryDark}} source={require('../../assets/loading.json')} autoPlay loop />
        : 
        <>
            <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'space-between', padding: 20, backgroundColor: Colors.primaryDark, width:'100%', textAlign:'center'}}>
                <Text style={{margin:0}}>
                    <B>Todos os clientes</B>
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Admin')}} style={{backgroundColor:Colors.red, padding:7, borderRadius:5}}>
                    <Text>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
        <Container>
            <View style={{padding:20}}>
            {clients ? clients.map((client, index) => {

                const ativo = client.active ? 'Ativo' : 'Desativado';
                const Admin = client.admin ? 'Administrador' : 'Usuário';
                const Pagamento = client.payment ? 'Realizado' : 'Em atraso';
                const solicitation = client.solicitation ? 'Pendente' : 'Sem solicitação';

                return(
                    <TouchableOpacity key={index}>
                        <BoxClient>
                            <Text ><B>{client.name} {client.lastName}</B></Text>
                            <Text><B>Status:</B> {ativo}</Text>
                            <Text><B>Tipo:</B> {Admin}</Text>
                            <Text><B>Pagamento:</B> {Pagamento}</Text>
                            <Text><B>Pedido de desbloqueio:</B> {solicitation}</Text>
                        </BoxClient>
                    </TouchableOpacity>
                )
                }) : null}
            </View>
    </Container>
    </>
    }
    </>
    );
}

export default AllClients;
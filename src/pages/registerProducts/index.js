import React, {useState, useEffect} from 'react';
import {
    Container,
    Text,
    Form,
    InputSingUp

} from '../../components/styles/components';
import {
    View,
} from 'react-native';

import api from '../../api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegisterProducts({navigation}) {

    const [products, setProducts] = useState([]);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[code, setCode] = useState('');
    const[quantity, setQuantity] = useState(0);


    const Register = async () => {
        const token = await AsyncStorage.getItem('@token');

        await api.post('/products', {
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{
                name, 
                price, 
                code,
                quantity
            }
        }).then(() => {

        }).catch((err) => {
            console.log(err)
        })

    };

    useEffect(() => {

    },[])

    return (
        <>
        <View>
            <Text>
                Cadastrar produtos
            </Text>
        </View>
            <Container>

                <Form> 
                    <InputSingUp  value={name} onChangeText={setName} />
                    <InputSingUp value={price} onChangeText={setPrice} />
                    <InputSingUp value={code} onChangeText={setCode} />
                    <InputSingUp value={quantity} onChangeText={setQuantity} />
                    
                </Form>

            </Container>
        </>
    );
    }


    export default RegisterProducts;
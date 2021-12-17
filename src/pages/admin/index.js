import React, {useState, useEffect} from 'react';
import {
    Container,
    ButtonMenu,
    Text,
    ContainerMenu,
    ContainerMenu2,
    Final
    
} from '../../components/styles/components';

import {View} from 'react-native';
import Colors from  '../../components/styles/colors';
import api from '../../api/index.js';

function Admin({navigation}) {

  const [products, setProducts] = useState([]);

  return (
    <>
      <View style={{alignSelf:'center',  flexDirection:'row', justifyContent:'center', padding: 20, backgroundColor: Colors.primaryDark, width:'100%'}}>
          <Text>
            Selecione
        </Text>
      </View>
    <Container>
      <ContainerMenu>
  
        <ButtonMenu onPress={() => {navigation.navigate('SingUp');}}>
            <Text>Cadastrar Cliente</Text>
        </ButtonMenu>
        <ButtonMenu onPress={() => {navigation.navigate('AllClients')}}>
            <Text>Todos os Clientes</Text>
        </ButtonMenu>
        <ButtonMenu onPress={() => {navigation.navigate('RegisterProducts')}}>
            <Text>Cadastrar Produto</Text>
        </ButtonMenu>

        <ButtonMenu>
            <Text>Todos os Produtoss</Text>
        </ButtonMenu>

        </ContainerMenu>
        <Final onPress={() => {navigation.navigate('Home');}} style={{alignSelf:'center', marginTop:20}}>
          <Text>Voltar</Text>
        </Final>
    </Container>
    </>
  )
}
export default Admin;
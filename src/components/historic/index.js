import React, {useEffect, useState}  from 'react';

import { 
    TouchableOpacity,
    View
} from 'react-native';

import {
    HistoricPage,
    BoxHistoric,
    Text,
    Title,
    Modal,
    ModalContent,
    B
} from '../styles/components';

import Colors from '../styles/colors';

const HistoricImg =  require('../../assets/historic.png')

export default function Historic({array}){
    const [modalVisible, setModalVisible] = useState(false);
    const [purchase, setPurchase] = useState([]);
    const [arrayProduct, setArrayProduct] = useState([]);

    const InfoModal = (obj) => {
        setModalVisible(true);
        setPurchase(obj);
        setArrayProduct(obj.products);
        console.log(arrayProduct)

    }

    useEffect(() => {
        
    },[])
    return (
        <HistoricPage>
            <Title style={{alignSelf:"center", marginTop:10}}>
                Histórico
            </Title>

            <Modal
             animationType="fade"
             transparent={true}
             visible={modalVisible}
             statusBarTranslucent={true}
             onRequestClose={() => {
               setModalVisible(!modalVisible);
             }}>

             <View style={{width:"100%", height:"100%", justifyContent:'center', alignItems:'center', backgroundColor:"#dfd8d85e"}}>
                <ModalContent>
                        <TouchableOpacity style={{ justifyContent:'center', alignItems:"center", backgroundColor:"#bd1515", width:40, height:40, opacity:1, borderRadius:10, alignSelf:"flex-end"}} 
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text>
                                X
                            </Text>
                        </TouchableOpacity>
                        <Text>
                            {purchase.date_created}
                        </Text>
                        <View style={{marginTop:20, marginBottom:20, width:'100%'}}>
                            { arrayProduct.map(product => (
                                <View style={{flexDirection:'row', backgroundColor:Colors.primaryDark, width:'100%', textAlign:"center"}} key={product.id}>
                                    <Text >
                                    <B>  {product.quantity} </B> {product.product} <B> R$ {product.total} </B>
                                    </Text>
                                    <Text>
                                        {product.value}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Text>
                        <B>R$ {purchase.total}</B>
                        </Text>
                
                    </ModalContent>

             </View>
            </Modal>
           { array.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() =>InfoModal(item)} key={index}>
                        <BoxHistoric source={HistoricImg} >
                            <Text style={{alignSelf:'center'}}>
                                Realizado em {item.date_created}
                            </Text>
                            <Text style={{alignSelf:'center', fontSize:40, fontWeight:'bold'}}>
                                R$ {item.total}
                            </Text>

                            <Text style={{alignSelf:"center", color:Colors.primaryLight}}>
                                Click para mais informações
                            </Text>
                        </BoxHistoric>
                    </TouchableOpacity>
                )
            })}
        </HistoricPage>
    );
}
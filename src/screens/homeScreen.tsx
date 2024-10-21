import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { Get, getdata } from '../redux/action'



const HomeScreen = () => {
    // const [data2,setdata2] = useState([])
    // useEffect(()=>{
    //     const data2 = useSelector((state)=>{state.data})
    //     setdata2(data2)
    //     console.log(data2)
    // },[data2])

    const [email,setEmail] = useState('')
    const [age,setAge] = useState('0')
    const [name,setName] = useState('')

    const updatedItem = {name,age,email}

    
    const dispatch = useDispatch()
    const data: any = []
    const data2 = useSelector((state:any) => state.data )
    console.log(data2)



    const render =(item) =>{
        return(
        <View style={styles.renderitem}>
            <Text>{item.item.name}</Text>
            <Text>{item.item.age}</Text>
            <Text>{item.item.email}</Text>
            <View>
            <TouchableOpacity style={styles.buttonUpdate}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete} onPress={() =>dispatch({type:'DELETE_DATA_REQUEST',payload:item})}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                 </View>
        </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder='name' value={name} onChangeText={(n) => {setName(n)}}/>
                <TextInput style={styles.inputText} placeholder='email' value={email} onChangeText={(n) => {setEmail(n)}}/>
                <TextInput style={styles.inputText} placeholder='age' value={age} onChangeText={(n) => {setAge(n)}}/>
                {/* <View style={{flexDirection:'row', justifyContent:'space-between'}}> */}
                <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'CREATE_DATA_REQUEST' ,payload:updatedItem})}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCreate} onPress={() => dispatch({ type: 'FETCH_DATA_REQUEST' })}>
                    <Text style={styles.buttonText}>Fetch Data</Text>
                </TouchableOpacity>
                {/* </View> */}
               
              
               

                <View style={styles.flatlist}>
                    <FlatList
                    data = {data2}
                    renderItem={render}
                    showsVerticalScrollIndicator = {false}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEFAFF',
    },
    inputContainer: {
        justifyContent: 'center',
        flex:1,
        paddingHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 10,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
    },
    inputText: {
        borderWidth: 0.5,
        borderColor: 'transparent',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10
    },
    button: {
        padding: 10,
        // borderWidth:1,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width:'auto',
        marginBottom: 10,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
    },
    buttonCreate: {
        padding: 10,
        // borderWidth:1,
        backgroundColor: '#5DC94D',
        borderRadius: 8,
        width:'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
    },
    buttonUpdate: {
        padding: 5,
        // borderWidth:1,
        backgroundColor: '#E3DE48',
        borderRadius: 8,
        // width:'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
    },
    buttonDelete: {
        padding: 5,
        // borderWidth:1,
        backgroundColor: '#E74E3A',
        borderRadius: 8,
        alignItems: 'center',
        // width:'auto',
        justifyContent: 'center',
        marginBottom: 10,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',

    },
    renderitem:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2.5,
        marginHorizontal:10,
    },
    flatlist:{
        borderWidth:0.5,
        borderRadius:8,
        backgroundColor:'#D2E3E7',
        flex:1,
        padding:5,
    }
})
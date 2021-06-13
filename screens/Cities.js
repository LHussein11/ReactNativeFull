import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import global from "../styles/Global";
import Container from "../styles/Container";
import Axios from "axios";
import Card from "../component/Card";


function Cities({ navigation}) {

    const [city, setCity] = useState('');

    // Med denna funktion så hämtas data från API:et
    useEffect(() => {
        Axios.get('http://192.168.0.11:3000/stader')
        .then((response) => {
            setCity(response.data);
        })
    }, [])

    /*
    Denna funktion raderar en post från API:et och appen. Funktionen är
    kopplad till en knapp när knappen aktiveras genom att man klickar på
    en specifk delete knapp under en post så skickas Id:et in för den specifika posten,
    posten identiferas i backenden och raderas.
    */
    const btnDelete = (id) => {
        Axios.delete('http://192.168.0.11:3000/stader/' + id, {
        })
    }
    
    /*
    Med flatlist så kan vi presentera data som vi loopar igenom. Data delen tar emot en parameter från 
    state, staten får sin data ifrån API:et, vi kan sedan använda det som item i KeyExtractor och renderItem. 
    Med KeyExtractor så ger vi varje post ett unikt id.
    Med renderItem så render vi objektet från Data.
    */
    return (
        <View style={global.container}>
            <Container>
                <FlatList 
                    data={city}
                    numColumns={2}
                    keyExtractor={item => item._id}
                    renderItem= {({ item }) => (
                        /*
                        Med denna tagg så blir allt inom det 
                        klickbart. Med onPress eventet så förs vi vidare
                        till en detail sida för den klickade posten. Vi
                        Skickar med ett objekt. 
                        */
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CitiesDetail', item)}
                        >
                            {
                            /*
                            Kort stilen som importeras från komponent filen
                            */
                            }
                            <Card>
                            <Image 
                                style={global.firstPageImg}
                                source={{
                                    uri: `${item.img}`
                                }}
                            />
                            <Text style={global.cityNameText}>{item.cityname}</Text>
                            
                            {
                            /*
                            Med denna knapp så förs vi vidare till Update sidan, vi skickar med 
                            objektet med API informationen för aktuella posten
                             */
                            }
                            <TouchableOpacity
                                style={global.updateBtn}
                                onPress={() => navigation.navigate('Update', item)}
                            >
                                <Text style={global.deleteBtnText}>Update</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={global.deleteBtn}
                                onPress={() => btnDelete(item._id)}
                            >
                                <Text style={global.deleteBtnText}>Delete</Text>
                            </TouchableOpacity>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </Container>
        </View>
    )
}

export default Cities

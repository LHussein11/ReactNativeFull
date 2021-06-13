import React from 'react';
import { Text, View, TextInput, TouchableOpacity, 
        KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import global from "../styles/Global";
import Container from "../styles/Container";
import Axios from "axios";
import { Formik } from "formik";
import * as yup from 'yup';

function Create() {

    // Validering för formuläret
    const formValidationSchema = yup.object({
        cityname: yup.string()
        .required()
        .min(1),
        population: yup.string()
        .required()
        .min(1),
        country: yup.string()
        .required()
        .min(1),
        information: yup.string()
        .required()
        .min(1),
        img: yup.string()
        .required()
        .min(1),
    })

    /*
    Med intialValues så skapar vi de fält som ska finns
    på formuläret och deras startvärden. I onSubmit skapar vi en funktion som körs när vi trycker på knappen för att sända formuläret, parametern values i onSubmit representerar de olika värdena i intialValues när formuläret sänds. Med Formik så får man med olika metoder till props som man kan använda i sitt formulär
    */
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={global.container}>
            <Container>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={global.thirdCard}
            >
            <Formik
                initialValues={{ cityname: '', population: '', country: '', information: '', img: ''}}
                validationSchema={formValidationSchema}
                onSubmit={( values, actions ) => {
                    actions.resetForm();
                    setTimeout(() => {
                        Axios.post('http://192.168.0.11:3000/stader/insert', values)
                    }, 400);
                }}
            >
                {( props ) => (
                <View style={global.thirdCard}>
                    <TextInput 
                        style={global.input}
                        placeholder='City'
                        placeholderTextColor='#fff'
                        onChangeText={props.handleChange('cityname')}
                        value={props.values.cityname}
                    />
                    <Text style={global.errorText}>{ props.touched.cityname && props.errors.cityname }</Text>
                    <TextInput 
                        style={global.input}
                        placeholder='Population'
                        placeholderTextColor='#fff'
                        onChangeText={props.handleChange('population')}
                        value={props.values.population}
                    />
                    <Text style={global.errorText}>{ props.touched.population && props.errors.population }</Text>
                    <TextInput 
                        style={global.input}
                        placeholder='Country'
                        placeholderTextColor='#fff'
                        onChangeText={props.handleChange('country')}
                        value={props.values.country}
                    />
                    <Text style={global.errorText}>{ props.touched.country && props.errors.country }</Text>
                    <TextInput 
                        style={global.input}
                        placeholder='Information'
                        placeholderTextColor='#fff'
                        onChangeText={props.handleChange('information')}
                        value={props.values.information}
                    />
                    <Text style={global.errorText}>{ props.touched.information && props.errors.information }</Text>
                    <TextInput 
                        style={global.input}
                        placeholder='Image'
                        placeholderTextColor='#fff'
                        onChangeText={props.handleChange('img')}
                        value={props.values.img}
                    />
                    <Text style={global.errorText}>{ props.touched.img && props.errors.img }</Text>
                    <TouchableOpacity 
                        style={global.btn}
                        onPress={props.handleSubmit}
                    >
                        <Text style={global.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                )}
            </Formik>
            </KeyboardAvoidingView>
            </Container>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Create

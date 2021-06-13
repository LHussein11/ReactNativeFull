import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    gradient: {
        flex: 1,
    },
    gradientContainer: {
        flex: 1,
    },
    headerText: {
        flex: 0.25,
        color: '#fff',
        fontFamily: 'Gill Sans',
        fontSize: 40,
        fontWeight: '700',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    img: {
        width: 312,
        height: 300,
    },
    firstPageImg: {
        width: 150,
        height: 100
    },
    btn: {
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#4EB7BA',
        borderColor: 'transparent',
        marginTop: 10
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '900'
    },
    input: {
        borderWidth: 3,
        borderColor: '#fff',
        width: 200,
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
    },
    card: {
        borderRadius: 5,
         elevation: 3,
         backgroundColor: '#fff',
         shadowOffset: {
             width: 1,
             height: 1
         },
         shadowColor: '#333',
         shadowOpacity: 0.3,
         shadowRadius: 2,
         marginHorizontal: 4,
         marginVertical: 6,
         width: 150
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContentThird: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    secondCard: {
        borderRadius: 5,
         elevation: 3,
         backgroundColor: '#fff',
         shadowOffset: {
             width: 1,
             height: 1
         },
         shadowColor: '#333',
         shadowOpacity: 0.3,
         shadowRadius: 2,
         marginHorizontal: 4,
         marginVertical: 6,
         backgroundColor: 'transparent',
    },
    thirdCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    fourthCard: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        textAlign: 'center'
    },
    cityNameText: {
        fontFamily: 'Gill Sans',
        fontWeight: '700',
    },
    detailText: {
        textAlign: 'center',
        padding: 4
    },
    deleteBtn: {
        borderRadius: 5,
        backgroundColor: 'red',
        width: 80,
        margin: 5,
        padding: 2
    },
    deleteBtnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontFamily: 'Gill Sans'
    },
    updateBtn: {
        borderRadius: 5,
        backgroundColor: '#0366fc',
        width: 80,
        margin: 5,
        padding: 2
    },
    errorText: {
        color: 'red',
        fontWeight: '600',
        fontFamily: 'Gill Sans'
    }
  });

  export default styles;
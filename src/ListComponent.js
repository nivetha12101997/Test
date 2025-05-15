import { FlatList, View, Text, Image,StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import Frame5 from '../assets/Frame5.png';
import Frame6 from '../assets/Frame6.png';
export const ListComponent = () => {
    const data = [
        { imageUri: Frame1, details: { title: 'Fan', description: 'Follow matches, team and the polo community' } },
        { imageUri: Frame2, details: { title: 'Club', description: 'Track performance and connect with the team and grow your career' } },
        { imageUri: Frame3, details: { title: 'Shop', description: 'Manage teams, matches and fan engagement' } },
        { imageUri: Frame4, details: { title: 'Service', description: 'Sell polo gear, apparel and accessories' } },
        { imageUri: Frame5, details: { title: 'Player', description: 'Offer coaching, horse care, and event services' } },
        { imageUri: Frame6, details: { title: 'Association', description: 'Organize events, ranking, club managemnets' } }
    ]

    const renderItem = (item, index) => {
        return (
            <View style={[style.cardLayout,style.cardContainer]}>
                <View>
                    <Image source={{ uri: item.imageUri }} height={50} width={50}/>
                </View>
                <View>
                    <Text style={style.cardTitle}>{item?.details?.title}</Text>
                    <Text>{item?.details?.dscription}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView containerStyle={{flex:1}}>
            <View>
                <Text style={style.textThemeBlue}>Register</Text>
                <Text style={{fontSize:'11px'}}>Please select the option that matches your profile</Text>
            </View>
        <View >
            <FlatList
                data={data}
                renderData={renderItem}
                keyExtractor={(item, index) => index.toString()}


            />
            <TouchableOpacity onPress={()=>{}} style={style.RegisterButtonStyle}>
                <Text>REgister as PLayer</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>

    )
}

const style=StyleSheet.create({
    cardContainer:{
        padding:'5px',
        margin:'5px',
        borderRadius:'5px',
        borderColor:'grey',
        borderWidth:'1px'
    },
    cardLayout:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',


    },
    RegisterButtonStyle:{
        backgroundColor:'blue',
        textAlign:'center',
        color:'white',
        borderRadius:'50px'
    },
    containerStyle:{
        backgroundColor:'grey'
    },
    textThemeBlue:{
       color:'blue'
    },
    cardTitle:{
        fontSize:'14px',
        fontWeight:'bold'
    },
    cardDescription:{
        fontSize:'12px',
        color:'black'
    },

})
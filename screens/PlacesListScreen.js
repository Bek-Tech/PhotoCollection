import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';
const PlacesListScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail")} style={styles.headerButton}>
        <Ionicons name="ios-add" size={35} color={Platform.OS === 'android' ? 'white' : Colors.primary} />
      </TouchableOpacity>
    ),
  })
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};



// PlacesListScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'All Places',
//     headerRight: (
//       <CustomHeaderButton HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Add Place"
//           iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
//           onPress={() => {
//             navData.navigation.navigate('NewPlace');
//           }}
//         />
//       </CustomHeaderButton>
//     )
//   };
// };

const styles = StyleSheet.create({
  headerButton: {
    alignItems: 'center',
    justifyContent: "center",
    width: 64,
    height: 64,

  }
});

export default PlacesListScreen;

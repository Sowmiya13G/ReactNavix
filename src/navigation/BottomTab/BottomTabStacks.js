import React from 'react';

// Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { BookConsultaionScreen } from '../../screens/BottomTabScreens/ConsultationScreens/BookConsultation';
import { PastConsultaionScreen } from '../../screens/BottomTabScreens/ConsultationScreens/PastConsultation';

const Stack = createStackNavigator();

// App navigator
const ConsultationStack = () => {


    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="BookConsultaionScreen"
                    component={BookConsultaionScreen}
                    options={{ title: '', headerShown: false }}
                />
                <Stack.Screen
                    name="PastConsultaionScreen"
                    component={PastConsultaionScreen}
                    options={{ title: '', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ConsultationStack;

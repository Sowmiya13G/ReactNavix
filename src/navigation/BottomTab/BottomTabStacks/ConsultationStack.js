import React from 'react';

// Packages
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SCREENS from '../../Screens';
import ScreenNames from '../../Screens/ScreenNames';

const Stack = createStackNavigator();

// Consultation Stack
const ConsultationStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.CONSULTATIONDETAILSSCREEN}>
            <Stack.Screen
                name={SCREENS.DASHBOARDSCREEN}
                component={ScreenNames.DashboardScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.BOOKCONSULTATIONSCREEN}
                component={ScreenNames.BookConsultaionScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.PASTCONSULTATIONSCREEN}
                component={ScreenNames.PastConsultaionScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.WEBINARSCREEN}
                component={ScreenNames.WebinarScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.BLOGSCREEN}
                component={ScreenNames.BlogScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.CONSULTATIONDETAILSSCREEN}
                component={ScreenNames.ConsultationDetailsScreen}
                options={{ title: '', headerShown: false }}
            />
                <Stack.Screen
                name={SCREENS.APPOINTMENTDETAILS}
                component={ScreenNames.AppointmentDetails}
                options={{ title: '', headerShown: false }}
            />
        </Stack.Navigator>
    );
};
export default ConsultationStack





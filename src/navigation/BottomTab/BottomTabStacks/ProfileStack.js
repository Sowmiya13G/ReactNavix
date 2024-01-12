import React from 'react';

// Packages
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SCREENS from '../../Screens';
import ScreenNames from '../../Screens/ScreenNames';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.USERPROFILESCREEN}>
            <Stack.Screen
                name={SCREENS.COMPLETEPROFILESCREEN}
                component={ScreenNames.CompleteProfileScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.USERPROFILESCREEN}
                component={ScreenNames.UserProfileScreen}
                options={{ title: '', headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.PROFILEDETAILSSCREEN}
                component={ScreenNames.ProfileDetailsScreen}
                options={{ title: '', headerShown: false }}
            />


        </Stack.Navigator>
    );
};

export default ProfileStack 
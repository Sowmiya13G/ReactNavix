import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';

// Styles
import { styles } from './styles';

const TestScreen = () => {
  const handleOpenTelegram = () => {
    const telegramUrl = 'https://telegram.org';

    Linking.canOpenURL('tg://resolve')
      .then((supported) => {
        if (supported) {
          Linking.openURL('tg://open');
        } else {
          Linking.openURL(telegramUrl);
        }
      })
      .catch((error) => console.error('Error checking if Telegram is installed:', error));
  };

  // Render Body
  const renderBody = () => {
    return (
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleOpenTelegram}>
        <Text style={styles.addToCartButtonText}>Open Telegram</Text>
      </TouchableOpacity>
    );
  };

  // render  UI ...
  return (
    <View style={styles.container}>
      <FlatList
        data={['TEST']}
        renderItem={renderBody}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

export default TestScreen;

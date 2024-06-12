import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MLKitEntityExtraction from 'react-native-mlkit-entity-extraction';

const EntityExtractionExample = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const extractEntities = async () => {
      try {
        const result = await MLKitEntityExtraction.extractEntities(
          'Visit us at 1600 Amphitheatre Parkway, Mountain View, CA 94043'
        );
        setEntities(result);
      } catch (error) {
        console.error(error);
      }
    };

    extractEntities();
  }, []);

  return (
    <View>
      {entities.map((entity, index) => (
        <Text key={index}>
          {entity.text} - {entity.type}
        </Text>
      ))}
    </View>
  );
};

export default EntityExtractionExample;

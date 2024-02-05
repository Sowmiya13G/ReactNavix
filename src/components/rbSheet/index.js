import React, { useEffect } from "react";

//packages
import RBSheet from "react-native-raw-bottom-sheet";
import { heightPercentageToDP } from "react-native-responsive-screen";

// constants
import theme from "../../constants/theme";
function RBSheetComponent(props) {
  const {
    refRBSheet,
    children,
    height = heightPercentageToDP("40%"),
    closeOnPressMask = false,
    onClose,
  } = props;

  //useRef

  useEffect(() => {}, []);

  //loacl state

  return (
    <RBSheet
      ref={refRBSheet}
      onClose={onClose}
      height={height}
      closeOnPressMask={closeOnPressMask}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,.6)",
        },
        draggableIcon: {
          backgroundColor: theme.backgroundColor.gray,
        },
        container: {
          borderTopLeftRadius: heightPercentageToDP("3%"),
          borderTopRightRadius: heightPercentageToDP("3%"),
        },
      }}
    >
      {children}
    </RBSheet>
  );
}

export default RBSheetComponent;

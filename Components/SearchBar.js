import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchBar = () => {
  return (
    <SafeAreaView>
    
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.Icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Books..."
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "95%",
    alignSelf: "center",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "#87ceeb",
    borderWidth: 3,
  },
  Icon: {
    marginLeft: 10,
    fontSize: 24,
    color: "#87ceeb",
    alignSelf: "center",
  },
  input: {
    width: 300,
    height: "80%",
    alignSelf: "center",
    paddingLeft: 5,
    marginLeft: 5,
  },
  divider: {
    backgroundColor: "#87ceeb",
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    flexDirection: "row",
    fontWeight: "800",
    color: "#87ceeb",
    paddingHorizontal: 30
  },
});
export default SearchBar;
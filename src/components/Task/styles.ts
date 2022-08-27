import { StyleSheet } from "react-native";

// COLORS
// #3C4951
// #50616C
// #7C8991
// #E9EBED

// #8A2631
// #C13544
// #DD3D4E
// #FBE7E9

export const styles = StyleSheet.create({
  // CONTAINER
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: "#E9EBED",
    padding: 5,
    borderColor: "#3C4951",
    borderWidth: 1,
  },

  // CHECKBOX
  checkboxWrapper: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#506",
  },
  checkboxBase: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DD3D4E",
    backgroundColor: "#FFF",
  },
  checkboxChecked: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#DD3D4E",
  },

  // TASK
  nameWrapper: {
    height: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    // paddingLeft: 5,
  },
  name: {
    fontSize: 18,
    color: "#3C4951",
  },
  textDashed: {
    color: "#7C8991",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#7C8991",
    //
  },

  // DELETE BTN
  button: {
    width: 40,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonImage: {
    width: 15,
    height: 15,
    // borderRadius: 2,
    // borderWidth: 2,
    // borderColor: "#50616C",
  },
});

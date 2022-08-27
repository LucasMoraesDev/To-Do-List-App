import { StyleSheet } from "react-native";

// COLORS
// #3C4951
// #50616C
// #E9EBED

// #8A2631
// #C13544
// #DD3D4E
// #FBE7E9

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 25,
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#E9EBED",
    
  },
  ball: {
    fontWeight: "bold",
    lineHeight: 23,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#E9EBED",
    textAlign: "center",
    color: "#E9EBED",
    width: 30,
    height: 25,
    backgroundColor: "#50616C",
    fontSize: 15,
    marginLeft: 5,
  },
  
});

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
    backgroundColor: "#50616C",
  },
  // HEADER BOX
  headerBox: {
    flex: 1.5,
    backgroundColor: "#50616C",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBoxImage: {
    flex: 1,
    width: "100%",
  },

  // INPUT BOX
  inputBox: {
    flex: 0.6,
    flexDirection: "column",
    position: "relative",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#E9EBED",
  },
  botContainer: {
    flex: 1,
    backgroundColor: "#50616C",
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1111,
    width: "100%",
    height: "100%",
    padding: 20,
    paddingLeft:25,
  },
  input: {
    flex: 5,
    height: 55,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#50616C",
    color: "#3C4951",
    paddingLeft: 15,
    fontSize: 18,
    marginRight: 12,
    textAlign: "left",
    backgroundColor: "#E9EBED",
  },
  button: {
    flex: 1,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    fontWeight: "bold",
    lineHeight: 48,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#E9EBED",
    textAlign: "center",
    color: "#E9EBED",
    width: 50,
    height: 50,
    backgroundColor: "#50616C",
    fontSize: 30,
  },

  // TASK BOX
  taskBox: {
    flex: 4,
    backgroundColor: "#50616C",
    paddingTop: 25,
    paddingHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
  },

  
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 220,
  },
  lineStyle: {
    borderWidth: 0.8,
    borderColor: '#E9EBED',

  },
  emptyListImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  emptyText: {
    color: "#E9EBED",
    fontSize: 15,
    textAlign: "center",
  },
  strong: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});

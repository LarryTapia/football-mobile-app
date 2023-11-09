import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";


const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "black",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
        marginTop: 50,

    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: "70%",
        height: "70%",
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    jobName: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
        color: COLORS.primary,
    },
    jobType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
    textHome: {
        color: "white",
        fontSize: "16px"
    },
    textAway: {
        color: "white",
        fontSize: "16px"
    },
    textDate: {
        color: "white",
        fontSize: "16px",
        textAlign: "right"
    },
    imgSize: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
      }),
});


export default styles
import Snackbar, { SnackBarOptions } from "react-native-snackbar";

const showAlert = (options: Partial<SnackBarOptions>) => {
  Snackbar.show({
    text: options.text!,
    backgroundColor: options.backgroundColor,
    duration: options.duration || Snackbar.LENGTH_SHORT,
    action: options.action || {
      text: "HIDE",
      onPress: () => Snackbar.dismiss(),
    },
  });
};

const showSuccessAlert = (text: string) => {
  showAlert({
    text,
    backgroundColor: "green",
  });
};

const showErrorAlert = (text: string) => {
  showAlert({
    text,
    backgroundColor: "red",
  });
};

export { showSuccessAlert, showErrorAlert, showAlert };

import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({
  title,
  style,
  onPress,
  disable = false,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable || isLoading}
      activeOpacity={0.7}
      className={`rounded-xl min-h-[62px] flex flex-row justify-center items-center ${
        disable || isLoading ? "bg-gray-400" : "bg-rose-600"
      } ${style}`}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <Text className="text-white font-psemibold text-lg">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

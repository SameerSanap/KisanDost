import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icons from "../../constants/icons";

export default function Profile() {
  const renderHeader = () => (
    <View className="p-4 mt-3">
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity>
          <Image source={icons.update} className="w-12 h-12" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.logout} className="w-7 h-7" />
        </TouchableOpacity>
      </View>
      <View className="justify-center items-center mb-6">
        <Image source={icons.profile} className="h-28 w-28 rounded-full" />
        <Text className="text-white font-pextrabold text-xl mt-2">Sameer</Text>
        <View className="h-36 w-full bg-[#1a1a2e] mt-6 rounded-lg p-4">
          <View className="flex-row gap-3">
            <Image source={icons.location} className="w-5 h-5" />
            <Text className="text-white font-pextralight text-lg">Nashik</Text>
          </View>
          <View className="flex-row gap-3 mt-2">
            <Image source={icons.phone} className="w-5 h-5" />
            <Text className="text-white font-pextralight text-lg">
              87946513
            </Text>
          </View>
          <View className="flex-row gap-3 mt-2">
            <Image source={icons.mail} className="w-5 h-5" />
            <Text className="text-white font-pextralight text-lg">
              sameer@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View className="mb-6">
        <Text className="text-xl text-gray-400">Address</Text>
        <Text className="text-white font-pregular mt-2">
          sdf saadsadsa sadasd
        </Text>
      </View>
      <Text className="text-xl text-gray-400 font-pregular ">History</Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-primary h-screen">
      {renderHeader()}
    </SafeAreaView>
  );
}

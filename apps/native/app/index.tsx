import { router } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "@/components/ui/button";

function Page() {
	return (
		<View className="flex-1 items-center justify-center bg-red-500 p-4">
			<Text className="text-foreground mt-4 text-lg font-medium">
				This is a modal!
			</Text>
			<Button
				variant="secondary"
				onPress={() => router.back()}
				className="mt-4"
			>
				<Text className="mr-2">Close</Text>
			</Button>
		</View>
	);
}

export default Page;

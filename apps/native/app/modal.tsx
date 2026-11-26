import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

function Modal() {
	function handleClose() {
		router.back();
	}

	return (
		<View className="flex-1 items-center justify-center p-4">
			<Button><Text>Button</Text></Button>
			<Text className="text-foreground mt-4 text-lg font-medium">
				This is a modal!
			</Text>
			<Button variant="secondary" onPress={handleClose} className="mt-4">
        <Text className="mr-2">Close</Text>
				{/* Close Modal */}
			</Button>
		</View>
	);
}

export default Modal;

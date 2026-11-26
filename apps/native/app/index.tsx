import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/src/api";

function Page() {
	const trpc = useTRPC();

	const { data, isLoading, error } = useQuery(trpc.serverRouter.getUserById.queryOptions({ id: "1" }));

	if (error)
		console.log("Error fetching data:", error);

	if (isLoading) {
		return (
			<View className="flex-1 items-center justify-center bg-red-500 p-4">
				<Text className="text-foreground mt-4 text-lg font-medium">
					Loading...
				</Text>
			</View>
		);
	}

	return (
		<View className="h-screen flex-1 items-center justify-center p-4">
			<Text className="text-foreground mt-4 text-lg font-medium">
				{`This is a modal! ${data} `}
			</Text>
			<Button
				// variant="secondary"
				// onPress={() => router.back()}
				className="mt-4"
			>
				<Text className="mr-2">Close</Text>
			</Button>
		</View>
	);
}

export default Page;

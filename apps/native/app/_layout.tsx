import "@/global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { AppThemeProvider } from "@/contexts/app-theme-context";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind } from "uniwind";

export const unstable_settings = {
	// anchor: "(drawer)",
};

function StackLayout() {
	return (
		<SafeAreaListener
			onChange={({ insets }) => {
				Uniwind.updateInsets(insets);
			}}
		>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<GluestackUIProvider mode="dark">
					<Stack screenOptions={{}}>
						{/* <Stack.Screen name="(drawer)" options={{ headerShown: false }} /> */}
						<Stack.Screen
							name="modal"
							options={{ title: "Modal", presentation: "modal" }}
						/>
					</Stack>
				</GluestackUIProvider>
			</GestureHandlerRootView>
		</SafeAreaListener>
	);
}

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<KeyboardProvider>
				<AppThemeProvider>
					<StackLayout />
				</AppThemeProvider>
			</KeyboardProvider>
		</GestureHandlerRootView>
	);
}

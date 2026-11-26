import "@/global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind } from "uniwind";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AppThemeProvider } from "@/contexts/app-theme-context";
import { TRPCProvider, trpcClientInstance } from "@/src/api";
import { getQueryClient } from "@/src/react-query-provider";

function StackLayout() {
	return (
		<SafeAreaListener
			onChange={({ insets }) => {
				Uniwind.updateInsets(insets);
			}}
		>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<GluestackUIProvider mode="dark" />
			</GestureHandlerRootView>
		</SafeAreaListener>
	);
}

export default function Layout() {
	const queryClient = getQueryClient();
	const [trpcClient] = useState(() => trpcClientInstance);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<KeyboardProvider>
				<QueryClientProvider client={queryClient}>
					<TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
						<AppThemeProvider>
							<Stack />
							{/* <StackLayout /> */}
						</AppThemeProvider>
					</TRPCProvider>
				</QueryClientProvider>
			</KeyboardProvider>
		</GestureHandlerRootView>
	);
}

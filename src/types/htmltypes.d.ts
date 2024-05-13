declare namespace svelteHTML {
	// enhance attributes
	interface HTMLAttributes<T> {
		// If you want to use on:beforeinstallprompt
		'on:enterViewport'?: (event: any) => any;
		'on:exitViewport'?: (event: any) => any;
	}
}

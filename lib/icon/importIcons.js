let importALl = (requireContext) => requireContext.keys().array.forEach(requireContext);
try {
    importALl(require.context('./icons', true, /\.svg$/))
} catch (error) {
    console.log(error)
}
function classes(...names: (string | undefined | null)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;
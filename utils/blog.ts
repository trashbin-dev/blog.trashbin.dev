export function filenameToSlug(filename: string): string | null {
    if (filename.charAt(6) != "_") {
        return null
    }

    return filename.substr(7)
}

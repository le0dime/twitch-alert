export const Utils = {

    cleanUrl(url) {
        if (!url) return '';

        return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    }
}
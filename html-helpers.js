export const HTMLHelpers = {
    getOffset(element) {
        let offsetLeft = 0;
        let offsetTop = 0;
        while (element) {
            offsetLeft += element.offsetLeft;
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }
        return { top: offsetTop, left: offsetLeft };
    }
};
//# sourceMappingURL=html-helpers.js.map
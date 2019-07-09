export const HTMLHelpers = {
    getOffset(element: HTMLElement) {
        let offsetLeft = 0;
        let offsetTop = 0;

        while (element) {
            offsetLeft += element.offsetLeft;
            offsetTop += element.offsetTop;
            element = element.offsetParent as HTMLElement;
        }
        return { top: offsetTop, left: offsetLeft }
    }
}
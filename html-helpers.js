"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLHelpers = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHRtbC1oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxXQUFXLEdBQUc7SUFDdkIsU0FBUyxDQUFDLE9BQW9CO1FBQzFCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbEIsT0FBTyxPQUFPLEVBQUU7WUFDWixVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUMvQixPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQTJCLENBQUM7U0FDakQ7UUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUE7SUFDL0MsQ0FBQztDQUNKLENBQUEifQ==
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://134.33.248.254/hello");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const text = yield response.text(); // or response.json() if it's JSON
            const messageDiv = document.getElementById("message");
            if (messageDiv) {
                messageDiv.textContent = text;
            }
        }
        catch (error) {
            console.error("Error fetching message:", error);
            const messageDiv = document.getElementById("message");
            if (messageDiv) {
                messageDiv.textContent = "Failed to fetch message.";
            }
        }
    });
}
fetchMessage();

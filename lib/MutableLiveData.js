"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutableLiveData = void 0;
const LiveData_1 = require("./LiveData");
/**
 * Basic mutable instance of a {@link LiveData}.
 */
class MutableLiveData extends LiveData_1.LiveData {
    /**
     * Sets current LiveData value, and notifies observers.
     *
     * @param value The value to set.
     */
    postValue(value) {
        this.data = value;
        this.observers.forEach(observer => {
            observer(value);
        });
    }
}
exports.MutableLiveData = MutableLiveData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0YWJsZUxpdmVEYXRhLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiTXV0YWJsZUxpdmVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFvQztBQUVwQzs7R0FFRztBQUNILE1BQU0sZUFBbUIsU0FBUSxtQkFBVztJQUV4Qzs7OztPQUlHO0lBQ0ksU0FBUyxDQUFDLEtBQWU7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVKO0FBRVEsMENBQWUifQ==
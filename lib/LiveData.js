"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveData = void 0;
/**
 * Data holder that observers changes in state.
 */
class LiveData {
    constructor() {
        this.observers = [];
        this.data = null;
    }
    /**
     * Observes changes in LiveData value. If value set before observed, immediately invokes observer.
     *
     * @param observer  The observer to watch for changes.
     */
    observe(observer) {
        this.observers.push(observer);
        const tData = this.data;
        if (tData != null)
            observer(tData);
    }
    /**
     * @return  The current LiveData value.
     */
    getValue() {
        return this.data;
    }
    /**
     * Attempts to remove observer.
     *
     * @param observer  The observer to remove.
     *
     * @return  True if removed otherwise false.
     */
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index != -1) {
            this.observers.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all observers.
     */
    removeAllObservers() {
        this.observers.splice(0, this.observers.length);
    }
    /**
     * @return  A read-only version of observers.
     *          Mostly used for testing.
     */
    getObservers() {
        return this.observers;
    }
}
exports.LiveData = LiveData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZURhdGEuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJMaXZlRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7R0FFRztBQUNILE1BQWUsUUFBUTtJQUF2QjtRQUNjLGNBQVMsR0FBdUIsRUFBRSxDQUFBO1FBRWxDLFNBQUksR0FBYSxJQUFJLENBQUE7SUFrRG5DLENBQUM7SUFoREc7Ozs7T0FJRztJQUNJLE9BQU8sQ0FBQyxRQUFxQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUk7WUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksY0FBYyxDQUFDLFFBQXFCO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzlDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQy9CLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0I7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztDQUNKO0FBRU8sNEJBQVEifQ==
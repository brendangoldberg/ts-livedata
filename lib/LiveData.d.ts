import Observer from "./Observer";
/**
 * Data holder that observers changes in state.
 */
declare abstract class LiveData<T> {
    protected observers: Array<Observer<T>>;
    protected data: T | null;
    /**
     * Observes changes in LiveData value. If value set before observed, immediately invokes observer.
     *
     * @param observer  The observer to watch for changes.
     */
    observe(observer: Observer<T>): void;
    /**
     * @return  The current LiveData value.
     */
    getValue(): T;
    /**
     * Attempts to remove observer.
     *
     * @param observer  The observer to remove.
     *
     * @return  True if removed otherwise false.
     */
    removeObserver(observer: Observer<T>): Boolean;
    /**
     * Removes all observers.
     */
    removeAllObservers(): void;
    /**
     * @return  A read-only version of observers.
     *          Mostly used for testing.
     */
    getObservers(): ReadonlyArray<Observer<T>>;
}
export default LiveData;

import Observer from "./Observer";

/**
 * Data holder that observers changes in state.
 */
abstract class LiveData<T> {
    protected observers: Array<Observer<T>> = []

    protected data: T | null = null

    /**
     * Observes changes in LiveData value. If value set before observed, immediately invokes observer.
     *
     * @param observer  The observer to watch for changes.
     */
    public observe(observer: Observer<T>) {
        this.observers.push(observer)
        const tData = this.data
        if (tData != null) observer(tData)
    }

    /**
     * @return  The current LiveData value.
     */
    public getValue(): T | null {
        return this.data
    }

    /**
     * Attempts to remove observer.
     *
     * @param observer  The observer to remove.
     *
     * @return  True if removed otherwise false.
     */
    public removeObserver(observer: Observer<T>): Boolean {
        const index = this.observers.indexOf(observer)
        if (index != -1) {
            this.observers.splice(index, 1)
            return true
        }
        return false
    }

    /**
     * Removes all observers.
     */
    public removeAllObservers() {
        this.observers.splice(0, this.observers.length)
    }

    /**
     * @return  A read-only version of observers.
     *          Mostly used for testing.
     */
    getObservers(): ReadonlyArray<Observer<T>> {
        return this.observers
    }
}

export default LiveData
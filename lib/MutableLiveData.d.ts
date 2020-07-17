import LiveData from "./LiveData";
/**
 * Basic mutable instance of a {@link LiveData}.
 */
declare class MutableLiveData<T> extends LiveData<T> {
    /**
     * Sets current LiveData value, and notifies observers.
     *
     * @param value The value to set.
     */
    postValue(value: T | null): void;
}
export default MutableLiveData;

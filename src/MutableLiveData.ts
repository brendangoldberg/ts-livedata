import {LiveData} from "./LiveData";

/**
 * Basic mutable instance of a {@link LiveData}.
 */
class MutableLiveData<T> extends LiveData<T> {

    /**
     * Sets current LiveData value, and notifies observers.
     *
     * @param value The value to set.
     */
    public postValue(value: T | null) {
        this.data = value
        this.observers.forEach(observer => {
            observer(value)
        })
    }

}

export default MutableLiveData
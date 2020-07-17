/**
 * Structure for handling communication on value updates from {@link LiveData}.
 */
export interface Observer<T> {
    (value: T | null): void
}
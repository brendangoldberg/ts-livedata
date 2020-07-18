import {expect} from "chai"

import MutableLiveData from "../MutableLiveData"
import {Observer} from "../Observer"

describe("MutableLiveData", () => {

    let liveData: MutableLiveData<String>

    beforeEach(() => {
        liveData = new MutableLiveData<String>()
    })

    it("should post single value", () => {
        // Given
        const expected = "some value"

        // When
        liveData.postValue(expected)

        const actual = liveData.getValue()

        // Then
        expect(actual).equal(expected)
    })

    it("should observe change", () => {
        // Given
        const expected = "some value"

        liveData.postValue(expected)

        // When
        liveData.observe((actual) => {
            // Then
            expect(expected).equal(actual)
        })
    })

    it("should post value before observing then pick change", () => {
        // Given
        const expected = "some value"

        // When
        liveData.observe((actual) => {
            // Then
            expect(actual).equal(expected)
        })

        expect(liveData.getValue()).equal(null)

        liveData.postValue(expected)
    })

    it("should remove all observer", () => {
        // Given
        const expected = 0

        const observer1: Observer<String> = (value => {

        })

        const observer2: Observer<String> = (value => {

        })

        const first = liveData.getObservers()

        expect(first).empty

        liveData.observe(observer1)
        liveData.observe(observer2)

        const second = liveData.getObservers()

        expect(second).length(2)

        // When
        liveData.removeAllObservers()

        const actual = liveData.getObservers()

        // Then
        expect(actual).length(expected)
    })

    it("should handle remove single observer", () => {
        // Given
        const expected = 0

        const observer1: Observer<String> = (value => {

        })

        const first = liveData.getObservers()

        expect(first).empty

        liveData.observe(observer1)

        const second = liveData.getObservers()

        expect(second).length(1)

        // When
        const removed = liveData.removeObserver(observer1)

        const actual = liveData.getObservers()

        // Then
        expect(actual).length(expected)
        expect(removed).true
    })

    it("should handle attempt remove unknown observer", () => {
        // Given
        const expected = 1

        const observer1: Observer<String> = (value => {

        })

        const observer2: Observer<String> = (value => {

        })

        const first = liveData.getObservers()

        expect(first).empty

        liveData.observe(observer1)

        const second = liveData.getObservers()

        expect(second).length(1)

        // When
        const removed = liveData.removeObserver(observer2)

        const actual = liveData.getObservers()

        // Then
        expect(actual).length(expected)
        expect(removed).false
    })
})
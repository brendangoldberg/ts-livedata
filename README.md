## TS LiveData Library
[![npm version](https://badge.fury.io/js/%40ts-livedata%2Fcore.svg)](https://badge.fury.io/js/%40ts-livedata%2Fcore)
[![CircleCI](https://img.shields.io/circleci/project/github/brendangoldberg/ts-livedata/master.svg)](https://circleci.com/gh/brendangoldberg/ts-livedata/tree/master)

### About
Observer pattern based library for TypeScript, similar to Android's [LiveData](https://developer.android.com/topic/libraries/architecture/livedata).

For information on the Observer pattern please visit [Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern#:~:text=The%20observer%20pattern%20is%20a,calling%20one%20of%20their%20methods.).

### Installation
```javascript
npm install @ts-livedata/core
```

```javascript
yarn add @ts-livedata/core
```

### Usage
```typescript
import {MutableLiveData, Observer} from "@ts-livedata/core"

const liveData = new MutableLiveData<String | null>()

const observer: Observer<String | null> = (value => {
    if (value) {
        console.log(`your value: ${value}`)
    } else {
        console.log(`null value`)
    }
})

// Can observer before or after posting a value
liveData.observe(observer)

liveData.postValue("TypeScript LiveData")

// When you're ready to stop listening for changes
liveData.removeObserver(observer)

// Or you can remove all observers via
liveData.removeAllObservers()
```

### Questions
Feel free to drop a Github issue with any questions you may have.

### License
This project is licensed under the terms of the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).
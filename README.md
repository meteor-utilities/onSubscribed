This package provides new `onSubscribed` and `onDataChanged` callbacks.

### Install

```
meteor add utilities:onsubscribed
```

### Usage

#### `onSubscribed`

Gets called whenever a template's subscriptions are done loading. 

```js
Template.myTemplate.onCreated(function () {
  this.subscribe("mySubscription");
});

Template.myTemplate.onSubscribed(function () {
  console.log("subscription done!");
});
```

#### `onDataChanged`

Gets called whenever a template's data context changes.

```js
Template.myTemplate.onDataChange(function () {
  console.log("data context changed!");
});
```
This package provides a new `onSubscribed` callback that gets called whenever a template's subscriptions are done loading. 

### Usage

```js
Template.myTemplate.onCreated(function () {
  this.subscribe("mySubscription");
});

Template.myTemplate.onSubscribed(function () {
  console.log("subscription done!");
});
```
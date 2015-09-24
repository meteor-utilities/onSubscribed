Package.describe({
  name: "utilities:onsubscribed",
  summary: "OnSubscribed: Add an onSubscribed callback to your templates",
  version: "0.1.1",
  git: "https://github.com/meteor-utilities/onSubscribed"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  api.use([
    'standard-app-packages'
  ]);

  api.addFiles([
    'lib/onsubscribed.js'
  ], ['client']);

});

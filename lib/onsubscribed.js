Template.prototype.onSubscribed = function(callback) {
  var template = this;
   template.onCreated(function() {
      var templateInstance = this;
      templateInstance.autorun(function(computation) {
         if (templateInstance.subscriptionsReady()) {
            callback.bind(templateInstance)();
            computation.stop();
         }
      });
   });
};
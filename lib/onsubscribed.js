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

Template.prototype.onDataChanged = function(callback) {
  var template = this;
  template.onCreated(function () {
    var templateInstance = this;
    templateInstance.autorun(function(computation) {
      var newData = Template.currentData();
        if (!computation.firstRun) {
          callback.bind(templateInstance)(newData);
        }
      });
  });
}
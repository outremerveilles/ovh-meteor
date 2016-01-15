Ovh = Npm.require('ovh')({
  endpoint: 'ovh-eu',
  appKey: Meteor.settings.ovh.APP_KEY,
  appSecret: Meteor.settings.ovh.APP_SECRET,
  consumerKey: Meteor.settings.ovh.CONSUMER_KEY
});
Package.describe({
  name: 'djabatav:ovh',
  version: '0.0.1'
});

Npm.depends({
  "ovh": "1.1.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('Ovh');
  api.addFiles('ovh.js', 'server');
});
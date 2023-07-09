// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {

  // Restore last photo path
  Capacitor.Plugins.Preferences.get({
    key: 'path',
  }).then((result) => {
    document.querySelector("#photo").src = Capacitor.convertFileSrc(result.value);
  });

  // Add event listeners for button
  document
    .querySelector("#take-photo")
    .addEventListener("click", () => {
      // Take photo
      Capacitor.Plugins.Camera.getPhoto({
        resultType: 'uri',
      }).then((photo) => {
        // Display photo
        document.querySelector("#photo").src = photo.webPath;
        // Save photo path
        Capacitor.Plugins.Preferences.set({
          key: 'path',
          value: photo.path,
        });
      });
    });

  // Add event listeners for button
  document
    .querySelector("#delete-photo")
    .addEventListener("click", () => {
      document.querySelector("#photo").src = "";
      // Save photo path
      Capacitor.Plugins.Preferences.get({
        key: 'path',
      }).then((result) => {
        Capacitor.Plugins.Filesystem.deleteFile({
          path: result.value,
        });
        Capacitor.Plugins.Preferences.remove({
          key: 'path',
        });
      });
    });
});

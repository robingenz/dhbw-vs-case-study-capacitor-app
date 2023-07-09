// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Add click listener to button
  document
    .querySelector("#hello-world")
    .addEventListener("click", () => {
      // Show alert dialog
      Capacitor.Plugins.Dialog.alert({
        title: "Hello World",
        message: "Hello World",
      });
    });
});

let introPopup;

// Open the popup when we enter a given zone
introPopup = WA.onEnterZone('myZone', () => {
    WA.openPopup("intro", "Welcome to my partyspace! There's a jitsi area in the library and the kitchen. Can you find the treasure chest on every map? :) You can zoom out to see more of the map.", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('myZone', () => {
    introPopup.close();
});
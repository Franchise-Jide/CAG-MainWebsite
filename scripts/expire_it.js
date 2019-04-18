/* 
    ##############
    # HOW TO USE #
    ##############

    Required Classes:
    'expires' - Put on parent element that will hide if expired.
    'expire-date' - Required for each element that will expire. FORMAT: <YEAR>-<MONTH>-<DAY> 2019-04-12
    'expire-empty' - An element that will notify user that everything is expired. Will be displayed inline.

    1. Add function checkExpired() to body onload.
    2. Add the 'expires' class on each item that can expire.
    3. Add the 'expire-date' class inside each element in the correct format.

    Example:
    <div class="expires">
        <div class="expire-date">2019-02-11</div>
        Content goes here...
    </div>

 */


// Capture all elements that can expire
var elements = document.querySelectorAll(".expires");
var expireDates = document.querySelectorAll(".expire-date");
var expireEmpty = document.querySelector("#expire-empty")

var TAG = "EXPIRE IT: "

/* Checks to see if any element on the page expired. Must be loaded on page load. */
function checkExpired() {
    var currentTime = new Date().getTime();
    var currentIndex = 0;
    var expiredItems = 0;

    expireDates.forEach((element) => {
        // Format for the Date class
        var dateFormated = "'" + element.innerHTML + "'";
        var dateCaptured = new Date(dateFormated).getTime();

        // Add number of milliseconds in a day to show element on expiration date
        dateCaptured += 86400000;

        if ((dateCaptured) < currentTime) {
            // Element expired
            expiredItems++;
            elements[currentIndex].style.display = 'none';
        }
        currentIndex++;
    });

    // Print out how many expired items there are
    if (expiredItems == 0) {
        console.log(TAG + "No items have expired.");
    } else {
        console.log(TAG + expiredItems + " item(s) have expired.");
    }

    // Check if all items are expired
    if (expiredItems == elements.length) {
        expireEmpty.style.display = 'inline';
    }
}
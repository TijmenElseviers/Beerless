var Scanner = function () {


    var init = function () {

    };

    var scanCode = function () {
        QRScanner.scan(displayContents);

        function displayContents(err, text){
            if(err){
                // an error occurred, or the scan was canceled (error code `6`)
            } else {
                // The scan completed, display the contents of the QR code:
                alert(text);
            }
        }

        // Make the webview transparent so the video preview is visible behind it.
        QRScanner.show();
        // Be sure to make any opaque HTML elements transparent here to avoid
        // covering the video.
        $(document).trigger('scanCode_complete');
    };

    var stopScan = function () {
        if (Scanner.scanCode() == true) {
            QRScanner.destroy(function(status){
                console.log(status);
            });
        }
    };

    return {
        scanCode: scanCode,
        stopScan: stopScan,
        init: init
    };
}();
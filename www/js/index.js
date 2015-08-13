var EbillApplication = {
  results: [],
  resultsElement: document.querySelector('.results'),

  writeResults: function writeResults() {
    this.resultsElement.innerHTML = '';
    this.results.forEach(function forEachResult(result) {
      this.resultsElement.innerHTML += result;
    }.bind(this));
  },

  onDeviceReady: function onDeviceReady() {
    document.querySelector('.button').addEventListener('click', function onClick() {
      cordova.plugins.barcodeScanner.scan(
        function success(result) {
          this.results.unshift('<p>Result: ' + result + '</p>');
          this.writeResults();
        }.bind(this),
        function failed(error) {
          this.results.unshift('<p>Error: ' + error + '</p>');
          this.writeResults();
        }.bind(this)
      );
    }.bind(this));
  }
};

document.addEventListener('deviceready', EbillApplication.onDeviceReady, false);

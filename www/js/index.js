var EbillApplication = {
  results: [],
  resultsElement: document.querySelector('.results'),

  writeResults: function writeResults() {
    EbillApplication.resultsElement.innerHTML = '';
    EbillApplication.results.forEach(function forEachResult(result) {
      EbillApplication.resultsElement.innerHTML += result;
    });
  },

  onDeviceReady: function onDeviceReady() {
    document.querySelector('.button').addEventListener('click', function onClick() {
      cordova.plugins.barcodeScanner.scan(
        function success(result) {
          EbillApplication.results.unshift('<p>Result: ' + result + '</p>');
          EbillApplication.writeResults();
        },
        function failed(error) {
          EbillApplication.results.unshift('<p>Error: ' + error + '</p>');
          EbillApplication.writeResults();
        }
      );
    }.bind(this));
  }
};

document.addEventListener('deviceready', EbillApplication.onDeviceReady, false);

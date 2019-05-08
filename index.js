var key = 'storage_test';
var unknown_key = 'unknown_key';
var val = {
    randomID: shortId(),
    timestamp: Date().toString()
};

console.log('Support INDEXEDDB:', localforage.supports(localforage.INDEXEDDB));
console.log('Support WEBSQL:', localforage.supports(localforage.WEBSQL));
console.log('Support LOCALSTORAGE:', localforage.supports(localforage.LOCALSTORAGE));

(async function() {
    //localforage.config(); // This seems to be optional

    await localforage.ready();
    console.log('Driver:', localforage.driver());

    var read_val = await localforage.getItem(key)
    console.log('Read:', JSON.stringify(read_val));

    var write_val = await localforage.setItem(key, val);
    console.log('Wrote:', JSON.stringify(write_val));
})();

function shortId() {
    return Math.random().toString(36).substring(2, 15);
}

// Get debug output in HTML when viewing on a smartphone
var originalConsoleLog = console.log;
function consoleLogProxy() {
    originalConsoleLog.apply(console, arguments);
    var htmlConsole = document.getElementById('htmlConsole');
    if (htmlConsole) {
        var message = Array.prototype.slice.apply(arguments, []).join(' ');
        htmlConsole.innerHTML += '\n'+message;
    }
}
console.log = consoleLogProxy;
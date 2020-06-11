chrome.runtime.sendMessage(extensionId, {mode: 'passive'}, function(response) {
    console.log('Presence registred', response);
  });
  
  // Wait for presence Requests
  chrome.runtime.onMessage.addListener(function(info, sender, sendResponse) {
    console.log('Presence requested', info)
    sendResponse(getPresence(info));
  });
  
  var today = Date.now();
  var todayI = today;  
  function getPresence(info){
    todayI = today;
      try{
        return {
          clientId: '720756317664313374',
            presence: {
                  state: 'In a game',
                  details: document.getElementById('round').textContent,
                  startTimestamp: todayI,
                  largeImageKey: 'ingame',
                  largeImageText: 'on ' + window.location.host.toString(),
                  instance: true,

              }
        }
      } catch(e){
        console.error(e);
        todayI = today;
        return {};
      }
    }
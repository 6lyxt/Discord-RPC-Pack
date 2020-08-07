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
          clientId: '741418286469873706',
            presence: {
                  state: 'from ' + document.getElementsByClassName('header_with_cover_art-primary_info-primary_artist')[0].textContent,
                  details: 'Reading lyrics of ' + document.getElementsByClassName('header_with_cover_art-primary_info-title')[0].textContent,
                  startTimestamp: todayI,
                  largeImageKey: 'img',
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
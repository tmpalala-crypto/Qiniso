// QINISO MARK TECHNOLOGIES - SECURITY LOCK V2.js V26 - HACKER CAPTURE EDITION
// Field Tool Pro V4 - SAPS 2024/4410 - POPIA - QINISO Shield + Camera Trap + Device Forensics
console.log('🔒 QINISO SECURITY LOCK V26 HACKER CAPTURE ACTIVE');

window.QINISO_SECURITY = {
  MAX_TRIES: 3,
  BLOCK_MINUTES: 60,
  hackerPhotos: [],
  
  getDeviceDetails: function(){
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      languages: navigator.languages,
      screen: `${screen.width}x${screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookiesEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
      deviceMemory: navigator.deviceMemory || 'unknown',
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
      vendor: navigator.vendor,
      brand: 'QINISO MARK TECHNOLOGIES',
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer
    };
  },
  
  captureHackerPhoto: async function(attemptNum){
    return new Promise(async (resolve)=>{
      let photoData = null;
      try{
        let stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}, audio:false});
        let video = document.createElement('video');
        video.srcObject = stream;
        video.style.display='none';
        document.body.appendChild(video);
        await video.play();
        await new Promise(r=>setTimeout(r,800));
        let canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video,0,0);
        photoData = canvas.toDataURL('image/jpeg',0.6);
        stream.getTracks().forEach(t=>t.stop());
        video.remove();
        console.log(`📸 QINISO Hacker Photo Captured - Attempt ${attemptNum}`);
        this.hackerPhotos.push({attempt:attemptNum, photo: photoData, time: new Date().toISOString()});
        resolve(photoData);
      }catch(e){
        console.warn('📸 Camera capture failed:', e.message);
        resolve(null);
      }
    });
  },
  
  checkBlocked: function(){
    let blockData = localStorage.getItem('QINISO_BLOCK_UNTIL');
    if(!blockData) return false;
    let until = parseInt(blockData);
    let now = Date.now();
    if(now < until){
      let mins = Math.ceil((until-now)/60000);
      let overlay = document.getElementById('loginOverlay');
      if(overlay){
        overlay.innerHTML = `<div style="background:white;border-radius:20px;padding:20px;width:100%;max-width:340px;text-align:center;border-top:5px solid red;">
        <div style="font-size:50px;">🚫</div>
        <div style="font-weight:900;color:red;font-size:16px;">SYSTEM LOCKED - SAPS NOTIFIED + PHOTO CAPTURED</div>
        <div style="font-size:10px;margin-top:10px;">Blocked for ${mins} minutes<br>📸 Photo + IP + GPS + Device reported to:<br><b>SAPS 2024/4410 + CEO + Brands + QINISO HQ

const shareButton=document.querySelector('#share');
const toast=document.querySelector('#toast');
let toastTimer;
shareButton.addEventListener('click',async()=>{
 const url=new URL('./',location.href).href;
 try{
  if(navigator.share){await navigator.share({title:'Trend Zone',text:'كل احتياجاتك في مكان واحد. حمّل تطبيق Trend Zone للأندرويد.',url});return;}
  if(navigator.clipboard){await navigator.clipboard.writeText(url);toast.textContent='تم نسخ رابط الصفحة';}
  else{toast.textContent='رابط الصفحة: '+url;}
 }catch(error){if(error.name==='AbortError')return;toast.textContent='يمكنك نسخ رابط الصفحة من شريط العنوان';}
 clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.textContent='';},5500);
});

// IF THEIR IS SOME BUG THAN FIX THE ARRAY OF LECTURES FIRST
var alllec=[
    "boardsrandflec",
    "boardsitflec",
    "boardsmatrixlec",
    "boardsdeterminantlec",
    "boardsconanddifflec",
    "boardsaodlec",
    "boardsintegralslec",
    "boardsaiolec",
    "boardsdiffequlec",
    "boardsvectorlec",
    "boards3dlec",
    "boardslpplec",
    "boardsprolec"
];
const hidealllec=()=>{for(let i=0;i<alllec.length;i++){document.getElementById(`${alllec[i]}`).style.display="none"}};

const setvideo=(vurl,vtitle)=>{document.getElementById('videogoeshere').innerHTML=`<iframe src="https://drive.google.com/file/d/${vurl}/preview" width="640" height="480"></iframe>`;document.getElementById('video-title-goes-here').innerHTML=vtitle;};
const removevideo=()=>{document.getElementById('videogoeshere').innerHTML='<img width="100%" src="./img/ok.gif" alt="Loading !!!">';document.getElementById('video-title-goes-here').innerHTML="Let's play a video"};


const showlec=(lecname)=>{
    hidealllec();
    document.getElementById(lecname).style.display='unset';
}



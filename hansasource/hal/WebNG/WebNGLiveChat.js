function urlencode( str )
{
  var ret = str;
  
  ret = ret.toString();
  ret = encodeURIComponent(ret);
  ret = ret.replace(/%20/g, '+');
  
  return ret;
}

function microAjax(url,cF)
{
  this.bF = function(caller,object)
  {
    return function() {
      return caller.apply(object,new Array(object));
    };
  };
  this.sC = function(object)
  {
    if (this.r.readyState==4) {
      this.cF(this.r.responseText);
    };
  };
  this.gR = function()
  {
    if (window.ActiveXObject)
      return new ActiveXObject('Microsoft.XMLHTTP');
    else if (window.XMLHttpRequest)
      return new XMLHttpRequest();
    else
      return false;
  };
  if (arguments[2])
    this.pb=arguments[2];
  else
    this.pb="";
  this.cF=cF;
  this.url=url;
  this.r=this.gR();
  
  if(this.r) {
    this.r.onreadystatechange=this.bF(this.sC,this);
    if(this.pb!="") {
      this.r.open("POST",url,true);
      this.r.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      this.r.setRequestHeader('Connection','close');
    } else {
      this.r.open("GET",url,true);
    };
    this.r.send(this.pb);
  };
}

function LiveChat(rootelement)
{
  this.m_lastlinecnt = -1;
  this.m_root = document.getElementById(rootelement);
  this.m_server = ""; //uses same server, site was served on.
  
  this.isValid = function()
  {
    if (this.m_root)
      return true;
    else
      return false;
  };
  
  this.version = function()
  {
    return "HW AJAX LiveChat v1.0";
  };
  
  this.start = function()
  {
    this.m_root.style.border = "1px #d0d0d0 solid";
    this.m_root.style.background = "#fafafa";
    
    this.m_root.innerHTML = '<div id="chatintro">' +
    '<h1>Welcome to HW Live Chat</h1><input type="button" value="Start" onclick="return lc.clickStart()">' +
    '</div>';
  };
  
  this.addLineToMessages = function(txt)
  {
    var chatmsgwin = document.getElementById("chatmessages");
    if (chatmsgwin) {
      if (chatmsgwin.innerHTML.length!=0) chatmsgwin.innerHTML += '<br>';
      chatmsgwin.innerHTML += txt;
      chatmsgwin.scrollTop = chatmsgwin.scrollHeight;
    };
  };
  
  this.handleServerReply = function(response)
  {
    if (response && response.length>0) {
      var obj = eval('(' + response + ')');
      if (obj && obj.objtype) {
        switch (obj.objtype) {
          case "new-chat":
            if (obj.result=="success") {
              lc.addLineToMessages(obj.user + ' joined the chat.');
              lc.startTimer();
            } else {
              lc.addLineToMessages('No agents are currently available.');
            };
            break;
          case "postmsg":
            if (obj.result!='success') {
              lc.addLineToMessages('Chat no longer open.');
            };
            break;
          case "getmsgs":
            if (obj.result=='success') {
              lc.m_lastlinecnt = obj.lastlinenr;
              for (i=0;i<obj.linecnt;i++) {
                var usr = obj.lines[i].user;
                var txt = obj.lines[i].text;
                
                if (!txt) txt = "";
                if (false) {
                  if (!usr || usr.length==0) usr = "You";
                  lc.addLineToMessages('<b>' + usr + '</b>: ' + txt);
                } else {
                  if (!usr) usr = "";
                  if (usr.length==0)
                    lc.addLineToMessages(txt);
                  else
                    lc.addLineToMessages('<b>' + usr + '</b>: ' + txt);
                };
              }
            };
            break;
        };
      };
    };
  };
  
  this.startTimer = function()
  {
    m_timerobject = setTimeout("lc.handleTimedEvent()",2000);
  };
  
  this.handleTimedEvent = function()
  {
    this.clickGet();
    this.startTimer();
  };
  
  this.postMessageToServer = function(txt)
  {
    microAjax(this.m_server + '/WebAction.hal',this.handleServerReply,'action=chataction&type=postmsg&args=' + urlencode(txt));
    return false;
  };
  
  this.getMessagesFromServer = function(fromline)
  {
    microAjax(this.m_server + '/WebAction.hal',this.handleServerReply,'action=chataction&type=getmsgs&args=' + fromline);
    return false;
  };
  
  this.clickStart = function()
  {
    this.m_root.innerHTML = '<div class="chatwindow">' +
    '<div id="chatmessages" style="height: 200px; width: 300px; border: 1px #808080 solid; overflow: scroll;">' +
    '</div>' +
    '<div class="chatentrybox" style="height: 30px; width: 300px; overflow: hidden">' +
    '<input type="text" id="chatentryfield" name="chatentryfield" onKeyPress="lc.checkEnter(event)">' +
    '<input type="button" value="Send" onclick="return lc.clickSend()">' +
    //'<input type="button" value="Get" onclick="return lc.clickGet()">' +
    '</div>' +        
    '</div>';
    this.addLineToMessages("Chat started...");
    this.addLineToMessages("Looking for available agent...");
    microAjax(this.m_server + '/WebAction.hal',this.handleServerReply,'action=chataction&type=createchat');
    return false;
  };
  
  this.checkEnter = function(e)
  {
    var ch;
    
    if (e && e.which) {
      e = e;
      ch = e.which;
    } else {
      e = event;
      ch = e.keyCode;
    };
    
    if (ch == 13) {
      this.clickSend();
      return false;
    } else {
      return true;
    };
  };
  
  this.clickSend = function()
  {
    var entryfield = document.getElementById("chatentryfield");
    if (entryfield && entryfield.value.length!=0) {
      this.postMessageToServer(entryfield.value);
      //this.addLineToMessages('<b>You:</b> ' + entryfield.value);
      entryfield.value = "";
    };
  };
  
  this.clickGet = function()
  { 
    this.getMessagesFromServer(this.m_lastlinecnt);
  };
}

var lc = new LiveChat("hwlivechat");

if (lc && lc.isValid()) {
  lc.start();
};
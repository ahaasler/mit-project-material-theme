function changeColor(e){var t="themes/material-"+e+".css";t=t.replace("-default","");var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),document.getElementsByTagName("head").item(0).replaceChild(n,document.getElementsByTagName("link").item(0))}window.onload=function(){function e(){var e=document.createElement("div");e.setAttribute("id","customizer");var n=document.createElement("select");n.setAttribute("name","color"),n.setAttribute("onchange","changeColor(this.value);");for(var a=0;a<t.length;a++){var l=document.createElement("option");l.setAttribute("value",t[a]),l.appendChild(document.createTextNode(t[a])),"default"===t[a]&&(l.selected=!0),n.appendChild(l)}e.appendChild(n),document.getElementsByTagName("body")[0].appendChild(e)}var t=["blue","cyan","deep-purple","default","green","indigo","light-blue","light-green","pink","purple","red","teal"];e()};
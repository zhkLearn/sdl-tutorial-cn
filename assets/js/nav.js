<html>
 <head></head>
 <body>
  function loadNavBar(url){ var xmlhttp; if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari xmlhttp = new XMLHttpRequest(); } else {// code for IE6, IE5 xmlhttp = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;); } xmlhttp.onreadystatechange = function() { if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200) { document.getElementById(&quot;page_navbar&quot;).innerHTML = xmlhttp.responseText; } } xmlhttp.open(&quot;GET&quot;, url, false); xmlhttp.send(); } function loadTail(url){ var xmlhttp; if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari xmlhttp = new XMLHttpRequest(); } else {// code for IE6, IE5 xmlhttp = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;); } xmlhttp.onreadystatechange = function() { if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200) { document.getElementById(&quot;page_tail&quot;).innerHTML = xmlhttp.responseText; } } xmlhttp.open(&quot;GET&quot;, url, false); xmlhttp.send(); } function loadLessonNavList(url) { var xmlhttp; if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari xmlhttp = new XMLHttpRequest(); } else {// code for IE6, IE5 xmlhttp = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;); } xmlhttp.onreadystatechange = function() { if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200) { document.getElementById(&quot;lesson_nav_list&quot;).innerHTML = xmlhttp.responseText; } } xmlhttp.open(&quot;GET&quot;, url, false); xmlhttp.send(); }
 </body>
</html>
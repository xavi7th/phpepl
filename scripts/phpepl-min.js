(function(e,t,n,r){"use strict";if(!n)throw new Error("jquery not found");if(!e.ace)throw new Error("ace not found");var i=e.ace,s="http://localhost:8888/eval/index.php",o="http://phpepl.cloudcontrolled.com/eval/index.php",u,a=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),i;t=t>12?t-12:t;t=t===0?12:t;i=[t,n,r].join(":");return i},f=function(e){var t=!!arguments[1],r=n(".output span");r.html(e).removeClass("error");t&&r.addClass("error");n(".spinner").fadeOut("fast");n(".timestamp").find("span").html(a())},l=function(e){n(".ace_gutter-cell").each(function(t){if(Number(n(this).html())===e){n(this).addClass("error-gutter");return}})},c=function(){var e=u.getValue();if(!e.length){f("Please supply some code...");return}n(".spinner").fadeIn("fast");n.ajax({type:"POST",url:o,data:{code:e},dataType:"json",success:function(e){if(!e)return;var t=e.result,n=e.error,r;if(n){l(n.line);r="Line "+n.line+": "+n.message;f(r,!0);return}f(t)},error:function(e,t,n){f("Whoopsie daisies!")}})},h=function(){if(e.localStorage){var t=u.getValue();localStorage.setItem("code",t);n(".timestamp").find("span").html("Code Saved!")}},p=function(){if(e.localStorage){var t=localStorage.getItem("code"),n=t?t:'echo "PHPepl";';u.setValue(n)}};n(function(){u=i.edit("editor");u.setTheme("ace/theme/textmate");u.getSession().setMode("ace/mode/php");p();n(".submit button").click(function(){c()});n(t).keydown(function(e){if(e.which===13&&(e.ctrlKey||e.metaKey)){c();e.preventDefault()}if(e.which===83&&(e.ctrlKey||e.metaKey)){h();e.preventDefault()}});n(e).unload(function(){h()})})})(window,document,window.jQuery);
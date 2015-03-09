# Reddit Image Activator

A small Javascript to run in console on any subreddit containing images.
Ths script will insert an image tag under each link containing an image URL for preview.

To use it, just create a shortcut with this code:

<pre>javascript:var wh=parseInt($(window).height(),10),imh=wh-30,sbw=parseInt($("div.side").width,10),cw=parseInt($("div.content").width,10),imw=cw-sbw,sci=0,sifi=!0,smi=0,ii="data:image/gif;base64,R0lGODlhGQAHAIAAAP///z6PKCH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUUwQTNGQTVDNjMwMTFFNEFDNDlBQjZCOTgwMUQzN0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUUwQTNGQTZDNjMwMTFFNEFDNDlBQjZCOTgwMUQzN0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RTBBM0ZBM0M2MzAxMUU0QUM0OUFCNkI5ODAxRDM3QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RTBBM0ZBNEM2MzAxMUU0QUM0OUFCNkI5ODAxRDM3QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAZAAcAAAIgjI+pCdH2QIROomYznXO7/1CgdWDl+IGiKkpRFy7yXAAAOw==";$("body").keydown(function(i){if(37==i.keyCode||39==i.keyCode){37==i.keyCode?sci--:39==i.keyCode&&sci++,-1===sci&&(sci=smi-1),sci===smi&&(sci=0);var e=$("a.scrollerIndex-"+sci);e.length>0&&(e.focus(),$("html, body").animate({scrollTop:e.offset().top-5},250))}}),$("a.title").each(function(){var i=$(this);if(i.length>0){var e=i.attr("href"),t=e;if("undefined"==typeof e&&(e=""),e.indexOf("imgur.com")>-1||e.indexOf("minus.com")>-1||e.indexOf(".jpg")>-1||e.indexOf(".jpeg")>-1||e.indexOf(".png")>-1||e.indexOf(".gif")>-1||e.indexOf(".gifv")>-1){i.addClass("scrollerIndex-"+smi),smi++,sifi&&(sifi=!1,$("html, body").animate({scrollTop:i.offset().top-5},250)),e.indexOf("imgur.com/a/")>-1||e.indexOf("imgur.com/gallery/")>-1?t=ii:e.indexOf(".gifv")>-1?t=ii:e.indexOf("imgur.com")>-1&&-1==e.indexOf(".jpg")&&-1==e.indexOf(".jpeg")&&-1==e.indexOf(".png")&&-1==e.indexOf(".gif")&&-1==e.indexOf(".gifv")&&(t+=".png");var c=$("<img>").attr("src",t).attr("style","max-width: 100%; max-height: "+imh+"px;"),d=$("<a>").attr("href",e).attr("target","_blank").append(c),m=$("<div>").attr("style","clear: both; width: "+imw+"px; height: "+imh+"px;").append(d);i.after(m)}}});</pre>

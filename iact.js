/**
 * @file
 * Image activator for reddit.com.
 * It checks for image links and insert image under said link, with navigation.
 *
 * @author
 * Stian Hanger <pdnagilum@gmail.com>
 */

var iact_windowHeight         = parseInt($(window).height(), 10),
    iact_imageMaxHeight       = iact_windowHeight - 30,
    iact_sideBarWidth         = parseInt($('div.side').width, 10),
    iact_contentWidth         = parseInt($('div.content').width, 10),
    iact_imageMaxWidth        = iact_contentWidth - iact_sideBarWidth,
    iact_scrollerCurrentIndex = 0,
    iact_scrollerIsFirstItem  = true,
    iact_scrollerMaxIndex     = 0,
    iact_imgurImage           = 'data:image/gif;base64,R0lGODlhGQAHAIAAAP///z6PKCH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUUwQTNGQTVDNjMwMTFFNEFDNDlBQjZCOTgwMUQzN0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUUwQTNGQTZDNjMwMTFFNEFDNDlBQjZCOTgwMUQzN0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RTBBM0ZBM0M2MzAxMUU0QUM0OUFCNkI5ODAxRDM3QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RTBBM0ZBNEM2MzAxMUU0QUM0OUFCNkI5ODAxRDM3QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAZAAcAAAIgjI+pCdH2QIROomYznXO7/1CgdWDl+IGiKkpRFy7yXAAAOw==';

// Right arrow scrolls to next image, left to previous.
$('body').keydown(function (e) {
  if (e.keyCode == 37 ||
      e.keyCode == 39) {
    if (e.keyCode == 37) { iact_scrollerCurrentIndex--; }
    else if (e.keyCode == 39) { iact_scrollerCurrentIndex++; }

    if (iact_scrollerCurrentIndex === -1) { iact_scrollerCurrentIndex = (iact_scrollerMaxIndex -1); }
    if (iact_scrollerCurrentIndex === iact_scrollerMaxIndex) { iact_scrollerCurrentIndex = 0; }

    var $a = $('a.scrollerIndex-' + iact_scrollerCurrentIndex);

    if ($a.length > 0) {
      $a.focus();

      $('html, body').animate({
        scrollTop: ($a.offset().top - 5)
      }, 250);
    }
  }
});

// Cycle all image links and expand image.
$('a.title').each(function () {
  var $a = $(this);

  if ($a.length > 0) {
    var href   = $a.attr('href'),
        imgurl = href;

    if (typeof href === 'undefined')
      href = '';

    // Check for image link.
    if (href.indexOf('imgur.com') > -1 ||
        href.indexOf('minus.com') > -1 ||
        href.indexOf('.jpg') > -1 ||
        href.indexOf('.jpeg') > -1 ||
        href.indexOf('.png') > -1 ||
        href.indexOf('.gif') > -1 ||
        href.indexOf('.gifv') > -1) {
      $a.addClass('scrollerIndex-' + iact_scrollerMaxIndex);
      iact_scrollerMaxIndex++;

      if (iact_scrollerIsFirstItem) {
        iact_scrollerIsFirstItem = false;

        $('html, body').animate({
          scrollTop: ($a.offset().top - 5)
        }, 250);
      }

      // Check for imgur gallery.
      if (href.indexOf('imgur.com/a/') > -1 ||
          href.indexOf('imgur.com/gallery/') > -1) {
        imgurl = iact_imgurImage;
      }


      // Check for GIF video.
      else if (href.indexOf('.gifv') > -1) {
        imgurl = iact_imgurImage;
      }

      // Check if the imgur link is missing the extension.
      else {
        if (href.indexOf('imgur.com') > -1 &&
            href.indexOf('.jpg') == -1 &&
            href.indexOf('.jpeg') == -1 &&
            href.indexOf('.png') == -1 &&
            href.indexOf('.gif') == -1 &&
            href.indexOf('.gifv') == -1) {
          imgurl += '.png';
        }
      }

      // Create and insert image link.
      var $img = $('<img>')
        .attr('src', imgurl)
        .attr('style', 'max-width: 100%; max-height: ' + iact_imageMaxHeight + 'px;');

      var $link = $('<a>')
        .attr('href', href)
        .attr('target', '_blank')
        .append($img);

      var $div = $('<div>')
        .attr('style', 'clear: both; width: ' + iact_imageMaxWidth + 'px; height: ' + iact_imageMaxHeight + 'px;')
        .append($link);

      $a.after($div);
    }
  }
});

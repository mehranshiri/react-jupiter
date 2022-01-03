import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  i.jupiter-icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    display: inline-block;
    vertical-align: middle;
    font-family: 'Jupiterico' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-icon-zoom-out-map:before {
    content: "\\e900";
  }
  .new-icon-zoom-out:before {
    content: "\\e901";
  }
  .new-icon-zoom-in:before {
    content: "\\e902";
  }
  .new-icon-work-outline:before {
    content: "\\e903";
  }
  .new-icon-work-off:before {
    content: "\\e904";
  }
  .new-icon-work:before {
    content: "\\e905";
  }
  .new-icon-where-to-vote:before {
    content: "\\e906";
  }
  .new-icon-watch-later:before {
    content: "\\e907";
  }
  .new-icon-watch:before {
    content: "\\e908";
  }
  .new-icon-warning:before {
    content: "\\e909";
  }
  .new-icon-vpn-key:before {
    content: "\\e90a";
  }
  .new-icon-volume-up:before {
    content: "\\e90b";
  }
  .new-icon-volume-off:before {
    content: "\\e90c";
  }
  .new-icon-volume-mute:before {
    content: "\\e90d";
  }
  .new-icon-volume-down:before {
    content: "\\e90e";
  }
  .new-icon-visibility-off:before {
    content: "\\e90f";
  }
  .new-icon-visibility:before {
    content: "\\e910";
  }
  .new-icon-view-carousel:before {
    content: "\\e911";
  }
  .new-icon-verified-user:before {
    content: "\\e912";
  }
  .new-icon-update:before {
    content: "\\e913";
  }
  .new-icon-twitter-alt:before {
    content: "\\e914";
  }
  .new-icon-twitter:before {
    content: "\\e915";
  }
  .new-icon-tv:before {
    content: "\\e916";
  }
  .new-icon-touch-app:before {
    content: "\\e917";
  }
  .new-icon-toggle-on:before {
    content: "\\e918";
  }
  .new-icon-toggle-off:before {
    content: "\\e919";
  }
  .new-icon-today:before {
    content: "\\e91a";
  }
  .new-icon-thumb-up-alt:before {
    content: "\\e91b";
  }
  .new-icon-thumb-up:before {
    content: "\\e91c";
  }
  .new-icon-thumb-down-alt:before {
    content: "\\e91d";
  }
  .new-icon-thumb-down:before {
    content: "\\e91e";
  }
  .new-icon-theaters:before {
    content: "\\e91f";
  }
  .new-icon-textsms:before {
    content: "\\e920";
  }
  .new-icon-telegram-alt:before {
    content: "\\e921";
  }
  .new-icon-telegram:before {
    content: "\\e922";
  }
  .new-icon-tablet-android:before {
    content: "\\e923";
  }
  .new-icon-tablet:before {
    content: "\\e924";
  }
  .new-icon-supervisor-account:before {
    content: "\\e925";
  }
  .new-icon-supervised-user-circle:before {
    content: "\\e926";
  }
  .new-icon-stay-current-portrait:before {
    content: "\\e927";
  }
  .new-icon-stay-current-landscape:before {
    content: "\\e928";
  }
  .new-icon-star-half:before {
    content: "\\e929";
  }
  .new-icon-star-border:before {
    content: "\\e92a";
  }
  .new-icon-star:before {
    content: "\\e92b";
  }
  .new-icon-sort-by-alpha:before {
    content: "\\e92c";
  }
  .new-icon-smartphone:before {
    content: "\\e92d";
  }
  .new-icon-shopping-cart:before {
    content: "\\e92e";
  }
  .new-icon-share:before {
    content: "\\e92f";
  }
  .new-icon-settings-ethernet:before {
    content: "\\e930";
  }
  .new-icon-settings-applications:before {
    content: "\\e931";
  }
  .new-icon-setting:before {
    content: "\\e932";
  }
  .new-icon-sentiment-very-satisfied:before {
    content: "\\e933";
  }
  .new-icon-sentiment-very-dissatisfied:before {
    content: "\\e934";
  }
  .new-icon-sentiment-satisfied:before {
    content: "\\e935";
  }
  .new-icon-sentiment-dissatisfied:before {
    content: "\\e936";
  }
  .new-icon-send:before {
    content: "\\e937";
  }
  .new-icon-search:before {
    content: "\\e938";
  }
  .new-icon-restore:before {
    content: "\\e939";
  }
  .new-icon-report-problem:before {
    content: "\\e93a";
  }
  .new-icon-remove-circle-outline:before {
    content: "\\e93b";
  }
  .new-icon-remove-circle:before {
    content: "\\e93c";
  }
  .new-icon-radio-button-unchecked:before {
    content: "\\e93d";
  }
  .new-icon-radio-button-checked:before {
    content: "\\e93e";
  }
  .new-icon-question-answer:before {
    content: "\\e93f";
  }
  .new-icon-query-builder:before {
    content: "\\e940";
  }
  .new-icon-print:before {
    content: "\\e941";
  }
  .new-icon-playlist-play:before {
    content: "\\e942";
  }
  .new-icon-playlist-add-check:before {
    content: "\\e943";
  }
  .new-icon-playlist-add:before {
    content: "\\e944";
  }
  .new-icon-play-circle-outline:before {
    content: "\\e945";
  }
  .new-icon-play-circle-filled:before {
    content: "\\e946";
  }
  .new-icon-play-arrow:before {
    content: "\\e947";
  }
  .new-icon-place:before {
    content: "\\e948";
  }
  .new-icon-perm-identity:before {
    content: "\\e949";
  }
  .new-icon-perm-contact-calendar:before {
    content: "\\e94a";
  }
  .new-icon-pause-circle-outline:before {
    content: "\\e94b";
  }
  .new-icon-outlined-flag:before {
    content: "\\e94c";
  }
  .new-icon-ondemand-video:before {
    content: "\\e94d";
  }
  .new-icon-offline-pin:before {
    content: "\\e94e";
  }
  .new-icon-notifications-paused:before {
    content: "\\e94f";
  }
  .new-icon-notifications-off:before {
    content: "\\e950";
  }
  .new-icon-notifications-none:before {
    content: "\\e951";
  }
  .new-icon-notifications-active:before {
    content: "\\e952";
  }
  .new-icon-notifications:before {
    content: "\\e953";
  }
  .new-icon-notification-important:before {
    content: "\\e954";
  }
  .new-icon-note-add:before {
    content: "\\e955";
  }
  .new-icon-note:before {
    content: "\\e956";
  }
  .new-icon-not-interested:before {
    content: "\\e957";
  }
  .new-icon-more-vert:before {
    content: "\\e958";
  }
  .new-icon-more-horiz:before {
    content: "\\e959";
  }
  .new-icon-mood-bad:before {
    content: "\\e95a";
  }
  .new-icon-mood:before {
    content: "\\e95b";
  }
  .new-icon-mic-off:before {
    content: "\\e95c";
  }
  .new-icon-mic-none:before {
    content: "\\e95d";
  }
  .new-icon-mic:before {
    content: "\\e95e";
  }
  .new-icon-menu:before {
    content: "\\e95f";
  }
  .new-icon-mail-outline:before {
    content: "\\e960";
  }
  .new-icon-mail:before {
    content: "\\e961";
  }
  .new-icon-loyalty:before {
    content: "\\e962";
  }
  .new-icon-loop:before {
    content: "\\e963";
  }
  .new-icon-lock-open:before {
    content: "\\e964";
  }
  .new-icon-lock:before {
    content: "\\e965";
  }
  .new-icon-location-on:before {
    content: "\\e966";
  }
  .new-icon-location-off:before {
    content: "\\e967";
  }
  .new-icon-linkedin-alt:before {
    content: "\\e968";
  }
  .new-icon-linkedin:before {
    content: "\\e969";
  }
  .new-icon-link-off:before {
    content: "\\e96a";
  }
  .new-icon-link:before {
    content: "\\e96b";
  }
  .new-icon-language:before {
    content: "\\e96c";
  }
  .new-icon-keyboard-voice:before {
    content: "\\e96d";
  }
  .new-icon-keyboard-backspace:before {
    content: "\\e96e";
  }
  .new-icon-keyboard:before {
    content: "\\e96f";
  }
  .new-icon-instagram-alt:before {
    content: "\\e970";
  }
  .new-icon-instagram:before {
    content: "\\e971";
  }
  .new-icon-info:before {
    content: "\\e972";
  }
  .new-icon-indeterminate-check-box:before {
    content: "\\e973";
  }
  .new-icon-import-contacts:before {
    content: "\\e974";
  }
  .new-icon-ic-content-copy:before {
    content: "\\e975";
  }
  .new-icon-hourglass-full:before {
    content: "\\e976";
  }
  .new-icon-hourglass-empty:before {
    content: "\\e977";
  }
  .new-icon-home:before {
    content: "\\e978";
  }
  .new-icon-history-1:before {
    content: "\\e979";
  }
  .new-icon-highlight-off:before {
    content: "\\e97a";
  }
  .new-icon-help-outline:before {
    content: "\\e97b";
  }
  .new-icon-help:before {
    content: "\\e97c";
  }
  .new-icon-headset-mic:before {
    content: "\\e97d";
  }
  .new-icon-headset:before {
    content: "\\e97e";
  }
  .new-icon-group:before {
    content: "\\e97f";
  }
  .new-icon-gps-off:before {
    content: "\\e980";
  }
  .new-icon-gps-not-fixed:before {
    content: "\\e981";
  }
  .new-icon-gps-fixed:before {
    content: "\\e982";
  }
  .new-icon-google-plus-alt:before {
    content: "\\e983";
  }
  .new-icon-google-plus:before {
    content: "\\e984";
  }
  .new-icon-google-alt:before {
    content: "\\e985";
  }
  .new-icon-google:before {
    content: "\\e986";
  }
  .new-icon-get-app:before {
    content: "\\e987";
  }
  .new-icon-forum:before {
    content: "\\e988";
  }
  .new-icon-fingerprint:before {
    content: "\\e989";
  }
  .new-icon-favorite-border:before {
    content: "\\e98a";
  }
  .new-icon-favorite:before {
    content: "\\e98b";
  }
  .new-icon-facebook-alt:before {
    content: "\\e98c";
  }
  .new-icon-facebook:before {
    content: "\\e98d";
  }
  .new-icon-expand-more:before {
    content: "\\e98e";
  }
  .new-icon-expand-less:before {
    content: "\\e98f";
  }
  .new-icon-exit-to-app:before {
    content: "\\e990";
  }
  .new-icon-event-seat:before {
    content: "\\e991";
  }
  .new-icon-event:before {
    content: "\\e992";
  }
  .new-icon-error-outline:before {
    content: "\\e993";
  }
  .new-icon-error:before {
    content: "\\e994";
  }
  .new-icon-equalizer:before {
    content: "\\e995";
  }
  .new-icon-email:before {
    content: "\\e996";
  }
  .new-icon-drafts:before {
    content: "\\e997";
  }
  .new-icon-dialpad:before {
    content: "\\e998";
  }
  .new-icon-description:before {
    content: "\\e999";
  }
  .new-icon-delete-sweep:before {
    content: "\\e99a";
  }
  .new-icon-delete-outline:before {
    content: "\\e99b";
  }
  .new-icon-delete:before {
    content: "\\e99c";
  }
  .new-icon-dashboard:before {
    content: "\\e99d";
  }
  .new-icon-crop-rotate:before {
    content: "\\e99e";
  }
  .new-icon-credit-card:before {
    content: "\\e99f";
  }
  .new-icon-create:before {
    content: "\\e9a0";
  }
  .new-icon-copyright:before {
    content: "\\e9a1";
  }
  .new-icon-commute:before {
    content: "\\e9a2";
  }
  .new-icon-code:before {
    content: "\\e9a3";
  }
  .new-icon-cloud-upload:before {
    content: "\\e9a4";
  }
  .new-icon-cloud-queue:before {
    content: "\\e9a5";
  }
  .new-icon-cloud-off:before {
    content: "\\e9a6";
  }
  .new-icon-cloud-download:before {
    content: "\\e9a7";
  }
  .new-icon-cloud-done:before {
    content: "\\e9a8";
  }
  .new-icon-cloud-circle:before {
    content: "\\e9a9";
  }
  .new-icon-cloud:before {
    content: "\\e9aa";
  }
  .new-icon-close:before {
    content: "\\e9ab";
  }
  .new-icon-chevron-right:before {
    content: "\\e9ac";
  }
  .new-icon-chevron-left:before {
    content: "\\e9ad";
  }
  .new-icon-check-circle-outline:before {
    content: "\\e9ae";
  }
  .new-icon-check-circle:before {
    content: "\\e9af";
  }
  .new-icon-check-box-outline-blank:before {
    content: "\\e9b0";
  }
  .new-icon-check-box:before {
    content: "\\e9b1";
  }
  .new-icon-check:before {
    content: "\\e9b2";
  }
  .new-icon-chat-bubble:before {
    content: "\\e9b3";
  }
  .new-icon-chat:before {
    content: "\\e9b4";
  }
  .new-icon-card-giftcard:before {
    content: "\\e9b5";
  }
  .new-icon-cancel:before {
    content: "\\e9b6";
  }
  .new-icon-camera-alt:before {
    content: "\\e9b7";
  }
  .new-icon-call-end:before {
    content: "\\e9b8";
  }
  .new-icon-call:before {
    content: "\\e9b9";
  }
  .new-icon-calendar-today:before {
    content: "\\e9ba";
  }
  .new-icon-cake:before {
    content: "\\e9bb";
  }
  .new-icon-build:before {
    content: "\\e9bc";
  }
  .new-icon-bookmarks:before {
    content: "\\e9bd";
  }
  .new-icon-bookmark-border:before {
    content: "\\e9be";
  }
  .new-icon-bookmark:before {
    content: "\\e9bf";
  }
  .new-icon-bluetooth-searching:before {
    content: "\\e9c0";
  }
  .new-icon-bluetooth-disabled:before {
    content: "\\e9c1";
  }
  .new-icon-bluetooth-connected:before {
    content: "\\e9c2";
  }
  .new-icon-bluetooth:before {
    content: "\\e9c3";
  }
  .new-icon-block:before {
    content: "\\e9c4";
  }
  .new-icon-backup:before {
    content: "\\e9c5";
  }
  .new-icon-autorenew:before {
    content: "\\e9c6";
  }
  .new-icon-attachment:before {
    content: "\\e9c7";
  }
  .new-icon-assignment-ind:before {
    content: "\\e9c8";
  }
  .new-icon-assignment:before {
    content: "\\e9c9";
  }
  .new-icon-assessment:before {
    content: "\\e9ca";
  }
  .new-icon-aspect-ratio:before {
    content: "\\e9cb";
  }
  .new-icon-arrow-upward:before {
    content: "\\e9cc";
  }
  .new-icon-arrow-right:before {
    content: "\\e9cd";
  }
  .new-icon-arrow-left:before {
    content: "\\e9ce";
  }
  .new-icon-arrow-forward-ios:before {
    content: "\\e9cf";
  }
  .new-icon-arrow-forward:before {
    content: "\\e9d0";
  }
  .new-icon-arrow-drop-up:before {
    content: "\\e9d1";
  }
  .new-icon-arrow-drop-down-circle:before {
    content: "\\e9d2";
  }
  .new-icon-arrow-drop-down:before {
    content: "\\e9d3";
  }
  .new-icon-arrow-downward:before {
    content: "\\e9d4";
  }
  .new-icon-arrow-backward-ios:before {
    content: "\\e9d5";
  }
  .new-icon-arrow-back:before {
    content: "\\e9d6";
  }
  .new-icon-apps:before {
    content: "\\e9d7";
  }
  .new-icon-alarm-on:before {
    content: "\\e9d8";
  }
  .new-icon-alarm-off:before {
    content: "\\e9d9";
  }
  .new-icon-alarm-add:before {
    content: "\\e9da";
  }
  .new-icon-alarm:before {
    content: "\\e9db";
  }
  .new-icon-add-photo-alternate:before {
    content: "\\e9dc";
  }
  .new-icon-add-circle-outline:before {
    content: "\\e9dd";
  }
  .new-icon-add-circle:before {
    content: "\\e9de";
  }
  .new-icon-add-box:before {
    content: "\\e9df";
  }
  .new-icon-add-alert:before {
    content: "\\e9e0";
  }
  .new-icon-add-a-photo:before {
    content: "\\e9e1";
  }
  .new-icon-add:before {
    content: "\\e9e2";
  }
  .new-icon-account-circle:before {
    content: "\\e9e3";
  }
  .new-icon-account-box:before {
    content: "\\e9e4";
  }
  .new-icon-account-balance-wallet:before {
    content: "\\e9e5";
  }
  .new-icon-Whatsapp-alt:before {
    content: "\\e9e6";
  }
  .new-icon-Subtraction-1:before {
    content: "\\e9e7";
  }
`;

export default FontStyle;

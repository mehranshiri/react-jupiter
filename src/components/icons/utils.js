import defaultTheme from '../themes';
import theme from './theme';

export const getIconContentByType = (type) => {
  switch (type) {
    case 'zoom-out':
      return 'content: "\\e900"';

    case 'zoom-in':
      return 'content: "\\e901"';

    case 'today':
      return 'content: "\\e902"';

    case 'assessment':
      return 'content: "\\e903"';

    case 'aspect-ratio':
      return 'content: "\\e904"';

    case 'alarm-on':
      return 'content: "\\e905"';

    case 'alarm-off':
      return 'content: "\\e906"';

    case 'watch-later':
      return 'content: "\\e907"';

    case 'touch-app':
      return 'content: "\\e908"';

    case 'exit-to-app':
      return 'content: "\\e909"';

    case 'event-seat':
      return 'content: "\\e90a"';

    case 'event':
      return 'content: "\\e90b"';

    case 'description':
      return 'content: "\\e90c"';

    case 'delete-outline':
      return 'content: "\\e90d"';

    case 'delete':
      return 'content: "\\e90e"';

    case 'credit-card':
      return 'content: "\\e90f"';

    case 'copyright':
      return 'content: "\\e910"';

    case 'commute':
      return 'content: "\\e911"';

    case 'code':
      return 'content: "\\e912"';

    case 'check-circle-outline':
      return 'content: "\\e913"';

    case 'check-circle':
      return 'content: "\\e914"';

    case 'card-giftcard':
      return 'content: "\\e915"';

    case 'calendar-today':
      return 'content: "\\e916"';

    case 'build':
      return 'content: "\\e917"';

    case 'alarm-add':
      return 'content: "\\e918"';

    case 'alarm':
      return 'content: "\\e919"';

    case 'account-circle':
      return 'content: "\\e91a"';

    case 'account-box':
      return 'content: "\\e91b"';

    case 'account-balance-wallet':
      return 'content: "\\e91c"';

    case 'view-carousel':
      return 'content: "\\e91d"';

    case 'update':
      return 'content: "\\e91e"';

    case 'query-builder':
      return 'content: "\\e91f"';

    case 'print':
      return 'content: "\\e920"';

    case 'perm-identity':
      return 'content: "\\e921"';

    case 'perm-contact-calendar':
      return 'content: "\\e922"';

    case 'info':
      return 'content: "\\e923"';

    case 'home':
      return 'content: "\\e924"';

    case 'history-1':
      return 'content: "\\e925"';

    case 'highlight-off':
      return 'content: "\\e926"';

    case 'help-outline':
      return 'content: "\\e927"';

    case 'help':
      return 'content: "\\e928"';

    case 'get-app':
      return 'content: "\\e929"';

    case 'fingerprint':
      return 'content: "\\e92a"';

    case 'favorite-border':
      return 'content: "\\e92b"';

    case 'favorite':
      return 'content: "\\e92c"';

    case 'bookmark-border':
      return 'content: "\\e92d"';

    case 'bookmarks':
      return 'content: "\\e92e"';

    case 'bookmark':
      return 'content: "\\e92f"';

    case 'backup':
      return 'content: "\\e930"';

    case 'autorenew':
      return 'content: "\\e931"';

    case 'assignment-ind':
      return 'content: "\\e932"';

    case 'assignment':
      return 'content: "\\e933"';

    case 'work-outline':
      return 'content: "\\e934"';

    case 'verified_user':
      return 'content: "\\e935"';

    case 'theaters':
      return 'content: "\\e936"';

    case 'supervisor-account':
      return 'content: "\\e937"';

    case 'supervised-user-circle':
      return 'content: "\\e938"';

    case 'shopping-cart':
      return 'content: "\\e939"';

    case 'settings-ethernet':
      return 'content: "\\e93a"';

    case 'settings-applications':
      return 'content: "\\e93b"';

    case 'setting':
      return 'content: "\\e93c"';

    case 'search':
      return 'content: "\\e93d"';

    case 'restore':
      return 'content: "\\e93e"';

    case 'report-problem':
      return 'content: "\\e93f"';

    case 'question-answer':
      return 'content: "\\e940"';

    case 'offline-pin':
      return 'content: "\\e941"';

    case 'note-add':
      return 'content: "\\e942"';

    case 'loyalty':
      return 'content: "\\e943"';

    case 'lock-open':
      return 'content: "\\e944"';

    case 'lock':
      return 'content: "\\e945"';

    case 'language':
      return 'content: "\\e946"';

    case 'hourglass-full':
      return 'content: "\\e947"';

    case 'hourglass-empty':
      return 'content: "\\e948"';

    case 'dashboard':
      return 'content: "\\e949"';

    case 'zoom-out-map':
      return 'content: "\\e94a"';

    case 'work-off':
      return 'content: "\\e94b"';

    case 'work':
      return 'content: "\\e94c"';

    case 'visibility-off':
      return 'content: "\\e94d"';

    case 'visibility':
      return 'content: "\\e94e"';

    case 'thumb-up':
      return 'content: "\\e94f"';

    case 'thumb-down':
      return 'content: "\\e950"';

    case 'stay-current-landscape':
      return 'content: "\\e951"';

    case 'share':
      return 'content: "\\e952"';

    case 'remove-circle':
      return 'content: "\\e953"';

    case 'playlist-add':
      return 'content: "\\e954"';

    case 'headset':
      return 'content: "\\e955"';

    case 'check-box':
      return 'content: "\\e956"';

    case 'cancel':
      return 'content: "\\e957"';

    case 'call':
      return 'content: "\\e958"';

    case 'cake':
      return 'content: "\\e959"';

    case 'bluetooth':
      return 'content: "\\e95a"';

    case 'attachment':
      return 'content: "\\e95b"';

    case 'apps':
      return 'content: "\\e95c"';

    case 'add-a-photo':
      return 'content: "\\e95d"';

    case 'add':
      return 'content: "\\e95e"';

    case 'warning':
      return 'content: "\\e95f"';

    case 'thumb-down-alt':
      return 'content: "\\e960"';

    case 'stay-current-portrait':
      return 'content: "\\e961"';

    case 'remove-circle-outline':
      return 'content: "\\e962"';

    case 'place':
      return 'content: "\\e964"';

    case 'mood':
      return 'content: "\\e965"';

    case 'loop':
      return 'content: "\\e966"';

    case 'headset-mic':
      return 'content: "\\e967"';

    case 'error':
      return 'content: "\\e968"';

    case 'equalizer':
      return 'content: "\\e969"';

    case 'cloud':
      return 'content: "\\e96a"';

    case 'check-box-outline-blank':
      return 'content: "\\e96b"';

    case 'check':
      return 'content: "\\e96c"';

    case 'call-end':
      return 'content: "\\e96d"';

    case 'bluetooth-connected':
      return 'content: "\\e96e"';

    case 'arrow-back':
      return 'content: "\\e96f"';

    case 'add-photo-alternate':
      return 'content: "\\e970"';

    case 'add-box':
      return 'content: "\\e971"';

    case 'add-alert':
      return 'content: "\\e972"';

    case 'vpn-key':
      return 'content: "\\e973"';

    case 'volume-up':
      return 'content: "\\e974"';

    case 'volume-off':
      return 'content: "\\e975"';

    case 'volume-mute':
      return 'content: "\\e976"';

    case 'volume-down':
      return 'content: "\\e977"';

    case 'textsms':
      return 'content: "\\e978"';

    case 'sort-by-alpha':
      return 'content: "\\e979"';

    case 'play-circle-outline':
      return 'content: "\\e97a"';

    case 'play-arrow':
      return 'content: "\\e97c"';

    case 'playlist-play':
      return 'content: "\\e97d"';

    case 'pause-circle-outline':
      return 'content: "\\e97e"';

    case 'not-interested':
      return 'content: "\\e97f"';

    case 'notification-important':
      return 'content: "\\e980"';

    case 'note':
      return 'content: "\\e981"';

    case 'mic-off':
      return 'content: "\\e982"';

    case 'mic-none':
      return 'content: "\\e983"';

    case 'mic':
      return 'content: "\\e984"';

    case 'mail-outline':
      return 'content: "\\e985"';

    case 'location-on':
      return 'content: "\\e986"';

    case 'error-outline':
      return 'content: "\\e987"';

    case 'where-to-vote':
      return 'content: "\\e988"';

    case 'send':
      return 'content: "\\e989"';

    case 'outlined-flag':
      return 'content: "\\e98a"';

    case 'mail':
      return 'content: "\\e98b"';

    case 'location-off':
      return 'content: "\\e98c"';

    case 'link-off':
      return 'content: "\\e98d"';

    case 'link':
      return 'content: "\\e98e"';

    case 'import-contacts':
      return 'content: "\\e98f"';

    case 'gps_off':
      return 'content: "\\e990"';

    case 'forum':
      return 'content: "\\e991"';

    case 'email':
      return 'content: "\\e992"';

    case 'drafts':
      return 'content: "\\e993"';

    case 'dialpad':
      return 'content: "\\e994"';

    case 'delete-sweep':
      return 'content: "\\e995"';

    case 'create':
      return 'content: "\\e996"';

    case 'chat-bubble':
      return 'content: "\\e997"';

    case 'chat':
      return 'content: "\\e998"';

    case 'block':
      return 'content: "\\e999"';

    case 'add-circle-outline':
      return 'content: "\\e99a"';

    case 'add-circle':
      return 'content: "\\e99b"';

    case 'thumb-up-alt':
      return 'content: "\\e99c"';

    case 'mood-bad':
      return 'content: "\\e99d"';

    case 'indeterminate-check-box':
      return 'content: "\\e99e"';

    case 'gps-not-fixed':
      return 'content: "\\e99f"';

    case 'gps-fixed':
      return 'content: "\\e9a0"';

    case 'cloud-upload':
      return 'content: "\\e9a1"';

    case 'cloud-queue':
      return 'content: "\\e9a2"';

    case 'cloud-off':
      return 'content: "\\e9a3"';

    case 'cloud-download':
      return 'content: "\\e9a4"';

    case 'cloud-done':
      return 'content: "\\e9a5"';

    case 'cloud-circle':
      return 'content: "\\e9a6"';

    case 'chevron-left':
      return 'content: "\\e9a7"';

    case 'bluetooth-searching':
      return 'content: "\\e9a8"';

    case 'bluetooth-disabled':
      return 'content: "\\e9a9"';

    case 'watch':
      return 'content: "\\e9aa"';

    case 'tv':
      return 'content: "\\e9ab"';

    case 'tablet-android':
      return 'content: "\\e9ac"';

    case 'tablet':
      return 'content: "\\e9ad"';

    case 'smartphone':
      return 'content: "\\e9ae"';

    case 'keyboard-voice':
      return 'content: "\\e9af"';

    case 'crop-rotate':
      return 'content: "\\e9b0"';

    case 'arrow-backward-ios':
      return 'content: "\\e9b1"';

    case 'radio-button-unchecked':
      return 'content: "\\e9b2"';

    case 'radio-button-checked':
      return 'content: "\\e9b3"';

    case 'ondemand-video':
      return 'content: "\\e9b4"';

    case 'notifications-active':
      return 'content: "\\e9b5"';

    case 'notifications':
      return 'content: "\\e9b6"';

    case 'keyboard-backspace':
      return 'content: "\\e9b7"';

    case 'keyboard':
      return 'content: "\\e9b8"';

    case 'group':
      return 'content: "\\e9b9"';

    case 'close':
      return 'content: "\\e9ba"';

    case 'chevron-right':
      return 'content: "\\e9bb"';

    case 'camera-alt':
      return 'content: "\\e9bc"';

    case 'arrow-upward':
      return 'content: "\\e9bd"';

    case 'arrow-right':
      return 'content: "\\e9be"';

    case 'arrow-left':
      return 'content: "\\e9bf"';

    case 'arrow-forward-ios':
      return 'content: "\\e9c0"';

    case 'arrow-drop-down':
      return 'content: "\\e9c1"';

    case 'arrow-downward':
      return 'content: "\\e9c2"';

    case 'star-border':
      return 'content: "\\e9c3"';

    case 'star':
      return 'content: "\\e9c4"';

    case 'sentiment-very-satisfied':
      return 'content: "\\e9c5"';

    case 'sentiment-very-dissatisfied':
      return 'content: "\\e9c6"';

    case 'sentiment-satisfied':
      return 'content: "\\e9c7"';

    case 'sentiment-dissatisfied':
      return 'content: "\\e9c8"';

    case 'notifications-paused':
      return 'content: "\\e9c9"';

    case 'notifications-off':
      return 'content: "\\e9ca"';

    case 'notifications-none':
      return 'content: "\\e9cb"';

    case 'more-vert':
      return 'content: "\\e9cc"';

    case 'more-horiz':
      return 'content: "\\e9cd"';

    case 'menu':
      return 'content: "\\e9ce"';

    case 'expand-more':
      return 'content: "\\e9cf"';

    case 'expand-less':
      return 'content: "\\e9d0"';

    case 'arrow-forward':
      return 'content: "\\e9d1"';

    case 'arrow-drop-up':
      return 'content: "\\e9d2"';

    case 'arrow-drop-down-circle':
      return 'content: "\\e9d3"';

    case 'toggle-on':
      return 'content: "\\e9d4"';

    case 'toggle-off':
      return 'content: "\\e9d5"';

    case 'star-half':
      return 'content: "\\e9d6"';

    default:
      return '';
  }
};

export const getSizeOfIcon = (size) => {
  switch (size) {
    case defaultTheme.sizes.large:
      return theme.sizes.large;
    case defaultTheme.sizes.small:
      return theme.sizes.small;
    case defaultTheme.sizes.medium:
    default:
      return theme.sizes.medium;
  }
};

export const getMarginOfIcon = (size) => {
  switch (size) {
    case defaultTheme.sizes.large:
      return theme.sizes.largeMargin;
    case defaultTheme.sizes.small:
      return theme.sizes.smallMargin;
    case defaultTheme.sizes.medium:
    default:
      return theme.sizes.mediumMargin;
  }
};

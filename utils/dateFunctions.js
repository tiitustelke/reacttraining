import {format, formatDistance} from 'date-fns';
import {fi} from 'date-fns/locale';

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
const formatDate = (date, formatStr = 'PP', locale = fi) => {
  return format(date, formatStr, {
    locale,
  });
};

const timeSince = (date, locale = fi) => {
  return formatDistance(new Date(date), new Date(), {addSuffix: true, locale});
};

export {formatDate, timeSince};

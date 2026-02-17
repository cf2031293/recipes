import { ref } from 'vue';

export default function useDateFormat() {
  const formattedDate = ref('');

  function formatDate(date) {
    const userLocale = navigator.language || 'en-US';
    formattedDate.value = new Intl.DateTimeFormat(userLocale).format(new Date(date));
  }

  return { formattedDate, formatDate };
}

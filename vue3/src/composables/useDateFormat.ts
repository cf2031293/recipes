import {useI18n} from "vue-i18n";
import {DateTime} from "luxon";

export function useDateFormat() {
    const {locale} = useI18n();

    function formatDate(date: Date | DateTime | string): string {
        const dateObj = date instanceof DateTime ? date : DateTime.fromJSDate(new Date(date));
        const lang = locale.value.split('-')[0].toLowerCase();
        return lang === 'en' ? dateObj.toFormat('MM/dd/yyyy') : dateObj.toFormat('dd/MM/yyyy');
    }

    return {formatDate};
}

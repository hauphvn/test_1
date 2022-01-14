export function toYYYYMMDD(date: any) {
	if (!isNaN(new Date(date).getTime())) {
		var yyyy = date.getFullYear().toString();
		var mm = (date.getMonth() + 101).toString().slice(-2);
		var dd = (date.getDate() + 100).toString().slice(-2);
		return `${yyyy}/${mm}/${dd}`;
	} else {
		return '';
	}
}
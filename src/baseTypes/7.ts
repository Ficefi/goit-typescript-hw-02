/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
	MONDAY = "monday",
	TUESDAY = "tuesday",
	WEDNESDAY = "wednesday",
	THURSDAY = "thursday",
	FRIDAY = "friday",
	SATURDAY = "saturday",
	SUNDAY = "sunday",
}

function isWeekend(week: Week): boolean {
	if (week.toLowerCase() === "saturday" || week.toLowerCase() === "sunday") {
		return true;
	} else {
		return false;
	}
}

export {};

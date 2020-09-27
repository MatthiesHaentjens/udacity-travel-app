export function daysToGo(date) {

    // Get date entered in the form and date today
    const departureDate = new Date(date);
    const today = new Date();

    // Calculate the number of days remaining
    const diffBetweenDates = departureDate.getTime() - today.getTime();
    const daysToGo = Math.floor(diffBetweenDates / (1000 * 3600 * 24));

    // Return value
    return daysToGo;

}
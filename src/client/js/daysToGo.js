export function daysToGo(date) {

    // Get data entered in the form
    const departureDate = new Date(date);
    console.log(departureDate)

    // Date today
    const today = new Date();
    console.log(today)
    // const todayFormatted = new Date(today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear())
    // console.log(todayFormatted)

    // Calculate the number of days remaining
    const diffBetweenDates = departureDate.getTime() - today.getTime();
    console.log(diffBetweenDates)
    const daysToGo = Math.floor(diffBetweenDates / (1000 * 3600 * 24));
    console.log(daysToGo)

    // Return value
    return daysToGo;

}
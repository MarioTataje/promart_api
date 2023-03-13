const moment = require('moment');

const formatDate = (date) => {
    date = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$2-$1");
    date = new Date(date);
    return date;
}

const getProbablyDeathDate = (dateString) => {
    const probablyDeath = moment(dateString, 'DD/MM/YYYY');
    probablyDeath.add(70, 'years');
    const probablyDeathFormatted = probablyDeath.format('DD/MM/YYYY');
    return probablyDeathFormatted;
}

const getAges = (clients) => {
    const ages = [];
    clients.forEach((client) => ages.push(client.edad));
    return ages;
}

const calculateMean = (ages) => {
    const average = ages.reduce((a, b) => a + b, 0) / ages.length;
    return average;
}

const calculateStandardDeviation = (ages) => {
    const average = calculateMean(ages);
    const squareDiffs = ages.map((age) => {
        const diff = age - average;
        return diff * diff;
    });
    const variance = calculateMean(squareDiffs);
    const standardDeviation = Math.sqrt(variance);
    const standardDeviationFixed = Number(standardDeviation.toFixed(4));
    return standardDeviationFixed;
}

module.exports = {
    formatDate,
    getProbablyDeathDate,
    getAges,
    calculateMean,
    calculateStandardDeviation
}
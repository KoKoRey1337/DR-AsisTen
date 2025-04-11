const fs = require('fs');
const path = require('path');

const domainFile = path.join(__dirname, '../data/domainList.json');

function getDomains() {
    try {
        return JSON.parse(fs.readFileSync(domainFile));
    } catch {
        return [];
    }
}

function saveDomains(domains) {
    fs.writeFileSync(domainFile, JSON.stringify(domains, null, 2));
}

function addDomainToCheck(domain) {
    const domains = getDomains();
    if (!domains.includes(domain)) {
        domains.push(domain);
        saveDomains(domains);
        return true;
    }
    return false;
}

module.exports = {
    getDomains,
    saveDomains,
    addDomainToCheck
}

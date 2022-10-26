/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

function viewAllFlags(fields) {
  fetch(`/api/flags`)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllFlagsOnFreet(fields) {
  fetch(`/api/flags/${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createFlag(fields) {
  fetch('/api/flags', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function challengeFlag(fields) {
  fetch(`/api/flags/challenge/${fields.flagId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFlag(fields) {
  fetch(`/api/flags/${fields.flagId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

function viewAllTags(fields) {
  fetch('/api/tags')
    .then(showResponse)
    .catch(showResponse);
}

function createTag(fields) {
  fetch('/api/tags', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function addTag(fields) {
  fetch(`/api/tags/add/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function removeTag(fields) {
  fetch(`/api/tags/remove${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
  .then(showResponse)
  .catch(showResponse);
}

function viewTagFreets(fields) {
  fetch(`/api/tags/${fields.tag}`)
  .then(showResponse)
  .catch(showResponse);
}
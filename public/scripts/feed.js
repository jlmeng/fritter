/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

 function viewAllFeeds(fields) {
    fetch('/api/feeds')
      .then(showResponse)
      .catch(showResponse);
  }
  
  function viewFeed(fields) {
    fetch(`/api/feeds/${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }
  
  function createFeed(fields) {
    fetch('/api/feeds', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function addTagFeed(fields) {
    fetch(`/api/feeds/addtag/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

  function removeTagFeed(fields) {
    fetch(`/api/feeds/removetag/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

  function addUserFeed(fields) {
    fetch(`/api/feeds/adduser/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

  function removeUserFeed(fields) {
    fetch(`/api/feeds/removeuser/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function deleteFeed(fields) {
    fetch(`/api/feeds/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }
  
  
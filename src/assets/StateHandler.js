/* window.onpopstate = function (e) {
  console.log("Popped state");
  if (e.state !== null) {
    console.log("State found");
    // state data available
    // load the page using state data
    console.log($("body").load(e.state.url));
    //initiate_load_updated_page(e.state.ajax_string, e.state.security, 0);
  } else {
    console.log("No state found");
    // no state data available
    // load initial page which was there at first page load
    $("body").load("/src/app/app.component.html");
  }
};

 */

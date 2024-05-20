function cheesy_pick_up_lines() {
      let html = "";
      for (let i = 0; i < 3; i++) {
            fetch("https://api.vvhan.com/api/text/love?type=json")
            .then((data) => data.text())
            .then((data) => {
                  const dataObj = JSON.parse(data);
                  if ( !dataObj.success ) return;
                  const content = dataObj.data.content;
                  html += "<li>" + content + "</li>";
                  document.querySelector("#cheesy_pick-up_lines-container").innerHTML =
                        html;
            })
            .catch(function (error) {
                  console.log(error);
            });
      }
}

cheesy_pick_up_lines()
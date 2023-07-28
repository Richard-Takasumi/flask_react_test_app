import axios from "axios";

function getData() {
    axios({
      method: "GET",
      url:"/epic",
    })
    .then((response) => {
      const res = response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 
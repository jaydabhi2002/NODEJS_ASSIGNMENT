var headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA=="
);

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

const getContries = () => {
  fetch("https://api.countrystatecity.in/v1/countries", requestOptions).then(response => {
      return response.json();
  }).then(result => {

      console.log(result[0]);
      var options = "<option>---Select country---</option>";
      for (var i = 0; i < result.length; i++) {
          options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
      }
      country.innerHTML = options

  }).catch(err => {
      console.log(err);
  })
}
var countryCode;
const getStates = (cname) => {

    countryCode = cname;
    fetch(`https://api.countrystatecity.in/v1/countries/${cname}/states`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select State---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        console.log(options);
        state.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}
var statecode;
const getCities = (scode) => {

    statecode = scode
    fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${scode}/cities`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select city---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].name + ">" + result[i].name + "</option>"
        }
        console.log(options);
        city.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}
var ccode;
var kkk;
const timeanddate = (val) => {
  ccode = val;
  //   alert(ccode);
  fetch(
    `https://timezone.abstractapi.com/v1/current_time/?api_key=1089efabd8e54844810c1883ba1b2b80&location=${ccode}`
  ).then((result) => {
    return result.json();
  }).then((data) => {
    mylatitude.innerHTML = data.latitude;
    mylongitude.innerHTML = data.longitude;
    kkk = mydatetime.innerHTML = data.datetime;
    myrequested_location.innerHTML = data.requested_location;
    mytimezone_location.innerHTML = data.timezone_location;
    mytimezone_name.innerHTML = data.timezone_name;
  })
}
setInterval(setDate, 1000);

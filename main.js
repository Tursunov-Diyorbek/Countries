const asia = document.getElementById("asia");
const europe = document.getElementById("europe");
const america = document.getElementById("america");
const africa = document.getElementById("africa");
const oceania = document.getElementById("oceania");
const menu = document.getElementById("menu");
const row = document.getElementById("row");
const creates = document.getElementById("creates");
const creates2 = document.getElementById("creates2");

const changeModal = new bootstrap.Modal(
  document.getElementById("changeModal"),
  {
    keyboard: false,
  }
);

let searchText = "";
let countriesdata = [];

let spinner = `
<div class="h-100 d-flex justify-content-center align-items-center">
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
<div class="wheel"></div>
<div class="hamster">
  <div class="hamster__body">
    <div class="hamster__head">
      <div class="hamster__ear"></div>
      <div class="hamster__eye"></div>
      <div class="hamster__nose"></div>
    </div>
    <div class="hamster__limb hamster__limb--fr"></div>
    <div class="hamster__limb hamster__limb--fl"></div>
    <div class="hamster__limb hamster__limb--br"></div>
    <div class="hamster__limb hamster__limb--bl"></div>
    <div class="hamster__tail"></div>
  </div>
</div>
<div class="spoke"></div>
</div>
</div>
`;

const link = {
  asia: "https://restcountries.com/v3.1/region/asia",
  europe: "https://restcountries.com/v3.1/region/europe",
  america: "https://restcountries.com/v3.1/region/america",
  africa: "https://restcountries.com/v3.1/region/africa",
  oceania: "https://restcountries.com/v3.1/region/oceania",
};

const valu = (area) => {
  if (area === "asia") {
    url = `https://restcountries.com/v3.1/region/${area}`;
  } else {
    url = `https://restcountries.com/v3.1/region/${area}`;
  }
};

const continents = () => {
  axios.get(link.asia).then(function (res) {
    res.data.map((item, index) => {
      asia.innerHTML += `
          <li><a class="dropdown-item" href="#" onclick="onCommon(${index})">${item.name.common}</a></li>
        `;
    });
  });

  axios.get(link.europe).then(function (res) {
    res.data.map((item, index) => {
      europe.innerHTML += `
          <li><a class="dropdown-item" href="#" onclick="onCommon(${index})">${item.name.common}</a></li>
        `;
    });
  });

  axios.get(link.america).then(function (res) {
    res.data.map((item, index) => {
      america.innerHTML += `
          <li><a class="dropdown-item" href="#" onclick="onCommon(${index})">${item.name.common}</a></li>
        `;
    });
  });

  axios.get(link.africa).then(function (res) {
    res.data.map((item, index) => {
      africa.innerHTML += `
          <li><a class="dropdown-item" href="#" onclick="onCommon(${index})">${item.name.common}</a></li>
        `;
    });
  });

  axios.get(link.oceania).then(function (res) {
    res.data.map((item, index) => {
      oceania.innerHTML += `
          <li><a class="dropdown-item" href="#" onclick="onCommon(${index})">${item.name.common}</a></li>
        `;
    });
  });
};

const info = () => {
  menu.innerHTML = spinner;
  axios
    .get("https://restcountries.com/v3.1/all")
    .then(function (res) {
      menu.innerHTML = "All";
      menu.className = "text-center my-4 fw-bold";
      row.innerHTML = "";

      countriesdata.filter((item) => {
        item?.name?.common?.toLowerCase().includes(searchText.toLowerCase());
      });
      res.data.slice(0, 20).map((item, index) => {
        row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mb-4">
      <div class="book">
      <div>
      <div class="d-flex justify-content-center">
      <img src="${item.coatOfArms.png}" alt="Not Fount" class="i-g">
      </div>
      <p class="text-center m-0 my-3 text-warning fw-bold">CoatOfArms</p>
      <p class="fw-bold text-success"><span class="fw-normal text-primary">State Name: </span>${item.name.common}</p>
      <p class="fw-bold text-success"><span class="fw-normal text-primary">Capital: </span>${item.capital}</p>
      <p class="fw-bold text-success"><span class="fw-normal text-primary">Region: </span>${item.region}</p>
      <p class="text-primary">Map: <a href="${item.maps.openStreetMaps}" class="fw-bold text-success text-decoration-none" target="_blank">${item.name.common} <i class="fas fa-regular fa-map-location-dot"></i></a></p>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#changeModal2" onclick="btn2(${index})">Change</button>
      </div>
      <div class="cover">
      <img src="${item.flags.png}" alt="rasm" class="w-100 h-75 object-fit-cover">
      </div>
     </div>
      </div>
      `;
      });
    })
    .catch(function (error) {
      menu.innerHTML = `
    <div>
    <p class="text-danger"><i class="fa-solid fa-triangle-exclamation fa-beat-fade text-danger"></i> 404 Not Found</p>
    </div>
    `;
      console.log(error);
    });
  row.innerHTML = "";
};

const onCommon = (index) => {
  menu.innerHTML = spinner;
  axios
    .get(url)
    .then(function (res) {
      const state = res.data;
      menu.innerHTML = `${state[index].name.common}`;
      row.innerHTML = `
    <div class="d-flex justify-content-center">
    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
            <img src="${state[index].flags.png}" alt="rasm" class="w-100">
            </div>
            <div class="backSide">
            <div>
            <div class="d-flex justify-content-center">
            <img src="${
              state[index].coatOfArms.png
            }" alt="Not Fount" class="i-g">
            </div>
            <p class="text-center m-0 my-3 text-warning fw-bold">CoatOfArms</p>
            <p class="fw-bold text-success"><span class="fw-normal text-primary">State Name: </span>${
              state[index].name.common
            }</p>
            <p class="fw-bold text-success"><span class="fw-normal text-primary">Capital: </span>${
              state[index].capital
            }</p>
            <p class="fw-bold text-success"><span class="fw-normal text-primary">Region: </span>${
              state[index].region
            }</p>
            <p class="fw-bold text-success"><span class="fw-normal text-primary">Languages: </span>${Object.values(
              state[index].languages
            )}</p>
            <p class="text-primary">Map: <a href="${
              state[index].maps.openStreetMaps
            }" class="fw-bold text-success text-decoration-none" target="_blank">${
        state[index].name.common
      } <i class="fas fa-regular fa-map-location-dot"></i></a></p>
            </div>
            </div>
        </div>
    </div>
    </div>
    `;
    })
    .catch(function (error) {
      menu.innerHTML = `
  <div>
  <p class="text-danger"><i class="fa-solid fa-triangle-exclamation fa-beat-fade text-danger"></i> 404 Not Found</p>
  </div>
  `;
    });
};

const search = (e) => {
  searchText = e.target.value;
  info();
};

const btn = () => {
  changeModal.show();
  creates.innerHTML = `
      <div class="d-flex align-items-center mt-2">
      <input type="file" class="form-control w-50" id="create1">
      </div>

      <div class="d-flex align-items-center mt-2">
      <input type="text" class="form-control w-50" id="create2" placeholder="State Name">
      </div>

      <div class="d-flex align-items-center mt-2">
      <input type="text" class="form-control w-50" id="create3" placeholder="Capital Name">
      </div>

      <div class="d-flex align-items-center mt-2">
      <input type="text" class="form-control w-50" id="create4" placeholder="Region">
      </div>

      <div class="d-flex align-items-center justify-content-between mt-2">
      <input type="text" class="form-control w-50" id="create5" placeholder="Language">
      <button type="submit" class="btn btn-light" id="add2">Add data</button>
      </div>
  `;
  let = count = 0;
  const add2 = document.getElementById("add2");
  add2.onclick = () => {
    const addInput = document.createElement("input");
    addInput.className = "form-control w-50 ms-3 mt-2 count";
    addInput.setAttribute("placeholder", `${count++}`);
    creates.appendChild(addInput);
  };

  creatPost.addEventListener("click", function () {
    const add2 = document.querySelector("#add2");
    const countt = document.querySelectorAll("count").value;
    let languages = [];

    // for (let i = 0; i < add2.length; i++) {
    //   console.log(add2[i]);
    //   languages.push(countt);
    // }

    const infos = {
      img: document.querySelector("#create1"),
      state: document.querySelector("#create2").value,
      capital: document.querySelector("#create3").value,
      region: document.querySelector("#create4").value,
      language: languages,
    };
    axios
      .post("https://restcountries.com/v3.1/create", {
        state: infos.state,
        capital: infos.capital,
        region: infos.region,
        language: infos.language,
      })
      .then((res) => {
        if (res.ok) {
          alert("Muvofaqiyatli jo'natildi");
        } else {
          alert("Muvofaqiyatsiz");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

const btn2 = (index) => {
  axios.get("https://restcountries.com/v3.1/all").then(function (res) {
    const state2 = res.data;
    creates2.innerHTML = `
    <div class="d-flex text-primary align-items-center mt-2 justify-content-between">
    <label for="" class="fw-bold">State Name: </label>
    <input type="text" class="form-control w-50" id="inp1" value = "${
      state2[index].name.common
    }">
    </div>

    <div class="d-flex text-primary align-items-center mt-2 justify-content-between">
    <label for="" class="fw-bold">Capital: </label>
    <input type="text" class="form-control w-50" id="inp2" value = "${
      state2[index].capital
    }">
    </div>

    <div class="d-flex text-primary align-items-center mt-2 justify-content-between">
    <label for="" class="fw-bold">Region: </label>
    <input type="text" class="form-control w-50" id="inp3" value = "${
      state2[index].region
    }">
    </div>

    <div class="d-flex text-primary align-items-center mt-2 justify-content-between">
    <label for="" class="fw-bold">Languages: </label>
    <input type="text" class="form-control w-50" id="inp4" value = "${Object.values(
      state2[index].languages
    )}">
    </div>
    `;
  });

  changeAdd.addEventListener("click", function () {
    const formData = {
      name: document.getElementById("inp1").value,
      capital: document.getElementById("inp2").value,
      region: document.getElementById("inp3").value,
      languages: document.getElementById("inp4").value,
    };
    axios
      .put(`https://restcountries.com/v3.1/all`, {
        name: formData.name,
        capital: formData.capital,
        region: formData.region,
        languages: formData.languages,
      })
      .then((res) => {
        if (res.ok) {
          alert("Muvofaqiyatli jo'natildi");
        } else {
          alert("Muvofaqiyatsiz");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

const init = () => {
  continents();
  info();
  document
    .querySelector("input[placeholder='search']")
    .addEventListener("change", search);
};

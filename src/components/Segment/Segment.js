import React, { useState } from "react";
import "./Segment.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaLessThan } from "react-icons/fa";
import { Axios } from "axios";

function Segment() {
  const url = "https://webhook.site/dfe9c479-dce8-4998-b913-c03bb205cfa9";
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    account_name: "",
    city: "",
    state: "",
  });

  const [list, setList] = useState([]);

  function getValue(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  let { first_name, last_name, gender, age, account_name, city, state } = data;
  function submit(e) {
    e.preventDefault();
    setData({
      first_name: "",
      last_name: "",
      gender: "",
      age: "",
      account_name: "",
      city: "",
      state: "",
    });
    setList([...list, data]);
    Axios.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      age: data.age,
      account_name: data.account_name,
      city: data.city,
      state: data.state,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function store(e) {
    e.preventDefault();
    Axios.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      age: data.age,
      account_name: data.account_name,
      city: data.city,
      state: data.state,
    }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <div>
      <div className="save text-center">
        <button
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Save Segment
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 data-bs-dismiss="modal" aria-label="Close">
                <FaLessThan />
              </h4>
              <h5 class="modal-title" id="exampleModalLabel">
                Saving Segment
              </h5>
            </div>
            <div class="modal-body">
              <div class="first-head mb-4">
                <h4 class="mb-4">Enter the Name of the Segment</h4>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name of the segment"
                />
              </div>
              <div>
                {list.map((info, index) => {
                  return (
                    <div className="blue-box" key={index}> 
                     <div>{info.first_name}</div>
                     <div>{info.lastt_name}</div>
                     <div>{info.gender}</div>
                     <div>{info.age}</div>
                     <div>{info.account_name}</div>
                    </div>
                  );
                })}
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Add schema to segment
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <form>
                        <div class="mb-3">
                          <label for="first_name" class="col-form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="first_name"
                            onChange={(e) => getValue(e)}
                            value={data.first_name}
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="last_name" class="col-form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="last_name"
                            onChange={(e) => getValue(e)}
                            value={data.last_name}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="gender" class="col-form-label">
                            Gender
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="gender"
                            onChange={(e) => getValue(e)}
                            value={data.gender}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="age" class="col-form-label">
                            Age
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="age"
                            onChange={(e) => getValue(e)}
                            value={data.age}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="account-name" class="col-form-label">
                            Account Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="account_name"
                            onChange={(e) => getValue(e)}
                            value={data.account_name}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="city" class="col-form-label">
                            City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="city"
                            onChange={(e) => getValue(e)}
                            value={data.city}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="state" class="col-form-label">
                            State
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="state"
                            onChange={(e) => getValue(e)}
                            value={data.state}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h6 onClick={(e) => submit(e)}>
                  <AiOutlinePlus /> Add new schema
                </h6>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => store()}
              >
                Save the Segment
              </button>
              <button
                type="button"
                class="btn btn-secondary mx-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segment;

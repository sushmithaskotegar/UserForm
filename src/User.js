import React, { useEffect, useState } from "react";

function User() {
  const [user, setuser] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${page}`)
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, [page]);
  console.log(user);
  return (
    <form>
      {user && (
        <div>
          <label>Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="Enter Name"
            value={user.name}
          ></input>

          <br />
          <label>age</label>
          <input
            type="age"
            class="form-control"
            placeholder="Enter age"
            value={user.age}
          ></input>
          <br />
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="phone"
            class="form-control"
            placeholder="Enter phone"
            value={user.phone}
          ></input>
          <br />
          <label>Phone Number</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
          ></input>
          <br />
          <label>enter address</label>
          <input
            type="address"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter address"
            value={user.address}
          ></input>
          <br />

          <div>
            <label>Gender</label>
            <select>
              {user.gender === "female" ? (
                <option value="female" selected="selected">
                  female
                </option>
              ) : (
                <option value="male" selected="selected">
                  male
                </option>
              )}
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="non-binary">Non Binary</option>
            </select>
          </div>
          <br />
          <br />
        </div>
      )}
      <button
      style={{marginHorizontal:40}}
        type="button"
        class="btn btn-primary"
        onClick={() => {
          console.log(setpage(page + 1));
        }}
        title="next"
      >
        next
      </button>
    </form>
  );
}

export default User;

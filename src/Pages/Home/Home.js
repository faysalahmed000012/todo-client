import React from "react";

const Home = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const discription = event.target.detail.value;

    console.log(name, discription);
  };

  return (
    <div className="">
      <h2 className="text-lime-500 my-6 text-center text-4xl">To Do List</h2>

      <label
        for="my-modal"
        class="btn btn-outline btn-accent mb-5 modal-button mx-auto"
      >
        Add a new list
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleAdd} action="">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                name="detail"
                class="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Book"
              className="btn btn-accent w-full max-w-xs uppercase text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

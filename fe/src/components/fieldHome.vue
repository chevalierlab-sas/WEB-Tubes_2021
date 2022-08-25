<template>
  <div>
    <div
      tabindex="0"
      class="collapse border border-base-300 bg-base-100 rounded-box my-5"
    >
      <div class="collapse-title text-xl font-medium">
        <div class="card bg-base-100">
          <div class="card-body flex">
            <form class="flex">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Enter Your Question..."
                  class="input input-bordered w-full"
                  v-model="questForum.question"
                />
                <button type="submit" class="btn btn-info">Done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center my-5" v-if="isLoading">
      <p class="text-xl">Loading...</p>
      <progress class="progress w-56"></progress>
    </div>

    <div v-if="questions.length > 0">
      <div
        v-if="!isLoading && !isError"
        tabindex="0"
        class="collapse border border-base-300 bg-base-100 rounded-box my-5"
      >
        <div class="collapse-title text-xl font-medium">
          <div class="card bg-base-100">
            <div class="card-body">
              <h2 class="card-title">Nama Profile</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p class="card-actions justify-end text-sm text-gray-400">
                see comment
              </p>
            </div>
          </div>
        </div>
        <div class="collapse-content px-10">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-error shadow-lg">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>No Question.</span>
        </div>
      </div>
    </div>

    <div v-if="isError">
      <p>Erorr</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "fieldHome",
  data() {
    return {
      questForum: {
        name: "",
        question: "",

      },
      questions: [],
      comments: [],
      isLoading: false,
      isError: false,
    };
  },
};
</script>
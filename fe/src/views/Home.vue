<template>
  <div>
    <div class="navbar bg-green-500 text-white px-35 mb-8">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5" fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><router-link to="/" class="btn btn-ghost">Home</router-link></li>
            <li><router-link to="/login" class="btn btn-ghost">Login</router-link></li>
            <li><a class="btn btn-ghost">Logout</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Data Siswa</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><router-link to="/" class="btn btn-ghost">Home</router-link></li>
          <li><router-link to="/login" class="btn btn-ghost">Login</router-link></li>
          <li><a class="btn btn-ghost">Logout</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn mr-4">Username</a>
      </div>
    </div> 

    <div class="mt-4 mb-2 ml-3">
      <h1 class="text-xl font-bold">Table Student</h1>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <!-- head -->
        <thead class="text-black">
          <tr>
            <th class="bg-accent">No</th>
            <th class="bg-accent">Name</th>
            <th class="bg-accent">Major</th>
            <th class="bg-accent">City</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Jakarta</td>
          </tr>
          <!-- row 2 -->
          <tr class="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Bandung</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Surabaya</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
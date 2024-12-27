<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <img src="./assets/vue.svg" alt="Profile Logo" />
          <span>VUEFOLIO</span>
        </div>
  
        <!-- Navigation Links -->
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
  
        <!-- Language Selector -->
        <div class="language-selector">
          <button class="lang-button">
            <img src="./assets/vue.svg" alt="English" />
            <span>EN</span>
            <i class="arrow-down"></i>
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* Navbar */
  .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0; /* อย่าใช้ padding มากเกินไป */
}

  
.container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* กระจายโลโก้และเมนู */
  width: 100%;
  padding: 0 1.5rem; /* ลดระยะห่างซ้าย-ขวา */
}

  
  /* Logo Section */
  .logo {
    margin-left: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.25rem;
    color: #1e1e1e;
  }
  
  .logo img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  /* Navigation Menu */
  .menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu li a {
    text-decoration: none;
    color: #1e1e1e;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .menu li a:hover {
    color: #007bff;
  }
  
  /* Language Selector */
  .language-selector {
    position: relative;
  }
  
  .lang-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .lang-button:hover {
    background-color: #e6e6e6;
  }
  
  .lang-button img {
    width: 20px;
    height: 20px;
  }
  
  .arrow-down {
    border: solid #1e1e1e;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  </style>
  
import React from "react";

export default function Header() {


    return (


<nav class="navbar navbar-expand-lg navbar-dark mt-3">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">SUNOPLAY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <input class="form-control me-2 ms-5 w-50" type="search" id="search" placeholder="Type to search ....." aria-label="Search"/>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               
            </ul>
            <div class="d-flex dropdown">
                <li class="nav-item mt-1">
                    <button class="btn channel">My Channel <i class="bi bi-sign-turn-slight-right-fill"></i></button>
                </li>
                <li class="nav-item mt-1">
                    <a href="#" class="text-white fs-3 play"> <i class="bi bi-app-indicator"> </i></a>
                </li>
                <li class="nav-item ">
                    <a href="#" class="text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./img/img_avatar.png" class="profil" width="45" alt=""/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" id="menu-user">
                            <li><a class="dropdown-item" href="#">Mode</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider"/>
                            </li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                </li>
            </div>
        </div>
    </div>
</nav>

    
)



}